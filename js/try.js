const message = [
    "Initializing Hacking...",
    "Reading your files...",
    "Password file detected...",
    "Sending all password files and data to server...",
    "Cleaning up...",
    "You are hacked by Moin Uddin..."
]

const visite = () => {
    document.getElementById('change').style.backgroundColor = 'black'

    let modal = document.getElementById('clickVisite')

    modal.showModal()
    index = 0
    const interval = setInterval(() => {

        let innerItem = document.getElementById('innerModal')
        innerItem.innerHTML = `<p>${message[index]}</p>`
        index++

        if (index > message.length) {
            clearInterval(interval)
            document.getElementById('clickVisite').close()
            // modal.close()
        }
    }, 1000);
}
