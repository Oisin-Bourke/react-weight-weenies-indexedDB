import db from "./db"

export const fetchAllData = async () => {
	return await db.bicycles.toArray()
}

export const deleteAllData = async () => {
	await db.bicycles.clear()
}

export const addBicyle = async (bicycle) => {
	await db.bicycles.add(bicycle)
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
