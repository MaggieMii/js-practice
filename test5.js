function isEven(number){
    if(number==0) return 'ture';
    else if(number==1) return 'false';
    else {if(number>0) return isEven(number-2);
    else return isEven(number+2);}
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??