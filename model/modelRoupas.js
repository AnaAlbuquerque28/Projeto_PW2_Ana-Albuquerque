const Sequelize = require('sequelize');

const connection = require('../database/database');


const modelCliente = connection.define(
    'tbl_Cliente',
    {
        idCliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome_cliente:{
            type: Sequelize.STRING(100),
            allowNull: true,
        },

        CPF_cliente:{
            type: Sequelize.STRING(11),
            allowNull: true,
        },

        email_cliente:{
            type: Sequelize.STRING(45),
            allowNull: true,
        },

        telefone_cliente:{
            type: Sequelize.STRING(15),
            allowNull: true,
        }
    }
);

/*const modelProduto = connection.define(
    'tbl_produto',
    {
        idProduto:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome_produto:{
            type: Sequelize.STRING(100),
            allowNull: false,
        },

        qtd_produto:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        vl_produto:{
            type: Sequelize.DOUBLE,
            allowNull: false,
        }
    }
);

const modelPedido = connection.define(
    'tbl_pedido',
    {
        idPedido:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        cliente_idCliente:{
            foreignkey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        produto_idProduto:{
            foreignkey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        data_pedido:{
            type: Sequelize.DATE,
            allowNull: false,
        }
    }
);
*/

//modelCliente.sync({force:true});


//modelProduto.sync({force:true});
// modelPedido.sync({force:true});

module.exports = modelCliente;
