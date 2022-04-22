const btn = document.querySelectorAll(".cut");
const test = document.querySelectorAll(".utest");
const bidPage = document.querySelectorAll(".rv-db");
const hey2 = document.querySelectorAll(".rv-db-bid");
const bidDone  = document.querySelectorAll(".bid-done");
const done  = document.querySelectorAll(".done");
const hey = document.querySelectorAll(".hey-there");


function first() {
    hey[0].classList.toggle("addme");
}
function second(){
  hey2[0].classList.toggle("addme2");
}

function Buton(x){
   if(x === 2){
     hey[0].classList.toggle("addme");
   }else if(x === 1){
     hey2[0].classList.toggle("addme2");
   }else if (x === 0) {
     done[0].classList.toggle("done-display");
   }
};

test.forEach((item, i) => {
     item.addEventListener('click' , first);
});

bidPage.forEach((item, i) => {
     item.addEventListener('click' , second);
});

btn.forEach((item, i) => {
    item.addEventListener('click' , function(){
          Buton(i);
    });
});


function myFunction() {

  done[0].classList.toggle("done-display");

  var enteredAmount =
   Number(document.getElementById("bid-amount").value);
  let balance = Number(document.getElementById("money").innerText);
  let paragraph = document.querySelectorAll(".paragraph");

      if(typeof(enteredAmount) === NaN || enteredAmount == ""){
        paragraph[0].innerText = "Invalid Entery";
        paragraph[0].style.color = "red";
      }
      else if(enteredAmount > balance){
         paragraph[0].innerText = "Add Balance";
         paragraph[0].style.color = "red";
          console.log("add balace");
      }else if(enteredAmount <= balance){
        paragraph[0].innerText = "Done";
      }

}

bidDone[0].addEventListener('click' , myFunction);
