console.log("hey js");
// async function main(){
//     let a = await fetch("http://127.0.0.1:5500/songs");
//     let response = await a.text();
//     console.log(response);
    
// }
// main();

/* hasAttribute is a method in JavaScript used to check whether an HTML element has a specified attribute or not. It returns a Boolean value indicating
 whether the element has the specified attribute or not.  
 because we will have to check first href ement is in 'a' tag or not. basically we use hasAttribute for checking it is inside of element or not.*/
let audio;
async function getSongs() {
    let response = await fetch("http://127.0.0.1:5500/songs");
    let data = await response.text();
    console.log(data);
    let div = document.createElement("div");
    div.innerHTML = data;
    let as = div.getElementsByTagName('a');
    
    for(let index = 0; index < as.length; index++){
        const element = as[index];
        console.log(element);
        
        
        if(element.hasAttribute('title') || element.querySelector(".name")){
            // songs.push(element.href);
            let songName = document.querySelector(".song_name")
            songName.innerHTML = element.href;
            
        }   
    }
    // console.log(songs);
    return songName;
}
// getSongs();

async function main(){
    let songs = await getSongs();
    console.log(songs);
    let songUL = document.querySelector('.songsList').getElementsByTagName("ul")[0];
    for (const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("http://127.0.0.1:5500/songs/", " ")}</li>`;
    }
    if (!audio || audio.paused) {
        audio = new Audio(songs[2]);
        audio.play();
    } else {
        audio.pause();
    }
    
}
// main();
document.addEventListener('DOMContentLoaded',function(){
    const btn = document.querySelector(".btn");
    btn.addEventListener('click', main);
})









/*let x = document.createElement("p");
console.log(x); //ye console me paragraph p tag create kr dega */

/* let x = document.getElementsByTagName("p");
connsol.log(x); //ye html file wala paragraph p tag ko console me print kr dega */

/* let x = first.innerHTML;
console.log(x); //first kisi tag ka id/class hai jiske through se hum uss tag me jo bhi kuchh likha hai usse console me get/dekh skte hai 
//or
first.innerHTML = "<i>hey i am italic</i>"; //"hey i am italic" ko italic style me change krke uss tag me add kr dega.pahle wale text ko remove krke*/




