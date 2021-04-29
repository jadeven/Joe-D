

// const buttons = document.querySelectorAll('.rm-button');

// function rmParent() {
//    this.parentElement.remove();
// }

// buttons.forEach(button => {
//   button.addEventListener('click', rmParent);
// });

//User input variable 
let addinput = document.getElementById('inputter')
//Event listener button
let addbtn= document.getElementById('buttoner')
//DOM output variables 
let startedul = document.getElementById('startedul')
let completedul = document.getElementById('completedul')
    
buttoner.addEventListener('click', function(){
  let li = document.createElement('li')
  li.classList.add('paragraph-styling');
  li.innerHTML = addinput.value
  inputter.value = ''
  let buttoner= document.createElement('button')
  startedul.appendChild(li);  
  li.appendChild(buttoner);  
  var texter = document.createTextNode("done");
  buttoner.appendChild(texter);

//click on started li done button
buttoner.addEventListener('click', function(){
      this.parentElement.style.textDecoration= 'line-through';
      this.parentElement.remove()
    // startedul.removeChild(li);
    // completedul.append(this);
    // buttoner.style.textDecoration= 'line-through';  
  let li = document.createElement('li')
  completedul.append(li);  
    completedul.append(this);  


//click on completed li element
li.addEventListener('click', function(){
    completedul.removeChild(li);
  })    
})
})