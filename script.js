const init = () => {
const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementById('searchByName');
alert(input.value)
console.log(input.value)

fetch(`https://api.github.com/users/${input.value}`)


// fetch ('https://api.github.com/users/$[input.value]')
.then(response => response.json())
.then (data => {

const repository = document.getElementById('repo-list')
 const img = document.getElementById('img')
const followed=document.getElementById('followers')
const follow =document.getElementById('following')
//   .catch((error)=>{
//     console.log ('it is an error ')
img.src = data.avatar_url
repository.innerHTML = data.public_repos
followed.innerHTML= data.followers
follow.innerHTML = data.following
  })
});

}
document.addEventListener('DOMContentLoaded', init);
