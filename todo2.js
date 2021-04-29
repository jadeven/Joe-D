var yo = require('yo-yo')


module.exports = function (todo, render) {

    return yo ` <li>
        ${todo.map(function (item) {
            return yo ${item.text}
      })}</li>`
    
    // const li = document.createElement('li')
    // const span = document.createElement('span')
  
    // span.innerHTML = todo.text
  
    // li.appendChild(span)
  
    // if (!todo.completed) {
    //   const completeButton = document.createElement('button')
    //   completeButton.innerHTML = 'Done'
    //   completeButton.onclick = () => {
    //     todo.completed = true
    //     render()
    //   }
    //   li.appendChild(completeButton)
    // }
  
    // return li
