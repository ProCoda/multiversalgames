function selectorClick(name){
    const selector = document.getElementById(name.trim() + "-select");
    
    if(selector.checked){
        const container = document.getElementById('checkout-container');
        let game = document.createElement('h3');
        game.className = 'game-type';
        game.innerHTML = '<span class="game-type-description">'+name+'</span><span class="game-type-amount">$9.99</span>'
        container.prepend(game)
    } else {
        const games = document.querySelectorAll('.game-type');
        games.forEach(function(game){
            console.log(game.children.item(0))
        })
    }
}



// 1 game 9.99
// 2 games 17.99
// 3 games 26.99
// 4 games 34.99