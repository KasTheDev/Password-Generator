const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("password-btn1")
let passTwo = document.getElementById("password-btn2")
let generateButton = document.getElementById("generate-btn")
let isPopulated = false
let copiedEl = document.getElementById("copied-el")

generateButton.addEventListener("click", function () {
    if(isPopulated === false){
        for( let i = 0; i < 15; i++){
            let passIndex = Math.floor(Math.random() * characters.length)
            passOne.textContent += characters[passIndex]
        }
        for( let i = 0; i < 15; i++){
            let passIndex = Math.floor(Math.random() * characters.length)
            passTwo.textContent += characters[passIndex]
        }
        isPopulated = true
    }
    else if (isPopulated === true){
        passOne.textContent = ""
        passTwo.textContent = ""
        for( let i = 0; i < 15; i++){
            let passIndex = Math.floor(Math.random() * characters.length)
            passOne.textContent += characters[passIndex]
        }
        for( let i = 0; i < 15; i++){
            let passIndex = Math.floor(Math.random() * characters.length)
            passTwo.textContent += characters[passIndex]
        }
    }

})

passOne.addEventListener( "click" , function(){
    // getting the text content that we want to copy
    const content = document.getElementById("password-btn1").textContent;    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
})
passTwo.addEventListener( "click" , function(){
    // getting the text content that we want to copy
    const content = document.getElementById("password-btn2").textContent;    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
})

function copiedOne(){
    copiedEl.textContent = "Password One Copied to Clipboard!"
}

function copiedTwo(){
    copiedEl.textContent = "Password Two Copied to Clipboard!"
}

//function copyTextOne() {
  //var copyTextOne = passOne.textContent; 
  //console.log(copyTextOne)
//}
//function copyTextTwo() {
 // var copyTextTwo = passTwo.textContent;
 // console.log(copyTextTwo)
//}




