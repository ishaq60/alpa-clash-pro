function hidelementById(elementId){
  const element=document.getElementById (elementId) 
  element.classList.add('hidden');
}
function showElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}


function setBackgroundColorById(elementId){
  const element=document.getElementById(elementId);
  element.classList.add('bg-amber-900');
}

function getArandomAlapabet(){
  //get or create an alphabets array
    const alpabetstring='abbtuihrrhrhihhuerhoa';
    const alpahabets=alpabetstring.split('');
    console.log(alpahabets);
    //get a random index between 0-25
    const randomNumber =Math.random()*25;
    const index=Math.round(randomNumber)
    console.log(index);
    const alpahabet=alpahabets[index];
    console.log(alpahabet);
    return alpahabet;

}