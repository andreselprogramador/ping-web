const input = document.querySelector("#input");
const error = document.querySelector("#error");

const btn = document.querySelector("#btn").addEventListener("click", function(e){
    const regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(regular.test(input.value)){
        console.log(`Enviando ${input.value}`)
        setTimeout(function(){
            input.value.remove(); 
        }, 1000)
    }else{
        input.classList.add("activado_input");
        error.classList.add("activado");
        setTimeout(function(){
            input.classList.remove("activado_input");
            error.classList.remove("activado");
        }, 1500)
    }

    e.preventDefault();

})
