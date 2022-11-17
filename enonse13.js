let l=6, tab=[], i, tab2=[], n=4;
for(i=0; i<l; i++){
    tab[i]=i;
}

let j=tab.join(""), indbefore=j.indexOf(n)


    for(i=0; i<l; i++){
        tab=tab.reverse()
         tab2[(l-1)-i]=tab.pop()
    }
k=tab2.join(""), indafter=k.indexOf(n)

console.log(tab2)
console.log(`Indeks ${n} avan melanj se ${indbefore}`)
console.log(`Indeks ${n} apre melanj se ${indafter}`)
