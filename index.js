const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")




function generate() {
    passOne.textContent = " "
    passTwo.textContent = " "
    for (let i = 0; i < 15; i++) {

        let randompassword1 = Math.floor(Math.random() * characters.length)
        let randompassword2 = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[randompassword1]
        passTwo.textContent += characters[randompassword2]
    }

}

 

function copy(){

     console.log(passOne.textContent)
navigator.clipboard.writeText(passOne.textContent)
}
