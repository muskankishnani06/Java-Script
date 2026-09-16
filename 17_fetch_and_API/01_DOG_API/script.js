document.getElementById("btn").addEventListener("click", async () => {
    try {

        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()

        console.log("data", data)

        document.getElementById("dogImg").src = data.message
    } catch (err) {
        console.log("error", err)
    }
})

// another method

async function fetchImage() {

    try {

        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()

        console.log("data", data)

        document.getElementById("dogImg").src = data.message

    } catch (err) {
        console.log("error", err)
    }

}

// using promise

document.getElementById("btn").addEventListener("click", () => {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            document.getElementById("dogImg").src = data.message
        }).catch((err) => {
            console.log("error", err)
        })
})


