let foodItem = ["samosa", "pasta"];

// foodItem = ""

function foodOrder(foodItem) {

    return new Promise((resolve, reject) => {
        if (foodItem === "") {
            setTimeout(() => {

                reject("there is no food item selected")

            }, 2000)
        } else {
            let orderId = "fdsfds1323";

            setTimeout(() => {
                console.log(`${orderId} id created..`)
                resolve(orderId)
            })
        }
    })
}

foodOrder(foodItem)
    .then((id) => {
        return new Promise((resolve, reject) => {

            if (id === "") {
                setTimeout(() => {
                    reject("order id is not generated")
                }, 3000)
            } else {

                setTimeout(() => {
                    console.log(`${id} is generated and informing to seller ...`)
                    resolve(id)
                }, 3000)
            }
        })
    })

    .then((id) => {
        return new Promise((resolve, reject) => {
            if (!id) {

                setTimeout(() => {
                    reject("order failed...")
                })
            } else {

                setTimeout(() => {

                    console.log("order delivered")
                    resolve(id)
                }, 4000)
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {

        console.log("Do you want to explore more?")
    })