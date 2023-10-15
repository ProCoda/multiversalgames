function selectorClick(name){
    var id = "";
    if(name === "Artificial Apocalypse"){ id = "ArtificialApocalypse" }
    if(name === "Avillius Adventure"){ id = "AvilliusAdventure" }
    if(name === "Locked Laptop"){ id = "LockedLaptop" }
    if(name === "Quantum Computer"){ id = "QuantumComputer" }
    const selector = document.getElementById(id + "-select");
    
    if(selector.checked){
        const container = document.getElementById('checkout-container');
        let game = document.createElement('h3');
        game.className = 'game-type';
        game.innerHTML = '<span class="game-type-description">'+name+'</span><span class="game-type-amount">$9.99</span>'
        container.prepend(game)
    } else {
        const games = document.querySelectorAll('.game-type');
        games.forEach(function(game){
            var child = game.children.item(0);
            if(child.textContent === name){
                game.remove();
            }
        })
    }

    

    const games = document.querySelectorAll('.game-type');
    const total = document.getElementById('total-price');
    const discount = document.getElementById('discount-price');

    let discountPrice = 0;
    if(games.length == 1){ discountPrice = 9.99 }
    if(games.length == 2){ discountPrice = 16.99 }
    if(games.length == 3){ discountPrice = 23.99 }
    if(games.length == 4){ discountPrice = 30.99 }

    let totalPrice = games.length * 9.99;

    total.innerText = "AUD $"+totalPrice;
    discount.innerText = "AUD $"+discountPrice;
}



const modalConfirm = document.getElementById("confirm");


function checkoutClick(){
    const games = document.getElementById('checkout-container').querySelectorAll(".game-type-description");
    const discount = document.getElementById('discount-price');
    var str = "";
    games.forEach((game) => {
        str += game.innerHTML + ", "
    });
    str = str.substring(0, str.length-2);
    modalConfirm.innerHTML = '<i><img src="images/cart.svg" style="width: 100px; height: auto"></i><h2>Confirm Purchase</h2><h3>Do you confirm the purchase of '+str+' for '+discount.innerText+'?</h3><div class="buttons"><button id="close-btn" onclick="closeModal()">No</button><button id="yes-btn" onclick="loadingModal()">Yes</button></div>';
    modalConfirm.classList.toggle('activeModal');
    document.getElementById("blurWrapper").classList.toggle('blurred');
}

function closeModal(){
    modalConfirm.classList.remove('activeModal');
    document.getElementById("blurWrapper").classList.remove('blurred');
}

function loadingModal(){
    const icon = modalConfirm.children.item(0);
    const title = modalConfirm.children.item(1);
    const text = modalConfirm.children.item(2);
    const buttons = modalConfirm.children.item(3);
    title.innerHTML = "Processing Payment...";
    text.style.opacity = 0;
    buttons.style.opacity = 0;
    icon.innerHTML = '<label class="checkLabel" for=""><div class="check-icon"></div></label>'
    setTimeout(() => {
        icon.querySelector(".checkLabel").classList.toggle("checked");
        title.innerHTML = "Your all set!";
        text.style.opacity = 1;
        text.innerHTML = "Thank you for purchasing with us!";
        buttons.style.opacity = 1;
        buttons.innerHTML = '<button id="close-btn" onclick="closeModal()">Close</button>';
    }, 5000);
}




// 1 game 9.99
// 2 games 17.99
// 3 games 26.99
// 4 games 34.99