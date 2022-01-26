let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
toggleForm()
getAllToys()
newToyForm()
//updateLikes()
});

const toggleForm = () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
  
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
 
  })
};

  
const newToyForm = () => {
  const toyForm = document.querySelector('.add-toy-form')
  toyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newToyName = e.target.name.value
    const newToyImage = e.target.image.value
    const newToyObj = {
      name: newToyName,
      image: newToyImage,
      likes: 0,
    }
    postToy(newToyObj)
  })
}


  //fetches
  //fetch 1
function getAllToys(){
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toyData => toyData.forEach(renderToy))
  };
  //fetch 1

  //fetch 2
function postToy(newToyObj){
    
  fetch('http://localhost:3000/toys',
    {
    method: 'POST',
    headers:
    {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     
    body: JSON.stringify(newToyObj)
})
  .then(res => res.json())
  .then(data => console.log(newToyObj))
}
  //fetch 2

  //fetch 3
//makes a patch fetch that updates the likes in the DOM

function renderToy(toy){
    const toyCard = document.createElement('div')
    toyCard.className ="card"
    const toyName = document.createElement('h2')
    toyName.innerText = toy.name
    const toyImage = document.createElement('img')
    toyImage.src = toy.image
    toyImage.className = "toy-avatar"
    const toyLikes = document.createElement('p')
    toyLikes.innerText = `${toy.likes} Likes`
    const likeBtn = document.createElement('button')
    likeBtn.innerText = `Likes ❤️`
    likeBtn.className = 'like-btn'
    likeBtn.id = toy.id
    
  
    toyCard.append(toyName, toyImage, toyLikes, likeBtn)
    const toyBox = document.getElementById('toy-collection')
    toyBox.appendChild(toyCard)
    toyBox.addEventListener('click', (e) => {
      if (e.target.className === 'like-btn'){
        console.log(e)
      }
    })
  };


