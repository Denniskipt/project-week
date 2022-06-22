const init = () => {
const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementById('searchByName');
alert(input.value)
console.log(input.value)

fetch(`https://api.github.com/users/${input.value}`)


 fetch (`https://api.github.com/users/${input.value}`)
.then(response => response.json())
.then (data => {

const repository = document.getElementById('repo-list')
const photo = document.getElementById('img')
const followed=document.getElementById('followers')
const follow =document.getElementById('following')
const name= document.getElementById('name')
const location= document.getElementById('loc')
const date= document.getElementById('date')
const company= document.getElementById('com')

//   .catch((error)=>{
//     console.log ('it is an error ')
photo.innerHTML = `<img src = "${data.avatar_url}" >`
repository.textContent = data.public_repos
followed.textContent= data.followers
follow.textContent = data.following
name.textContent = data.name
location.textContent = data.location
date.textContent = data.created_at
company.textContent = data.company
  })
});

}
document.addEventListener('DOMContentLoaded', init);
