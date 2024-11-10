const ch ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captcha='';

    let btn=document.querySelector("#submit")
function generateCaptcha() {
     captcha='';
    for(let i=0;i<4;i++){
        captcha += ch.charAt(Math.floor(Math.random() * ch.length));
    }
    
    
    document.getElementById("capcode").innerText=captcha;
    document.getElementById("message").innerText="";
}
function clearOTP(){
    document.getElementById("otp1").value='';
    document.getElementById("otp2").value='';
    document.getElementById("otp3").value='';
    document.getElementById("otp4").value='';
}

function nextCaptcha(currInput,nextInput){
    if(currInput.value.length ===1 && nextInput){
        document.getElementById(nextInput).focus();
    }
}
function vCaptcha(){
    const otpfind = document.getElementById("otp1").value +
    document.getElementById("otp2").value +
    document.getElementById("otp3").value +
    document.getElementById("otp4").value;

console.log( captcha);


if(otpfind.length === 4){
    if(otpfind === captcha){
        document.getElementById("message").innerText = "OTP matching successfully!";
    }
    else{
    document.getElementById("message").innerText = "Invaid OTP!";
    clearOTP();
    }
}
}
btn.addEventListener("click",()=>{
    console.log("hello");
    vCaptcha()
 
})