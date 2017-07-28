/**
 * Created by Ritik on 29-06-2017.
 */
const Sequelize = require('sequelize');
const db = new Sequelize({
    username: 'root',
    password: 'password',
    database: 'shoppingcart',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});
const Cart = db.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    qty: Sequelize.INTEGER,
    cost: Sequelize.INTEGER,
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


function changeCart(id1, qty1){
    console.log("change cart called")
    return Cart.update({
        qty: {
            $eq: qty1+1,
        }
    }, {
        where: {
            id: {
                $eq: id1,
            }
        }
    })
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
