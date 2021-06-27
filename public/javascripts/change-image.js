const selectedColor = document.querySelector('.colorForm');

selectedColor.addEventListener('change',(event)=>{
  console.log(event.target.value);
})


//  get the value and add it to the background image of the selected div