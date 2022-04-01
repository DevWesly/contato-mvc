const res = require("express/lib/response")

//para tesete, assumindo que o usuario logado seja o usuario id=1;
const uid = 1
module.exports = {
    listarContatos: (req, res) => {
        //importando os contatos do usuario
        let contatos = require(`../database/contatos_${uid}.json`); 
        //enviando a view para o cliente
        res.render('home.ejs',{contatos: contatos});
    },
    capturarContato:(req,res)=>{
         //importando os contatos do usuario
         let contatos = require(`../database/contatos_${uid}.json`);
         //descobrir o id do contato que o usuario quer
         let idDoContato = req.params.id

         //encontrar no array de contatos o contato que tem id desejado.
         let contato = contatos.find(
             (c)=>{
                 return c.id==idDoContato
             }
         )

         //retornar o contato pro cliente ou mesagem de erro caso aquele contato não exista.
         if(contato === undefined){
             res.send("O contato buscado não existe");}
             else{
                res.send(contato); 
             }

    }
}