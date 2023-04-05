let msg = window.document.getElementById('mensagem');
let number = window.document.getElementById('number');
function tabuada() {
if (number.value.length == 0) {
    window.alert('Por favor, insira um número.')
}
else {
    let num = Number(number.value);
    msg.innerHTML = '';
    for (let multiplier = 1; multiplier < 11; multiplier++) {
      let item = document.createElement('option') 
      item.text = `${num} X ${multiplier} = ${num*multiplier}`
      msg.appendChild(item);
    }
}
}
