//set initial counter
let counter = 0

//select value and buttons
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach(btn => {
   btn.addEventListener('click', function(event) {
       const style = event.currentTarget.classList
       if(style.contains('decrease')) {
           counter--
       } else if(style.contains('increase')) {
           counter++
       } else {
           counter = 0
       }
       if (counter > 0) {
           value.style.color = 'green'
       }
       if (counter < 0) {
           value.style.color = 'skyblue'
       }
       if (counter === 0) {
           value.style.color = 'black'
       }
       value.textContent = counter
   })
});
