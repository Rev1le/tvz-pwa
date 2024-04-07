import { openDB } from 'idb';
import {
    // DB_STORE_NAME as FAULT_IMAGE_DB_STORE_NAME,
    createDbStore as createFaultImageStore
} from "@/entities/fault";

const dbName = 'tvz';
const dbVersion = 1;

// @todo вынести в сущность
// function createFaultImageStore(db: IDBPDatabase<unknown>) {
//     const objectStore = db.createObjectStore(FAULT_IMAGE_DB_STORE_NAME, {
//         keyPath: 'name',
//         autoIncrement: true
//     });
//     objectStore.createIndex('nameIndex', 'name', { unique: true });
// };

const dbPromise = openDB(dbName, dbVersion, {
    upgrade(db) {
        createFaultImageStore(db);
    },
});

export {
    dbPromise
}
