import Dexie from "dexie"

console.log('initialising db..')

const db = new Dexie("WeightShavingDreamAppDB")
db.version(1).stores({ bicycles: '++id, frameName, frameWeight' })

export default db
