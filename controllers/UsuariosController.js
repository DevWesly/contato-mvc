const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');


module.exports = {
    showRegistrar:(req,res)=>{
        res.render('registro.ejs')
    },
    store:(req,res)=>{
        
        //capturar as informações que o usuario digitou
         let {nome, email, senha} = req.body;
        
        //importar o array de usuarios
        let usuarios = require("../database/usuarios.json");

        //Determinar o idNovo do usuario

        let idNovo = usuarios[usuarios.length-1].id +1;
        // res.send(idNovo+" ")

        //Criar a senha criptograada
        let senhaCriptografada = bcrypt.hashSync(senha,10);
        // res.send(`A senha ${senha} foi criptografada para ${senhaCriptografada}`);


        //Criar um objeto com os dados do usuario

        let usuario = {
            "id": idNovo ,
            "nome": nome,
            "email": email,
            "senha": senhaCriptografada,
        }

        //adicionar um novo usuario a esse array

        usuarios.push(usuario);

        //Salvar este array no arrquivo usuarios.json
        fs.writeFileSync(path.join(__dirname,'/../database/usuarios.json'), JSON.stringify(usuarios,null,4 ));

        //Redirecionando o usuario para a rota get /contatos
        res.redirect('/contatos');


    }
}