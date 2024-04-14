const prepareFileForDb = (file: File) => {
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
        data: event.target?.result,
      });
    }
    reader.onerror = (event) => {
      reject(event.target?.error ?? 'Неизвестная ошибка');
    };
    reader.readAsArrayBuffer(file);
  });
};


export {
  prepareFileForDb
}
