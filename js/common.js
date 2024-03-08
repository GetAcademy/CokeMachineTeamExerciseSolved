function valueFromCoinCounts(coinCounts) {
    return coinCounts[0]
        + coinCounts[1] * 5
        + coinCounts[2] * 10
        + coinCounts[3] * 20;
}

function coinValueFromIndex(index){
    const values = [1, 5, 10, 20];
    return values[index];
}

function coinIndexFromValue(value){
    const indexes = []; 
    indexes[1] = 0;
    indexes[5] = 1;
    indexes[10] = 2;
    indexes[20] = 3;
    return indexes[value];
}