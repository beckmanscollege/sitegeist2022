var buttons = document.querySelectorAll("button")

for (let button of buttons){
  
  button.addEventListener("click", () => {
    
    var show = button.getAttribute("data-show")
    document.body.classList.toggle("show-"+show)
    
  });
  
}
