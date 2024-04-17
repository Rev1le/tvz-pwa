
export type DBFileFormat = {
  name: string,
  type: string,
  size: number,
  data: ArrayBuffer
};

/**
 * Обработать файл, для сохранения в БД
 * 
 * @param {File} file 
 * @returns {Promise<DBFileFormat>}
 */
export const prepareFileForDb = (file: File): Promise<DBFileFormat> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (!event.target?.result) {
        throw `Не удалось собрать массив байтов из файла: ${file.name}`
      }
      resolve({
        name: file.name,
        type: file.type,
        size: file.size,
        data: event.target?.result as ArrayBuffer,
      });
    }

    reader.onerror = (event) => {
      reject(event.target?.error ?? 'Неизвестная ошибка');
    };

    reader.readAsArrayBuffer(file);
  });
};

// e
