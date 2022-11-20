function range(start,end,step=1){
    var numbers=[];
    var j=0;
    if(step>0){
        for(i=start;i<=end;i=i+step){
            numbers[j]=i;
            j++;
        }
    }
    else{
        for(i=start;i>=end;i=i+step){
            numbers[j]=i;
            j++;
        }
    }
    return numbers;
}
function sum(numbers){
    let result=0;
    for(let number of numbers){
        result=result+number;
    }
    return result;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));