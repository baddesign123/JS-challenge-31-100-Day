let mo = " 100 jou Kode hidden Code9Class enpass JavaScript";
mo = mo.split(" ");
let nouvo = [],
  r,
  t;
for (let i = 0; i < mo.length; i++) {
  if (mo[i] == "hidden") {
    r = i;
  }
  if (mo[i] == "enpass") {
    t = i;
  }
}
for (let i = r + 1; i < t; i++) {
  nouvo[i] = mo[i];
}
nouvo = nouvo.join(" ");
console.log(nouvo);
