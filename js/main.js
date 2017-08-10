console.log("working");

let calc = document.getElementById("container");
calc.addEventListener("click", myCallBack);

let result = "";

function myCallBack(){
  console.log("In myCallBack");
  let key = event.target.id;
  console.log(key);
  handleKey(key);
}

function handleKey (key){
switch (key) {
  case 'plus':
    result += " + ";
    break;
  case 'minus':
    result += " - ";
    break;
  case 'times':
    result += " x ";
    break;
  case 'divide':
    result += " - ";
    break;
  case 'dot':
    result += ".";
    break;
  case 'eq':
    complete();
    break;
  case 'clear':
    clearInput();
    break;
  default:
    result += key;

  } /* switch */
  console.log(result);
} /* handleKey */
