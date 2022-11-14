const prompt=require (`prompt-sync`)();
let ip=prompt("Antre adres la: ")
let total=0
let kalkil=ip[0]
//ip=ip.split(".")
for(let i=0; i<ip.length; i++){
    if(ip[i]!="."){
    nbre=parseInt(ip[i])
       total+=nbre
       if(i>=1){
       kalkil=kalkil+"+"+ip[i]
       }
    }
}
total*=ip[0]
console.log("("+kalkil+")*"+ip[0]+"="+total)
