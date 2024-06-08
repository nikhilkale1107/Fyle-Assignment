// POP UP FORM SUBMISSION

document.getElementById('contactModal').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.getElementById('contactModal')
    // Collect form data
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const agree = document.getElementById('agree').checked;

    // Check if the agree checkbox is checked
    if (!agree) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // Debugging: Log the data being sent
    console.log("Email: ", email);
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Agree: ", agree);

    // Data to send
    const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        agree: agree
    };

    // Send data using Axios
    axios.post("https://getform.io/f/paoxeqyb", data, {
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        console.log("Form submitted successfully:", response);

     })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('button');
    const span = document.getElementsByClassName('close')[0];

    // Open the modal
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});


// CHANGING IMAGES 

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.content-card4');
    const mainImage = document.getElementById('main-image');

    function setActiveCard(card) {
        // Remove active class from all cards
        cards.forEach(c => {
            c.classList.remove('active');
            c.querySelector('h3').style.color = '';
            c.querySelector('p').style.color = '';
        });

        // Add active class to the given card
        card.classList.add('active');
        card.querySelector('h3').style.color = 'white';
        card.querySelector('p').style.color = 'white';

        // Change the main image
        const newImage = card.getAttribute('data-image');
        mainImage.src = newImage;
    }

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            setActiveCard(this);
        });

        card.addEventListener('mouseout', function() {
            // Reapply the active class to the middle card if no card is hovered
            const middleCard = cards[1];
            setActiveCard(middleCard);
        });
    });

    // Initially set the middle card as active
    const middleCard = cards[1];
    setActiveCard(middleCard);
});