import { IDBPDatabase } from "idb";

import { prepareFileForDb,  } from "@/shared/lib/db";
// import type { DBFileFormat } from "@/shared/lib/db";
import { getStoreTransaction } from "./db";
import { useFaultStore } from "./store";

/**
 * Сохранение фоторафии в базе данных
 * @async
 * @param {File} file 
 * @param {Promise<IDBPDatabase<unknown>>} dbPromise 
 * @returns {Promise<number>}
 */
async function saveImageInDB(file: File, dbPromise: Promise<IDBPDatabase<unknown>>): Promise<number> {
  const fileDataPromise = prepareFileForDb(file);
  const [fileData, db] = await Promise.all([fileDataPromise, dbPromise]);

  return getStoreTransaction(db, 'readwrite').add(fileData);
}

/**
 * Сохранение фотографии
 * 
 * @async
 * @param faultId 
 * @param file 
 * @param dbPromise 
 */
export async function saveImage(
  faultId: number,
  file: File,
  dbPromise: Promise<IDBPDatabase<unknown>>
) {
  const imageDbIndex = await saveImageInDB(file, dbPromise);
  useFaultStore().setFaultDbImage(faultId, imageDbIndex);
}

/**
 * Запросить изображения из базы
 * 
 * @param imagesIdList 
 * @param db 
 * @returns {Promise<{[k: string]: any}>}
 */
export function retrieveFaultImages(imagesIdList: number[], db: IDBPDatabase<unknown>) {
  const store = getStoreTransaction(db);

  const valuesPromise = [];

  for (const imageId of imagesIdList) {
    const valuePromise: any = new Promise((resolve, _reject) => store
      .get(imageId)
      .then((value: any) => resolve([imageId, value]))
    )
    valuesPromise.push(valuePromise);
  }

  return Promise
    .all(valuesPromise)
    .then(values => Object.fromEntries(values));
}

/**
 * Получение локальный ссылок на изображения неисправности
 * 
 * @param {number} faultId 
 * @param {IDBPDatabase<unknown>} db
 * @returns {Promise<(string | null)[]>}
 */
export function getDbImagesUrlList(
  faultId: number,
  db: IDBPDatabase<unknown>
): Promise<(string | null)[]> {
  const faultStore = useFaultStore();
  faultStore.receiveFaultsImages();
  const faultImages = faultStore.images[faultId] ?? [];
  const store = getStoreTransaction(db);

  let urlListPromises = [];

  for (const imageDbId of faultImages) {
    const gettingLinkPromise: Promise<string|null> =
      new Promise((resolve, _reject) => {
        store
          .get(imageDbId)
          .then((value: { data: BlobPart }) => {
            if (!value) {
              faultStore.deleteImageId(faultId, Number(imageDbId));
              resolve(null);
              return
            }
            const imageBlog = new Blob([value.data]);
            const imageUrl = URL.createObjectURL(imageBlog);
            resolve(imageUrl);
          })
      })
    urlListPromises.push(gettingLinkPromise)
  }

  return Promise.all(urlListPromises).then(values => values.filter(el => !!el));
}
