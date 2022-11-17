let tab=[1,2,3,4,5,6,7,8,9,10]
let max=tab[0], min=tab[0], i;
for(i=0; i<tab.length; i++){
    if(tab[i]<min){
        min=tab[i]
    }
    if(tab[i]>max){
        max=tab[i]
    }
}
console.log(`Pi gro a se: ${max}`)
console.log(`Pi piti a se: ${min}`)
