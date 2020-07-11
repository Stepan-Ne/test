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
           value.textContent = counter
       } else if(style.contains('increase')) {
           counter++
           value.textContent = counter

       } else if (style.contains('reset')) {
           counter = 0
           value.textContent = counter
       }
   })
});
