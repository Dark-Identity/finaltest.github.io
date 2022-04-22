const selection = document.querySelectorAll(".Vip-selection");
const input = document.getElementsByTagName('input');

let object = {

    first : {
     Upi  : "xyz",
     Name : "Atul",
     code :  566
   },
    second :{
     Upi  : "lmn",
     Name : "Akash",
     code : 438
  },
    third  :{
     Upi  : "mno",
     Name : "Rishab",
     code : 444
  }

};

const editThem = (x)=>{

   let amount = document.querySelectorAll("#min-amount");

     switch (x) {
       case 0:
         amount[0].textContent = "200.00";
         amount[0].style.color = "red";
         input[0].value = "200.00";
         break;
       case 1:
         amount[0].textContent = "500.00";
         amount[0].style.color = "red";
         input[0].value = "500.00";
        break;
       case 2:
         amount[0].textContent = "1000.00"
         amount[0].style.color = "red";
         input[0].value = "1000.00";
        break;
       default:
        amount[0].textContent = "200.00";
        amount[0].style.color = "red";

     }
}

selection[0].addEventListener('change' , ()=>{
    editThem(selection[0].options.selectedIndex);
});

editThem(0);

for(let i = 0; i< input.length ; i++){
     input[i].addEventListener('click' , ()=>{
        input[i].value = "";
     });
}

// for the randome upi text generator:-;

const span = document.getElementsByClassName('spans');
let x = Object.keys(object);

let r_index = Math.floor(Math.random()*x.length);

let key = ['Upi' , 'Name' , 'code'];

for(let i = 0; i < span.length ; i++){
  span[i].innerText = object[x[r_index]][key[i]];
}

// randome upi generator
