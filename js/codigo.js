function validacao() {
    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let cpf = document.getElementById("i_cpf");
    let telefone = document.getElementById("i_telefone");
    let email = document.getElementById("i_email");
    let endereco = document.getElementById("i_endereco");
    let data = document.getElementById("i_data");
    let senha = document.getElementById("i_senha");
    let con_senha = document.getElementById("i_conSenha");
    let termos = document.getElementById("i_termos");

    let inputs = [nome, sobrenome, cpf, telefone, email, endereco, data, senha, con_senha, termos];
    
    inputs.forEach(input => {
        estilo_input(input, "#f45656", "#808080");
    });

    if (senha.value !== con_senha.value) {
        alert("As senhas não coincidem!");
        senha.style.border = "3px solid #f45656";
        con_senha.style.border = "3px solid #f45656";
    }
}

function estilo_input(input, cor_1, cor_2) {
    let alert = document.getElementById("f_alert");

    if (!input.checkValidity()) {
        alert.style.display = "block";
        input.style.border = `3px solid ${cor_1}`;
    } else {
        input.style.border = `1px solid ${cor_2}`;
    }
}