const prompt=require(`prompt-sync`)()
let n=prompt("Antre N: ")
while(isNaN(n)){
    n=prompt("Antre N (Number)")
}
if(n%4!=0){
    console.log("OK")
}else{
    console.log("NOK")
}