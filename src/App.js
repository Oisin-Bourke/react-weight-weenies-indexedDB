import SimpleContainer from "./SimpleContainer"

function App() {
	return <SimpleContainer />
}

export default App

/*<BicycleItem db={new Dexie('WeightShavingDreamAppDB')}/>*/

/**
 * /*
    useEffect(
        async () => {
            console.log('Creating bicycle store...')
            db.version(1).stores({ bicycles: '++id, frameName, frameWeight, forkName, forkWeight' })

            fetchFirst(1)

        },
        // run effect when store changes (??) 
        []
    )

    const fetchFirst = async (id) => {
        const bicycle = await db.bicycles.get(id)
        console.log(bicycle)
        setBicycle(bicycle)

    }

    const saveBicycle = async (values) => {
        console.log('Saving bicycle...')
        if (bicycle.id === undefined) {
            await db.bicycles.add(values)
        }
        else {
            await db.bicycles.put(1, values)
        }
        
        setBicycle(values)
    }
    */
