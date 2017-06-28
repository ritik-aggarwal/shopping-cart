/**
 * Created by Ritik on 29-06-2017.
 */
const Sequelize = require('sequelize');
const db = new Sequelize( 'test', 'mypass', 'shoppingcart' {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
        max: 5,
            min: 0,
            idle: 5000
    }
});

const Cart = db.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cost: Sequelize.INTEGER,
    qty: Sequelize.INTEGER,
    name: Sequelize.STRING,
    total: Sequelize.INTEGER,

});

db.sync({force: false}).then(() => {
    console.log('Database is synchronised');
});

function getCarts () {
    return Cart.findAll({
        where: {
            qty: {
                $gt: 0,
            }
        }
    })
}


function changeCart(id, quantum){
    console.log("change cart called", name , quantum)
    return Cart.update({
        qty: quantum
    }, {
        where: {
            name: {
                $eq: name,
            }
        }
    });
}

function addCart (cart) {
    console.log("added to cart");
    return Cart.create({
        name: cart.name,
        qty: cart.qty,
        cost: cart.cost,
        total: cart.cost*cart.qty
    })
}

module.exports = {
    getCarts,
    addCart,
    changeCart
};
