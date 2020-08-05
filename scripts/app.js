const checkbox = document.querySelector(".checkbox")

checkbox.addEventListener( 'change', function() {
    const result = document.querySelector(".result")
    const container = document.querySelector(".container")
    if(this.checked) {
        container.style.backgroundColor="#2D2D2D"
        result.style.color="white"
        
    } else {
        // Checkbox is not checked..#F9F8F8
        container.style.backgroundColor="#F9F8F8"
        result.style.color="black"

        
    }
});

