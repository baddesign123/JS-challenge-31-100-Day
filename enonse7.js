let fraz = "Jesus oh", vwayel = ['a', 'e', 'i', 'o', 'u', 'y']
fraz=fraz.split("")
for (let i = 0; i < fraz.length; i++) {
    for (let j = 0; j < vwayel.length; j++) { 
        if (fraz[i]==(vwayel[j])) {
            fraz[i-1] = "*"
        }
    }
}
fraz=fraz.join("")
console.log(fraz)