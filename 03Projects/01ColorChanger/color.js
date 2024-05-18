const buttons = document.querySelectorAll("buttons")
const body = document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const ev = e.target.id
        switch(ev){
         case "grey": body.style.backgroundColor = e.target.id
         break;
         case "white": body.style.backgroundColor = 'white'
         break;
         case "yellow": body.style.backgroundColor = 'yellow'
         break;
         case "blue": body.style.backgroundColor = 'blue'
         break;
    }
})
})