let DcardSuit=['spade', 'diamond','heart', 'clubs'];
let value=['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

let card=[];
for (let suit of DcardSuit){
    for (let val of value){
        let color;
        if(suit==='heart' || suit=== 'diamond') {
            color='red';
        } else{
           color='black';
        }
        card.push({color: color, value: val,cardSuit: suit});
    }
}
console.log(card);
console.log(card.find(dd=>dd.value==='ace'&& dd.cardSuit==='spade'));
console.log(card.filter(dd=>dd.value==='6'));
console.log(card.filter(dd=>dd.color==='red'));
console.log(card.filter(dd=>dd.cardSuit==='diamond'));
console.log(card.filter(dd=>dd.cardSuit==='clubs'&& dd.value>='9'));
console.log(card.reduce((previousValue, currentValue) => {
    if(currentValue.cardSuit==='clubs'){
        previousValue.clubs.push(currentValue);
    }else if(currentValue.cardSuit==='diamond'){
        previousValue.diamonds.push(currentValue);
    }else if(currentValue.cardSuit==='heart'){
        previousValue.hearts.push(currentValue);
    }else if(currentValue.cardSuit==='spade'){
        previousValue.spade.push(currentValue);
    }
    return previousValue;
},{spade:[], diamonds:[], hearts:[], clubs:[]}));