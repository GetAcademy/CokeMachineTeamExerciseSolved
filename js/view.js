function updateView() {
    document.getElementById('app').innerHTML = getCoinsHtml(coinsInMachine);
}

function getCoinsHtml(coinCounts){
    return /*HTML*/`
        <div class="coins">
            <div>${getCoinHtml(1, coinCounts[0])}</div>
            <div>${getCoinHtml(5, coinCounts[1])}</div>
            <div>${getCoinHtml(10, coinCounts[2])}</div>
            <div>${getCoinHtml(20, coinCounts[3])}</div>
        </div>
    `;
}

function getCoinHtml(value, count){
    return /*HTML*/`<div class="coin"><img src="img/${value}kr.png"/></div>`.repeat(count);
}