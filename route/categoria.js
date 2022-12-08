const express = require('express');

const modelCliente = require('../model/modelRoupas');

const rota = express.Router();

rota.post('/cadastrarRoupa', (req, res)=>{
    console.log(req.body);
    let {nome_cliente} = req.body;
    modelCliente.create(
        {nome_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE INSERIDO COM SUCESSO"
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO INSERIR CLIENTE",
                errorObject:error
            })
        }
    )

});

rota.get('/listarRoupas', (req, res)=>{
    modelCliente.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatos:"LISTAGEM REALIZADA",
                    data: response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus:"LISTAGEM NÃO REALIZADA",
                    errorObject: error
                });
            }
        )


    res.send('ROTA DE LISTAGEM DE ROUPAS!');
});

rota.get('/listarRoupasPK/:idCliente', (req, res)=>{
    let {idCliente} = req.params;  
    modelCliente.findByPk(idCliente)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.get('/listarRoupasNOME/:nome_cliente', (req, res)=>{
        let {nome_cliente} = req.params;  
        modelCliente.findOne({attributes:['idCliente', 'nome_cliente'],where:{nome_cliente}})
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatos:"LISTAGEM REALIZADA",
                    data: response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus:"LISTAGEM NÃO REALIZADA",
                    errorObject: error
                });
            }
        )
});
rota.get('/listarRoupasCPF/:CPF_cliente', (req, res)=>{
    let {CPF_cliente} = req.params;  
    modelRoupas.findOne({attributes:['idCliente', 'CPF_cliente'],where:{CPF_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.get('/listarRoupasEMAIL/:email_cliente', (req, res)=>{
    let {email_cliente} = req.params;  
    modelCliente.findOne({attributes:['idCliente', 'email_cliente'],where:{email_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.get('/listarRoupasTELEFONE/:telefone_cliente', (req, res)=>{
    let {telefone_cliente} = req.params;  
    modelCliente.findOne({attributes:['idCliente', 'telefone_cliente'],where:{telefone_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.put('/alterarRoupa', (req, res)=>{
    const {idCliente, nome_cliente} = req.body;
    modelCliente.update(
        {Nome_cliente},
        {where:{idCliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"ALTERAÇÃO REALIZADA",
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"ERRO AO ALTERAR",
                errorObject: error
            });
        }
    );
});

rota.delete('/excluirRoupa/:idCliente', (req, res)=>{
    console.log(req.params);
    let {idCliente} = req.params
    modelCliente.destroy(
        {where:{idCliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"EXCLUSÃO REALIZADA",
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"ERRO AO EXCLUIR",
                errorObject: error
            });
        }
    );
});
module.exports = rota;