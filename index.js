const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var erc20 = require('./controllers/erc20.controller');

app.get('/tokendetails', (req, res) => erc20.getTokenDetails(req, res));
app.post('/balance', (req, res) => erc20.getBalance(req, res));
app.post('/transfer', (req, res) => erc20.transfer(req,res));
app.post('/getKey', (req, res) => erc20.getKey(req, res));
app.post('/eth_transfer', (req, res) => erc20.eth_transfer(req, res));
app.post('/native_balance', (req, res) => erc20.nativeBalance(req, res));
app.post('/getReceipt' , (req,res) => erc20.getReceipt(req,res));
app.post('/getCoinPrice' , (req,res) => erc20.getCoinPrice(req,res));
app.post('/CreateAccount', (req,res) => erc20.createAccount(req,res));
app.get('/recoveryPhrase', (req,res) => erc20.recoveryPhrase(req,res));
app.post('/createSign', (req,res) => erc20.createSign(req,res));
app.post('/staking', (req,res) => erc20.staking(req,res));
app.post('/stake', (req,res) => erc20.stake(req,res));
app.post('/deploy', (req, res) => erc20.deploy(req, res));
app.post('/e-withdraw', (req, res) => erc20.emergency_withdraw(req, res));
app.listen('3000', function(){
    console.log("Application is running on 3000 port");
});