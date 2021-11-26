var num_one;
var num_two;
var symbol;
var result;

function calc(number) {
 
  if (num_one==undefined) {
    num_one = number
    document.getElementById('calculator').value += number
  }
   else if(symbol==undefined){
    document.getElementById('error').textContent = "Ошибка: сначала символ"
        document.getElementById('error').value = "";
  }
  else if (num_two==undefined && symbol!=undefined) {
    num_two = number
      document.getElementById('calculator').value += number
  }
  else {
    num_one=undefined
    num_two=undefined
    symbol=undefined
    document.getElementById('calculator').value = "";
  }
}

function res() {
  if (symbol== '+') {
    result = (Number(num_one)+Number(num_two))
     document.getElementById('result').textContent ="Ответ " + result;
  }
  else if (symbol== '-') {
     result = (Number(num_one)-Number(num_two))
     document.getElementById('result').textContent = "Ответ " + result;
  }
}

function sumb(symb) {
  if (symbol==undefined) {
    symbol=symb;
    document.getElementById('calculator').value += symb;
  }
}