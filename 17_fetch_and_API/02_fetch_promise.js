const fetchUserData = fetch("https://jsonplaceholder.typicode.com/users")

console.log("data", fetchUserData)


fetchUserData
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log("data", data)
    }).catch((err) => {

        console.log("error", err)
    })