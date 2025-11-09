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

document.getElementById('botao-cadastrar').addEventListener('click', function() {

 
  const nome = document.getElementById('id_nome_produto').value.trim();
  const tipo = document.getElementById('id_tipo_produto').value.trim();
  const codigo = document.getElementById('id_codigo_produto').value.trim();

    if(nome == ' '|| tipo == ' ' || codigo == ' '){
        alert('é obrigatorio preencher os campos');
    }

    

});

