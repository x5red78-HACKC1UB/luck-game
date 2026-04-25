let p= document.getElementById("paragraph1");
let result= document.getElementById("result");
let roll= document.getElementById("rollbutton");
let chancedivider=2;
let rollresult;
function updatetxt() {
    p.textContent = "You have a 1/" + chancedivider + " chance";
}

function rolling() {
   rollresult=Math.floor(Math.random()*chancedivider)+1;
   console.log(rollresult);
     if (rollresult===1) {
        result.textContent="Sucess!"
       chancedivider=chancedivider*=2;
     } else {
        result.textContent="Fail!"
        chancedivider=2;
     }
}
roll.addEventListener("click", ()=>{
    rolling();
    updatetxt();

});
