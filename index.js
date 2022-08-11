const names=[];
const events='surprise';
let thankYoucards=[];

function writeCards(names,events){
    for(let i=0; i<names.length; i++){
        let msg=`Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        thankYoucards.push(msg);
    }
console.log(thankYoucards);
return thankYoucards;

}
console.log(writeCards(names,events))
;

 
function countDown(number){
    let countDown=10;
    while(countDown>=-0){
        console.log(countDown--);
    }
}
    