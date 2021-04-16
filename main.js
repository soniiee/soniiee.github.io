document.getElementById('demo').onclick = function change () {
  document.getElementById('demo').textContent = "Haha"; 
  document.getElementById('demo').style = "Color: green";
}

const output = document.querySelector(".output"); 
const txt = document.querySelector("textarea"); 

/*
txt.addEventListener("change",textCounter); 
txt.addEventListener("keyup",textCounter); 
txt.addEventListener("keydown",textCounter); 
*/

["keydown","keyup","change"].forEach(function(e){
  txt.addEventListener(e,textCounter); 
})

const maxLength = 20; 
const warnLength = 7; 

function textCounter(e){
  console.log(e);
  let count = txt.value.length; 

  if(count>maxLength){ 
    console.log(txt.value.substring(0,maxLength));
    txt.value = txt.value.substring(0,maxLength);
  }
  if(count>warnLength){
    output.classList.add("red");
  }else{
    output.classList.remove("red");
  }

    output.innerHTML = (maxLength-count) + " characters left chachacha"
  }
