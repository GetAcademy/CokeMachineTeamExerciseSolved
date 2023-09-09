function buyCoke() {
    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}

function insertCoin(coinIndex){
    coinsInserted[coinIndex]++;
    updateView();
}

function returnCoins(){
    coinsReturned = [...coinsInserted];
    coinsInserted = [0,0,0,0];
    updateView();
}