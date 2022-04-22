
const tab= document.querySelectorAll(" .tabshow");
const info = document.querySelectorAll(" .personal-info");

function tabs(panelIndex){

       tab.forEach(function(node){
           node.style.display = "none";
         });

         tab[panelIndex].style.display = "block";
    }
    tabs(0);

info.forEach((item, i) => {
         item.addEventListener("click",function(){
                 tabs(i);
         });
});
