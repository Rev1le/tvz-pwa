const STORE_NAME = 'fault-image';

function createDbStore(db) {
    const objectStore = db.createObjectStore(STORE_NAME, {
        autoIncrement: true
    });
    objectStore.createIndex('nameIndex', 'name', { unique: false });
};

function getStoreTransaction(db, mode = 'readonly') {
    return db.transaction(STORE_NAME, mode).objectStore(STORE_NAME);
}

export {
    STORE_NAME,
    createDbStore,
    getStoreTransaction
}