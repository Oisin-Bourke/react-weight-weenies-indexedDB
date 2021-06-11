import db from "./db"

export const create = async (bicycle) => {
	await db.bicycles.add(bicycle)
}

export const fetchById = async (id) => {
	return await db.bicycles.get(id)
}

export const update = async (bicycle) => {
	await db.bicycles.put(bicycle)
}

export const deleteById = async (id) => {
	await db.bicycles.delete(id)	
}

export const fetchAll = async () => {
	return await db.bicycles.toArray()
}

export const deleteAll = async () => {
	await db.bicycles.clear()
}

export const addTestData = async () => {
	await db.bicycles.bulkAdd([
		{
			frameName: "Specialized SL7",
			frameWeight: 800,
		},
		{
			frameName: "Specialized Aethos",
			frameWeight: 600,
		},
		{
			frameName: "Trek Emonda",
			frameWeight: 600,
		},
	])
}
