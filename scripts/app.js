const checkbox = document.querySelector(".checkbox")

checkbox.addEventListener( 'change', function() {
    const result = document.querySelector(".result")
    const container = document.querySelector(".container")
    const operation = document.querySelector(".operation")
    const boutons = document.querySelectorAll(".bouton")
    

    if(this.checked) {
        // DARKMODE
        container.style.backgroundColor="#2D2D2D"
        result.style.color="white"
        operation.style.color="#8692FF"

        for(let i=0; i < boutons.length; i++){
            boutons[i].classList.remove("light")
            boutons[i].classList.add("dark")
        }
        
        
    } else {
        //LIGHTMODE
        container.style.backgroundColor="#F9F8F8"
        result.style.color="black"
        operation.style.color="#FF6B00"

        for(let i=0; i < boutons.length; i++){
            boutons[i].classList.remove("dark")
            boutons[i].classList.add("light")
        }
    }



});

