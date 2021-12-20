const button = document.querySelector(".container button");
const joke = document.querySelector(".container p")

document.addEventListener("click",getJoke);
async function getJoke(){
    const data = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            accept:"application/json"
        }
    });
    const jokeObj = await data.json();
    joke.innerHTML = jokeObj.joke;
    console.log(data);
  
}