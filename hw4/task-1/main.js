function exchange(sumUAH,currencyValues,exchangeCurrency){
    let result = 0;
    for(const val of currencyValues) {
        if (val.currency === exchangeCurrency ) {
            result = sumUAH / val['value'];
        }
    }
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))