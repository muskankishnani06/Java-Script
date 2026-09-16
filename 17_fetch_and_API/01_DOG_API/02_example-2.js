document.getElementById("btn").addEventListener("click", async () => {

    try {

        const res = await fetch("https://official-joke-api.appspot.com/random_joke")

        const data = await res.json()

        console.log("data", data)

        document.getElementById("joke").innerText =
            data.setup + " " + data.punchline

    } catch (err) {

        console.log("error", err)

    }

})

// async function

async function fetchJoke() {

    try {

        const res = await fetch("https://official-joke-api.appspot.com/random_joke")

        const data = await res.json()

        console.log("data", data)

        document.getElementById("joke").innerText =
            data.setup + " " + data.punchline

    } catch (err) {

        console.log("error", err)

    }

}

// promise

document.getElementById("btn").addEventListener("click", () => {

    fetch("https://official-joke-api.appspot.com/random_joke")

        .then((res) => res.json())

        .then((data) => {

            console.log(data)

            document.getElementById("joke").innerText =
                data.setup + " " + data.punchline

        })

        .catch((err) => {

            console.log("error", err)

        })

})