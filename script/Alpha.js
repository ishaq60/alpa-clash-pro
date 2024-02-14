// function play(){
//  //step-1:hide the home screen:to hide the screen and the class hidden to the home section
//  const homesection=document.getElementById('home-screen')
// //  console.log(homesection)
// homesection.classList.add('hidden');
// const PlaygroundSection=document.getElementById('play-ground')
// // console.log(PlaygroundSection.classList)
// PlaygroundSection.classList.remove('hidden')
// }
function continueGame(){
    // step-1 :genarate a random alpahabet
    const alpahabet=getArandomAlapabet();
    console.log('the random value',alpahabet);
    // set randomly genarated alpahbet to screen(show it)
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alpahabet;
    setBackgroundColorById(alpahabet);
}
// set background color

function play(){
    hidelementById('home-screen');
    showElementById('play-ground');
   continueGame()
}
