const countBs = (string) => {
    let count=0;
    for(var N=0;N<string.length;N++){
        if(string[N]==="B") {count=count+1;}//string即为"BBC"，不需要再在string外加""
    }
    return count;
}
const countChar=(string,char)=>{
    let count=0;
    for(var N=0;N<string.length;N++){
        if(string[N]===char) count++;
    }
    return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));