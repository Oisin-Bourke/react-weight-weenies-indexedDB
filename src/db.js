import Dexie from 'dexie'

const db = new Dexie('WeightShavingDreamAppDB')
db.version(1).stores({ bicycle: '++id'})

export default db
