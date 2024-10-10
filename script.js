

// const timer = () => {
//     // let count = 7;

// }




// // setInterval(() => {


// // }, 1000);



// const visite = () => {
//     document.getElementById('change').style.backgroundColor = 'green'
//     const inside = document.getElementById('innerModal')
//     // console.log(inside)
//     inside.classList = 'showing'
//     inside.innerHTML = `
//     <p>Initializing Hacking...</p>
//     <p>Reading your files...</p>
//     <p>Passord file detected...</p>
//     <p>Sending all passord files and data to server...</p>
//     <p>Cleaning up...</p>
//     <p>You are hacked by Moin Uddin...</p>

//     `




//     document.getElementById('clickVisite').showModal()
// }
// Method 1

// const messages = [
//     "Initializing Hacking...",
//     "Reading your files...",
//     "Password file detected...",
//     "Sending all password files and data to server...",
//     "Cleaning up...",
//     "You are hacked by Moin Uddin..."
// ];

// const visite = () => {
//     document.getElementById('change').style.backgroundColor = 'green';

//     // Display each message in the modal with a delay
//     let index = 0;
//     const modal = document.getElementById('clickVisite');
//     const innerModal = document.getElementById('innerModal');

//     const showNextModal = () => {
//         if (index < messages.length) {
//             // Update innerModal content
//             innerModal.innerHTML = `<p>${messages[index]}</p>`;

//             // Show the modal
//             modal.showModal();

//             // Increment index to show the next message
//             index++;

//             // Set a timeout to hide and show the next message
//             setTimeout(() => {
//                 modal.close();  // Close the modal
//                 setTimeout(showNextModal, 500); // Show the next modal after 0.5 seconds of hiding
//             }, 1000); // Display each modal for 1 second
//         }
//     };

//     showNextModal(); // Start showing the modals
// };



// setInterval method

const messages = [
    "Initializing Hacking...",
    "Reading your files...",
    "Password file detected...",
    "Sending all password files and data to server...",
    "Cleaning up...",
    "You are hacked by Moin Uddin..."
];

const visite = () => {
    document.getElementById('change').style.backgroundColor = 'green';
    const modal = document.getElementById('clickVisite');
    const innerModal = document.getElementById('innerModal');

    // Show the modal
    modal.showModal();

    // Set initial index
    let index = 0;

    // Update the modal content every second
    const interval = setInterval(() => {
        innerModal.innerHTML = `<p>${messages[index]}</p>`;
        index++;

        // Stop the interval once all messages are shown
        if (index >= messages.length) {
            clearInterval(interval);
        }
    }, 2000);
};
