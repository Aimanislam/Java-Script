  
  // we are pass the value ("count-el") in function parenthesis is called pass in arguments
let count = 0

function increment() {
  let countEl = document.getElementById("count-el")
    count +=  1
    countEl.innerHTML = count
}

function save(){
  let saveEl = document.getElementById("save-el")
  let countEl = document.getElementById("count-el")
    let countStr = count + "-"
    saveEl.innerHTML  += countStr
    countEl.innerHTML  = 0
    count  = 0
}

