const init = () => {
document.getElementById('search').addEventListener('submit', (event) => {
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


 document.getElementById("comment").addEventListener('submit', (e)=>{
  e.preventDefault();

  const comment = document.getElementById('textcomment')
console.log (comment.value)
 let p =comment.value
 document.getElementById('usercomment').innerHTML = p

})
//function handleComment(){
//document.createElement('p').textContent = comment.value
 //document.getElementById('postcomment').appendChild('p')
//}

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const simpleLiker = document.querySelectorAll(".like-glyph");

function likerCallback(e){
  const heart = e.target;
  mimicServerCall("bogusUrl")
  .then(function(){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerText = EMPTY_HEART;
      heart.className = "";

    }
  })
  .catch(function(error) {
    const modal =document.getElementById("modal");
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000 );

  }
  );
}
for (const glyph of simpleLiker) {
  glyph.addEventListener("click",likerCallback);
}
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


}
document.addEventListener('DOMContentLoaded', init);
