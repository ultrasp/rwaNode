const dotenv = require('dotenv').config();
const token = require('../Contracts/ERC20')
const contract_abi = [{ "inputs": [{ "internalType": "contract IERC20", "name": "_tokenAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousSigner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newSigner", "type": "address" }], "name": "SignerAddressUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "TokenAddressUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokenBuyed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokenPerUSDPriceUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "components": [{ "internalType": "address", "name": "priceFetchContract", "type": "address" }, { "internalType": "address", "name": "paymentToken", "type": "address" }], "indexed": false, "internalType": "struct ICO.tokenDetails", "name": "", "type": "tuple" }], "name": "paymentTokenDetails", "type": "event" }, { "inputs": [], "name": "ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SIGNER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "enum ICO.PaymentType", "name": "assetType", "type": "uint8" }, { "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "components": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }], "internalType": "struct ICO.Sign", "name": "sign", "type": "tuple" }], "name": "buy", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "enum ICO.PaymentType", "name": "payment", "type": "uint8" }], "name": "getLatestPrice", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "enum ICO.PaymentType", "name": "", "type": "uint8" }], "name": "paymentAddress", "outputs": [{ "internalType": "address", "name": "priceFetchContract", "type": "address" }, { "internalType": "address", "name": "paymentToken", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "recoverETH", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "recoverToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "enum ICO.PaymentType", "name": "assetType", "type": "uint8" }, { "components": [{ "internalType": "address", "name": "priceFetchContract", "type": "address" }, { "internalType": "address", "name": "paymentToken", "type": "address" }], "internalType": "struct ICO.tokenDetails", "name": "_tokenDetails", "type": "tuple" }], "name": "setPaymentTokenDetails", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "signerAddress", "type": "address" }], "name": "setSignerAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }], "name": "setTokenAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }], "name": "setTokenPricePerUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "signer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const BigNumber = require('bignumber.js');
const ethers = require('ethers');
const keythereum = require('keythereum');
const fs = require('fs');
const Web3 = require('web3');

const stake_abi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ownerAddress","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"rewardFeePermile","type":"uint256"},{"internalType":"uint256","name":"stakeLimit","type":"uint256"},{"internalType":"uint256","name":"penaltyFeePermile","type":"uint256"}],"indexed":false,"internalType":"struct stakingContract.Stake","name":"","type":"tuple"}],"name":"StakeLimitUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staking","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ownerAddress","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"emergencyWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getUserDetails","outputs":[{"components":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"initialTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"internalType":"struct stakingContract.UserDetail","name":"","type":"tuple"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getstakingDetails","outputs":[{"components":[{"internalType":"uint256","name":"rewardFeePermile","type":"uint256"},{"internalType":"uint256","name":"stakeLimit","type":"uint256"},{"internalType":"uint256","name":"penaltyFeePermile","type":"uint256"}],"internalType":"struct stakingContract.Stake","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"components":[{"internalType":"uint256","name":"rewardFeePermile","type":"uint256"},{"internalType":"uint256","name":"stakeLimit","type":"uint256"},{"internalType":"uint256","name":"penaltyFeePermile","type":"uint256"}],"internalType":"struct stakingContract.Stake","name":"_stakeDetails","type":"tuple"}],"name":"setStakeDetails","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"stake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const stake_contract = "0x53DfdbB4B748C5C581E28a271413813843a8C3D4";


/**
 * Used to Get Token Details
 * @param {*} req 
 * @param {*} res 
 */
async function getTokenDetails(req, res) {
    try {
console.log(req.query);
        var getprovider = getProvider(req.query.chain)
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        const erc20 = await new ethers.Contract(req.query.contractAddress, token.abi, provider);
        var data = {};
        data['name'] = await erc20.name();
        data['symbol'] = await erc20.symbol();
        data['decimals'] = await erc20.decimals();
        var totalSupply = await erc20.totalSupply();
        data['totalSupply'] = totalSupply.toString() / 10 ** data['decimals'];
        res.send({ 'status': "success", 'data': data });
    } catch (error) {
console.log(error);
        res.send({ 'status': 'failed', 'message': 'unable to get token details' })
    }
}


/**
 * Used to Get Token Balance
 * @param {*} req 
 * @param {*} res 
 */
async function getBalance(req, res) {
    try {
        console.log(req.body);
        var getprovider = getProvider(req.body.chain)
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        const erc20 = new ethers.Contract(req.body.contract_address, token.abi, provider);
        let balance = await erc20.balanceOf(req.body.address);
        var currentBalance = balance.toString();
        var decimals = await erc20.decimals();
        if (currentBalance != 0)
            balance = balance / 10 ** decimals;
        else
            balance = 0;

        return res.send({ "balance": balance, 'status': 'success' });
    } catch (err) {
        res.json({ 'error': err.message, 'status': 'failed' });
    }
}

/**
 * Used to Transfer Token
 * @param {*} req 
 * @param {*} res 
 */
async function transfer(req, res) {
    try {
        let amount = new BigNumber(
            req.body.amount * 10 ** req.body.decimal
        ).toFixed();

        var getprovider = getProvider(req.body.chain)
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        var gasPrice = await provider.getGasPrice();

        let wallet = new ethers.Wallet(req.body.key, provider);
        let tokenContract = new ethers.Contract(req.body.contract_address, token.abi, wallet);

        // let amount = new BigNumber(
        //     req.body.amount * 10 ** req.body.decimal
        // ).toFixed();

        var gasLimit = parseInt(await tokenContract.estimateGas.transfer(req.body.to, amount));
        let withdraw_txn = await tokenContract.transfer(req.body.to, amount, { gasPrice: gasPrice, gasLimit: gasLimit });

        res.send({ status: "success", message: "Transaction Successfull", txHash: withdraw_txn.hash });
    } catch (error) {
        res.json({ 'error': error.message, 'status': 'failed' });
    }
}

/**
 * Used to Get Key
 * @param {*} req 
 * @param {*} res 
 */
async function getKey(req, res) {
    try {
        const datadir = dotenv.parsed.KEY_DIRECTORY;
        const keyObject = keythereum.importFromFile(req.body.address, datadir);
        const key = keythereum.recover(req.body.string, keyObject);
        var getkey = key.toString('hex');
        return res.send({ status: "success", key: getkey });
    } catch (error) {
        console.log(error);
        return res.send({ status: "failed", message: "Unable to recover key" });
    }
}

/**
 * Used to GET Native Token Balance (ETH,BNB,MATIC)
 * @param {*} req 
 * @param {*} res 
 */
async function nativeBalance(req, res) {
    try {
        var getprovider = getProvider(req.body.chain)
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        const balance = await provider.getBalance(req.body.address);
        var currentBalance = balance.toString() / 1000000000000000000;
        console.log(currentBalance);
        res.send({ status: "success", balance: currentBalance });
    } catch (error) {
        res.send({ status: "failed", message: "Unable to get balance" });
    }
}

async function createSign(req, res) {
    try {
    console.log(req.body);  
        var getprovider = getProvider(req.body.chain)
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        let wallet = new ethers.Wallet(dotenv.parsed.KEY, provider);
        var nonce = Math.floor(new Date().getTime() / 1000);
        var amount = req.body.cryptoValue;
        hash = ethers.utils.solidityKeccak256(["uint256", "address", "address", "uint256", 'uint256'], [req.body.index, req.body.address, req.body.caller, amount.toString(), nonce])
        var msgHash = ethers.utils.arrayify(hash);
        var hash = await wallet.signMessage(msgHash);
        var sign = await splitSign(hash, nonce);
        res.send({ status: "success", signature: sign });
    }
    catch (error) {
        console.log(error);
        return res.send({ status: "failed", message: "Unable to find transaction hash" });
    }
}

async function staking(req, res){
    try{
        console.log(req.body);
        var getprovider = getProvider(req.body.chain);
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        var gasPrice = await provider.getFeeData();
        var gasvalue = ethers.utils.formatUnits(gasPrice.maxFeePerGas, "wei");
        //var gasLimit = 170000;
        //var gasPrice = 550000000000;
        const Signer = new ethers.Wallet(req.body.key, provider);
        const stakeInstance = new ethers.Contract(stake_contract, stake_abi, Signer); console.log(stakeInstance);
       // var gasLimit = parseInt(await stakeInstance.estimateGas.stake(req.body.amount, req.body.level));
        var staking = await stakeInstance.connect(Signer).stake(req.body.amount, req.body.level, { gasPrice: gasvalue, gasLimit: 200000 });
        console.log(staking.hash)
        res.send({ status: "success", message: "Staking Successfull", txHash: staking.hash });
    }catch(error){
        res.send({ 'error': error.message, 'status': 'failed' });
    }
}

async function emergency_withdraw(req, res){
    try{
        console.log(req.body);
        var getprovider = getProvider(req.body.chain);
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        var gasPrice = await provider.getFeeData();
        var gasvalue = ethers.utils.formatUnits(gasPrice.maxFeePerGas, "wei");

        const Signer = new ethers.Wallet(req.body.key, provider);
        const stakeInstance = new ethers.Contract(stake_contract, stake_abi, Signer);
        if(req.body.type == 'emergency'){
            console.log('emergency');
            var withdraw = await stakeInstance.connect(Signer).emergencyWithdraw(req.body.level);
        }else{
            console.log('withdraw');
            var withdraw = await stakeInstance.connect(Signer).withdraw(req.body.level);
        }
        console.log(withdraw.hash);
        res.send({ status: "success", message: "withdraw Successfull", txHash: withdraw.hash });
    }catch(error){
        console.log(error);
        res.send({'status':'failed', 'error':error.message});
    }
}

async function splitSign(hash, nonce) {
    var signature = ethers.utils.splitSignature(hash);
    return [signature.v, signature.r, signature.s, nonce];
}


async function getReceipt(req, res) {
    try {
        console.log(req.body);
        var getprovider = getProvider(req.body.chain)
console.log(getprovider);
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        var transactionReceipt = await provider.getTransactionReceipt(req.body.hash);
        return res.send({ status: "success", transactionReceipt: transactionReceipt });
    }
    catch (error) {
        console.log(error)
        return res.send({ status: "failed", message: "Unable to find transaction hash" });
    }
}

async function eth_transfer(req, res) {
    try {
        var getprovider = getProvider(req.body.chain);
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        let privateKey = req.body.key;
        let wallet = new ethers.Wallet(privateKey, provider);
        // Create a transaction object
        var toamount = req.body.value;
        var amount = toamount.toString();
        var gasPrice = await provider.getGasPrice();
        var gasLimit = parseInt(await provider.estimateGas(req.body.to, ethers.utils.parseEther(amount)));
        var gas = (gasPrice * gasLimit) / 1000000000000000000;
        var finalAmount = (amount - gas).toFixed(6);
        let tx = {
            to: req.body.to,
            // Convert currency unit from ether to wei
            value: ethers.utils.parseEther(finalAmount),
            gasLimit: gasLimit,
            gasPrice: gasPrice,
        }
        // Send a transaction
        wallet.sendTransaction(tx).then((txObj) => {
            res.send({ status: "success", txHash: txObj.hash });
        }).catch((error) => {
            res.send({ status: "error", error: error.message });
        });
    }
    catch (error) {
        res.send({ status: "error", error: error.message });
    }
}

// async function eth_transfer(req, res){
//     try{
//         console.log(req.body);
//         var getprovider = getProvider(req.body.chain)
//         var provider = new ethers.providers.JsonRpcProvider(getprovider);
//         let wallet = new ethers.Wallet(req.body.key,provider);
//         var amount = new BigNumber(parseFloat(req.body.value) * 10 ** 18).toFixed();
//         // Create a transaction object
//         let tx = {
//             to: req.body.to, 
//             // Convert currency unit from ether to wei
//             value: ethers.utils.parseEther(req.body.value)
//         }
//         var txObj = await wallet.sendTransaction(tx)
//         res.send({ status : "success", txHash: txObj.hash});
//     }
//     catch (error){
//         res.json({ status: "failed", message : "Unable to transfer amount" });
//     }
// }

/**
 * Used to Get Provider
 * @param {*} chain 
 * @returns 
 */
function getProvider(chain) {
    var network = chain.toUpperCase();
    if (network == 'ETH')
        var provider = dotenv.parsed.ETH_TESTNET_PROVIDER
    else if (network == 'BNB')
        var provider = dotenv.parsed.BSC_TESTNET_PROVIDER
    else if (network == 'AVAX')
        var provider = dotenv.parsed.AVAX_TESTNET_PROVIDER
    else
        var provider = dotenv.parsed.MATIC_TESTNET_PROVIDER
    return provider;
}

async function createAccount(req, res) {
    try {
        let web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');
        let accounts = web3.eth.accounts.create(req.body.string);
        var V3KeyStore = web3.eth.accounts.encrypt(accounts.privateKey, req.body.string);
        var content = JSON.stringify(V3KeyStore);
        var account = JSON.parse(content);
        var address = account.address;
        var filename = 'UTC--' + new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString() + "--" + address;
        var withpath = dotenv.parsed.KEY_DIRECTORY + '/keystore/' + filename;
        fs.writeFileSync(withpath, content, 'ascii');
        res.send({ "status": "success", "account": accounts.address });
    } catch (error) {
        res.send("error");
    }
}

async function recoveryPhrase(req,res) {
    try {
        const wallet = ethers.Wallet.createRandom();
        return res.send({ "status" : "success", "phrase" : wallet.mnemonic.phrase });
    } catch (error) {
        return res.send({ "status" : "error"});
    }
}

async function deploy(req, res) {
    try {
        var getprovider = getProvider(req.body.chain)
        var name = req.body.name;
        var decimal = req.body.decimals;
        var symbol = req.body.symbol;
        var totalsupply = req.body.totalSupply;
        let supply = longnumberstring(totalsupply * 10 ** decimal);
        console.log([name, symbol, decimal, supply]);
        var provider = new ethers.providers.JsonRpcProvider(getprovider);
        let wallet = new ethers.Wallet(req.body.key, provider);
        const erc20 = new ethers.ContractFactory(token.abi, token.bytecode, wallet);
        let contractData = await erc20.deploy(name, symbol, decimal, totalsupply);
        console.log(contractData);
        res.send({ "status": "success", "contract": contractData });
    }
    catch (error) {
        res.send({ "status": "failed"});
    }
}

function longnumberstring(n) {
    var str, str2 = '', data = n.toExponential().replace('.', '').split(/e/i);
    str = data[0], mag = Number(data[1]);
    if (mag >= 0 && str.length > mag) {
        mag += 1;
        return str.substring(0, mag) + '.' + str.substring(mag);
    }
    if (mag < 0) {
        while (++mag) str2 += '0';
        return '0.' + str2 + str;
    }
    mag = (mag - str.length) + 1;
    while (mag > str2.length) {
        str2 += '0';
    }
    return str + str2;
}

module.exports = { getTokenDetails, getBalance, transfer, getReceipt, getKey, createSign, eth_transfer, nativeBalance, createAccount, deploy, getKey, staking, emergency_withdraw, recoveryPhrase }
