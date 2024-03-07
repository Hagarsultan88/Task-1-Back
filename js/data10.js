
const fs = require("fs")

const addPerson = ( id , fname , lname ,age , city ) => {
    const allData = loadData()

    const duplicateDate = allData.filter((obj) => {
        return obj.id === id
    })

    // console.log(duplicateDate)

    if(duplicateDate.length == 0) {
        allData.push({
            id : id ,
            fname : fname ,
            lname : lname ,
            age : age ,
            city : city
        })

        saveAllData(allData)
    } else {
        console.log("ERROR Duplicated ID")
    }
}

//////////////////////////////////////////////////////////////////////////////////
const loadData = () => {
    try {
        const DataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(DataJson)
    } 
    catch {
        return []
    }
}

//////////////////////////////////////////////////////////////////////////////////
const saveAllData = (allData) => {
    const AllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , AllDataJson)
}

////////////////////////////////////////////////////////////////////////////////////

const deleteData = (id) => {

    const allData = loadData()

    const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
    })

    saveAllData(dataTokeep)
    console.log("you have already deleted an item")
}

////////////////////////////////////////////////////////////////////////////////////

const readData = (id) => {
    
    const allData = loadData()

    const itemNeeded = allData.find((obj)=> {
        return obj.id == id
    })

    // console.log(itemNeeded)

    if(itemNeeded) {
        console.log(itemNeeded.id)
    } else {
        console.log("id needed not found")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

const listData = (id) => {
    
    const allData = loadData()

    allData.forEach((obj) => {
        console.log(obj.fname, obj.age , obj.city)
    })
}




module.exports = {
    addPerson ,
    deleteData,
    readData ,
    listData
}
