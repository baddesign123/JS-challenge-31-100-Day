let a=2, b=3, x=1, y=20;
let tab1=[], tab2=[], tab3=[], tab4=[]
for(let i=x; i<=y; i++){
    if(i%a==0){
        if(i%b!=0){
            tab1.push(i)
        }  
    }
    if(i%b==0){
        if(i%a!=0){
            tab2.push(i)
        }  
    }
    if(i%a==0){
        if(i%b==0){
            tab3.push(i)
        }  
    }
    if(i%a!=0){
        if(i%b!=0){
            tab4.push(i)
        }  
    }
}
let long1=tab1.length, 
long2=tab2.length, long3=tab3.length, long4=tab4.length
tab1=tab1.join(",")
tab2=tab2.join(",")
tab3=tab3.join(",")
tab4=tab4.join(",")

console.log(tab1+" -> Total nonb "+long1)
console.log(tab2+" -> Total nonb "+long2)
console.log(tab3+" -> Total nonb "+long3)
console.log(tab4+" -> Total nonb "+long4)