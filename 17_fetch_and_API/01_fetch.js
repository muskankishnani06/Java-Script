// async function fetchUserData() {

//     const res = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = await res.json()
//     console.log("data", data)
// }

// fetchUserData()


// with try and catch

async function fetchUserData() {

    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json()

        console.log("data", data)

    } catch (err) {

        console.log("error", err)
    }

};

fetchUserData()