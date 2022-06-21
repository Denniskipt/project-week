const init = () => {
const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementById('searchByName');
console.log (input.value)

fetch ('https://api.github.com/users/ ${input.value}')
.then(response => response.json())
.then (data => {
  console.log(data);


//   .catch((error)=>{
//     console.log ('it is an error ')
  })
});

}
document.addEventListener('DOMContentLoaded', init);