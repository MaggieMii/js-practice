let size=8;
let i='';
let x,y;
for(y=1;y<=size;y++){
    for(x=1;x<=size;x++){     
        if((x+y)%2==0)i=i+' ';
        else i=i+'#';
    }
    i=i+'\n';
}
console.log(i);