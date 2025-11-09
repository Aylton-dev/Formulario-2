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
            return;
        }
    }
});

document.getElementById('botao-cadastrar').addEventListener('click', function() {

 
  const nome = document.getElementById('id_nome_produto').value.trim();
  const tipo = document.getElementById('id_tipo_produto').value.trim();
  const codigo = document.getElementById('id_codigo_produto').value.trim();

    if(nome === ''|| tipo === '' || codigo === ''){
        alert('❌ é obrigatorio preencher todos os campos!');
        return;
    } else {
        alert(`✅ Produto cadastrado com sucesso!\nNome: ${nome}\ncodigo: ${codigo}`);
        return;
    }

});

document.getElementById('botao-entrar').addEventListener('click', function(event){

    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  

    if(username !== '' && password !== ''){
        
        const destino = event.currentTarget.href; 
        
        
        window.location.href = destino;
        
    } else {

        alert("❌ Usuario e Senha inválidos!");
    }

});

