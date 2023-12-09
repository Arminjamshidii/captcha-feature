
const captcha=document.querySelectorAll(".captcha")
const generator = document.querySelector(".generator")
const captchaInput = document.querySelector(".captcha-input")
const submitBtn=document.querySelector(".submit-btn")
let captchaContent = '';


const submitHandler= ()=> {
    
    console.log(captchaInput.value);
    // captchaInput.value==captchaContent?console.log("true"):generateCaptcha();
    if ( captchaInput.value==captchaContent){
        console.log("true");
    }else{
        generateCaptcha()
        captchaInput.value=""
    }
    
}

//genarate random fontsize bitween 3-4 rem
function fontSizeNumber() {
    return Math.floor(Math.random() * (4-3 + 1)) + 3;
    
}
 // Generate a random rotation between 0 and 60 deg
function rotateNumber() {
  
    return Math.floor(Math.random() * 60);
    
}


function generateCaptcha() {
    
    let possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    captcha.forEach(item => {
        item.textContent= possibleChars.charAt(Math.floor(Math.random()*possibleChars.length));
        item.style.fontSize = fontSizeNumber() + 'rem'; 
        item.style.transform = `rotate(${rotateNumber()}deg)`;
        
        captchaContent += item.textContent 
       
    });
    
}
generateCaptcha()


generator.addEventListener("click",generateCaptcha)
submitBtn.addEventListener("click",submitHandler)

