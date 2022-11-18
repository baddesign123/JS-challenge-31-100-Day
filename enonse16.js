let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  input = ">5K <0Y <3W <3K <6U <3Q";
input = input.toUpperCase();
let input2 = input.split(" "),
  mo = "",
  ind,
  m,
  mun1;
for (let i = 0; i < input2.length; i++) {
  if (input2[i].length == 3) {
    if (input2[i][0] == "<") {
      ind = t.indexOf(input2[i][2]);
      m = input2[i][1];
      m = parseInt(m);
      mo += t[ind - m];
    }
    if (input2[i][0] == ">") {
      ind = t.indexOf(input2[i][2]);
      m = input2[i][1];
      m = parseInt(m);
      mo += t[ind + m];
    }
    if (input2[i][0] != ">" && input2[i][0] != "<") {
      m = input2[i][0] + input2[i][1];
      m = parseInt(m);
      ind = t.indexOf(input2[i][2]);

      if (typeof t[ind + m] == "undefined") {
        mo += t[ind - m];
      }
      if (typeof t[ind - m] == "undefined") {
        mo += t[ind + m];
      }
    }
  }
  if (input2[i].length == 4) {
    if (input2[i][0] == "<") {
      ind = t.indexOf(input2[i][3]);
      m = input2[i][1] + input2[i][2];
      m = parseInt(m);
      mo += t[ind - m];
    }
    if (input2[i][0] == ">") {
      ind = t.indexOf(input2[i][3]);
      m = input2[i][1] + input2[i][2];
      m = parseInt(m);
      mo += t[ind + m];
    }
  }
  if (input2[i].length == 2) {
    m = input2[i][0];
    m = parseInt(m);
    ind = t.indexOf(input2[i][1]);

    if (typeof t[ind + m] == "undefined") {
      mo += t[ind - m];
    }
    if (typeof t[ind - m] == "undefined") {
      mo += t[ind + m];
    }
  }
}
console.log(mo);
