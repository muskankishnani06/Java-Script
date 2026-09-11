const Payment = (amt) => {

    return new Promise((resolve, reject) => {

        if (amt <= 0) {
            setTimeout(() => {
                reject("failed to initiative payment amount should be positive value")

            }, 2000)

        } else {

            setTimeout(() => {

                console.log("stage-1", `₹ ${amt} payment initiated.....`)
                resolve(amt)
            }, 3000)
        }

    })
}

let balance = 10000

const checkBalance = (amt) => {

    return new Promise((resolve, reject) => {
        if (amt > balance) {
            setTimeout(() => {
                reject("insufficient balance")
            }, 2000)
        } else {
            console.log("stage-2", "payment can be done due to sufficient balance ")
            resolve(amt)

        }
    })
}

const paymentDeduct = (amt) => {


    return new Promise((resolve, reject) => {
        const remainBalance = balance - amt;
        if (remainBalance < 0) {
            setTimeout(() => {
                reject(`${remainBalance} is available balance`);
            }, 3000)
        } else {
            console.log("stage-3", "processing payments....");
            resolve(amt)
        }
    })
}

const paymentStatus = (amt) => {
    return new Promise((resolve, reject) => {

        let remainBalance = balance - amt;

        console.log("remain balance", remainBalance)

        if (remainBalance < balance) {

            setTimeout(() => {
                console.log("stage-4", "payment has been processed...")
                resolve(amt)
            }, 3000)
        } else {

            setTimeout(() => {

                reject("payment has been failed")

            }, 3000)
        }
    })
}

async function makePayment(amt) {
    try {
        let paid = await Payment(amt)
        let balanceCheck = await checkBalance(paid)
        let deduct = await paymentDeduct(balanceCheck)
        let status = await paymentStatus(deduct)
        console.log("Payment successful:", status)
    } catch (err) {
        console.log(err)
    }
}


makePayment(5000)