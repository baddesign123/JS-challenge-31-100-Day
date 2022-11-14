let nonb="5 45 123 12"
nonb=nonb.split(" ")
let produit=1;
for(let i=0; i<nonb.length; i++){
    let somme=0
    for(let j=0; j<nonb[i].length; j++){
        let num=parseInt(nonb[i][j])
        somme+=num;       
    }
    produit*=somme;
}

console.log(produit);