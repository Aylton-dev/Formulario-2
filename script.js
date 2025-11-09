document.getElementById('id_nome_produto').addEventListener('keypress', function(event) {
 
    const isSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(event.key);
    
    const isNumber = !isNaN(event.key) && event.key !== ' ';

    if (isNumber || isSpecialChar){

        event.preventDefault();{
            alert('Este campo aceita apenas letras!');
        }
    }
});

document.getElementById('id_tipo_produto').addEventListener('keypress', function(event){

    const isSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(event.key);
    
    const isNumber = !isNaN(event.key) && event.key !== ' ';

    if(isNumber || isSpecialChar){

        event.preventDefault();{   

            alert('Este campo aceita apenas letras!');
        }
    }
});


    



