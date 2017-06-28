/**
 * Created by Ritik on 29-06-2017.
 */
const route = require('express').Router();
const data = require('../db/data');

route.get('/', (req, res) => {

    data.getCarts().then((results) => {
    res.send(results)
})

});

route.post('/new', (req, res) => {
    console.log("api cart added");
data.addCart(req.body).then(()=> {
    res.redirect('/api')
}).catch((err) => {
    res.send(err)
})
});

route.get('/take', (req, res) => {
    data.getCarts().then(()=> {
    res.redirect('/api')
}).catch((err) => {
    res.send(err)
})
});

route.post('/in', (req, res) => {
    data.changeCart(req.body.id, req.body.qty).then(()=> {
    res.redirect('/api')
}).catch((err) => {
    res.send(err)
})
});

route.post('/dec', (req, res) => {
    data.changeCart(req.body).then(()=> {
    res.redirect('/api')
}).catch((err) => {
    res.send(err)
})
});

module.exports = route;
