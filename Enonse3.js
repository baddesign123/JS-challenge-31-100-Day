 let tit="ayiTi se yon bel peyi ki gen pyebwa";
 tit=tit.toLowerCase()
 tit=tit.split(" ")
 let tit2=[];
 let mo=""

for(let i=0; i<tit.length; i++){
    mo=tit[i][0].toUpperCase()
    mo=mo+tit[i].slice(1)
    tit2.push(mo)
}
tit2=tit2.join(" ")
console.log(tit2)
