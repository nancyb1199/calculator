console.log("working");

let calc = document.getElementById("container");
calc.addEventListener("click", myCallBack);

let result = "";

function myCallBack(){
  let key = event.target.id;
  handleKey(key);
}


function handleKey (key){
  let val = document.getElementById(key).value;
switch (key) {
  case 'eq':
    complete(result);
    break;
  case 'clear':
    result = "";
    document.getElementById("myResult").value = "";
    break;
  case 'times':
    result += "*";
    document.getElementById("myResult").value = result;
    break;
  default:
    result += val;
    document.getElementById("myResult").value = result;
  } /* switch */

} /* handleKey */

function complete(result) {
  let answer = eval(result);
  document.getElementById("myResult").value = answer;
}
