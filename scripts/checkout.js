function selectorClick(name) {
    var id = "";
    if (name === "Artificial Apocalypse") { id = "ArtificialApocalypse" } //Convert name with space to name without space
    if (name === "Avillius Adventure") { id = "AvilliusAdventure" } //Convert name with space to name without space
    if (name === "Locked Laptop") { id = "LockedLaptop" } //Convert name with space to name without space
    if (name === "Quantum Computer") { id = "QuantumComputer" } //Convert name with space to name without space
    const selector = document.getElementById(id + "-select"); //Get the specific selector that the user clicked

    if (selector.checked) { //Check if the selector is clicked
        const container = document.getElementById('checkout-container'); //Define Checout container
        let game = document.createElement('h3'); //Create new element 
        game.className = 'game-type'; //Set class for new element
        game.innerHTML = '<span class="game-type-description">' + name + '</span><span class="game-type-amount">$9.99</span>' //Set the inner html of the new element
        container.prepend(game) //Add the new element into the container;
    } else { //If selector is not checked
        const games = document.querySelectorAll('.game-type'); //Define all the elemnts with the class gajme-type
        games.forEach(function (game) { //Loop through each game
            var child = game.children.item(0); //Define the child for the game
            if (child.textContent === name) { //Check if the text content is equal to the name
                game.remove(); //If so, remove the game from the container
            }
        });
    }



    const games = document.querySelectorAll('.game-type');
    const total = document.getElementById('total-price');
    const discount = document.getElementById('discount-price');

    let discountPrice = 0;
    if (games.length == 1) { discountPrice = 9.99 } //Set the discount  prices depending on number of games
    if (games.length == 2) { discountPrice = 16.99 } //Set the discount  prices depending on number of games
    if (games.length == 3) { discountPrice = 23.99 } //Set the discount  prices depending on number of games
    if (games.length == 4) { discountPrice = 30.99 } //Set the discount  prices depending on number of games

    let totalPrice = games.length * 9.99; //Set the total price to be the amount of games multiplyed by 9.99

    total.innerText = "AUD $" + totalPrice; //Update the text of the total elemement
    discount.innerText = "AUD $" + discountPrice; //Update the text of the discount elemement
}



const modalConfirm = document.getElementById("confirm"); //Define confirm modal
const modalPayment = document.getElementById("payment"); //Define payment modal


function checkoutClick() { //Function for when checkout buttom is clicked
    const games = document.getElementById('checkout-container').querySelectorAll(".game-type-description"); //Get all the game-type-descriptions from checkout container
    const discount = document.getElementById('discount-price');
    const errorMsg = document.getElementById('errorMsg');
    if (games.length == 0) { //If games length is 0, then show the error message because you cannot buy 0 games
        errorMsg.style.opacity = '1' //Set the errorMsg opacity to 1 so it is visible
    } else { //If games.length is not 0
        var str = "";
        games.forEach((game) => { //Loop through all the games that are in checkout container
            str += game.innerHTML + ", " //Add to the string the game type and a comma
        });
        str = str.substring(0, str.length - 2); //Remove the last comma and space
        modalConfirm.innerHTML = '<i><img src="images/cart.svg" style="width: 100px; height: auto"></i><h2>Confirm Purchase</h2><h3>Do you confirm the purchase of ' + str + ' for ' + discount.innerText + '?</h3><div class="buttons"><button id="close-btn" onclick="closeModal()">No</button><button id="yes-btn" onclick="loadingModal()">Yes</button></div>'; //The inner html for the modal
        modalPayment.classList.toggle('activeModal'); //Add class activeModal to modalPayment
        document.getElementById("blurWrapper").classList.toggle('blurred'); //Blur the entire background when modal is visible
        errorMsg.style.opacity = '0'; //Hide the errorMsg if it was already visible
    }

}

function closeModal() { // Function for when the modal is closed
    modalConfirm.classList.remove('activeModal'); //Remove activeModal class
    modalPayment.classList.remove('activeModal'); //Remove activeModal class
    document.getElementById("blurWrapper").classList.remove('blurred'); //Unblur the background
}

function confirm() { //Function for when the purchase button is pressed
    modalPayment.classList.remove('activeModal'); //Remove active modal for modalPayment
    modalConfirm.classList.toggle('activeModal'); //Toggle active modal for modalConfirm
    return false; //This is just required feedback for a form onSubmit
}


function loadingModal() { //Function to trigger the loading animation
    const icon = modalConfirm.children.item(0);//Define icon element
    const title = modalConfirm.children.item(1);//Define title element
    const text = modalConfirm.children.item(2);//Define text element
    const buttons = modalConfirm.children.item(3);//Define buttons element
    title.innerHTML = "Processing Payment..."; //Change the title of modal
    text.style.opacity = 0; //Hide the modal text
    buttons.style.opacity = 0; //Hide the modal buttons
    icon.innerHTML = '<label class="checkLabel" for=""><div class="check-icon"></div></label>' //Add the loading animation to the modal icon
    setTimeout(() => {//Wait 5 seconds before executing this code
        icon.querySelector(".checkLabel").classList.toggle("checked"); //Stop the animation and display check mark
        title.innerHTML = "Your all set!"; //Change the modal title
        text.style.opacity = 1; //Show the modal text
        text.innerHTML = "Thank you for purchasing with us!";  //Change the modal text
        buttons.style.opacity = 1; //Show the modal buttons
        buttons.innerHTML = '<button id="close-btn" onclick="closeModal()">Close</button>'; //Change the modal buttons
    }, 5000); //5000 miliseconds, which is 5 seconds
}




// 1 game 9.99
// 2 games 17.99
// 3 games 26.99
// 4 games 34.99