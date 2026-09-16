document.getElementById("btn").addEventListener("click", async () => {

    try {

        const res = await fetch("https://api.thecatapi.com/v1/images/search")

        const data = await res.json()

        console.log("data", data)

        document.getElementById("catImg").src = data[0].url

    } catch (err) {

        console.log("error", err)

    }

})

// async function

async function fetchImage() {

    try {

        const res = await fetch("https://api.thecatapi.com/v1/images/search")

        const data = await res.json()

        console.log("data", data)

        document.getElementById("catImg").src = data[0].url

    } catch (err) {

        console.log("error", err)

    }

}

// promise

document.getElementById("btn").addEventListener("click", () => {

    fetch("https://api.thecatapi.com/v1/images/search")

        .then((res) => res.json())

        .then((data) => {

            console.log(data)

            document.getElementById("catImg").src = data[0].url

        })

        .catch((err) => {

            console.log("error", err)

        })

})