function createArrayOfTiers(num) {
    num = num + "";
    let lista = [];
    for (let i = 0; i < num.length; i++) {
        lista.push(num.substr(0, i + 1));
    }
    return lista;
}

function isTriangle(a,b,c)
{
  if (a > 0 && b > 0 && c > 0) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      return true;
    }
    else {
     return false;
   } 
  }
   else {
     return false;
   }
}

function timeConvert(num) { 
    if (num <= 0) {
      return "00:00"
    }
    if (num > 0 || num < 10) {
      return '0' + 0 + ':' + '0' + num
    }
    if (num >= 10 || num < 60) {
      return '0' + 0 + ':' + num
    }
    if (num >= 60 || num < 120) {
      return '0' + 1 + ':' + (60 - num)
    }
}

function maskify(cc) {
    let arr = []
    for (let i = 0; i < cc.length; i--) {
      arr.push(cc[i])
    }
    for (let i = 3; i < arr.length; i++) {
      if (arr[i] < 4) {
        return '#'
      }
    }
    return arr
  }