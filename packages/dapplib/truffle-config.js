require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remind artwork grace brave fold tunnel'; 
let testAccounts = [
"0x2dd8eb74112f22f6fc88ce1b004f50f0e54a15c758a6c78abf9c363d9d6c69fc",
"0x7a19b2afa073c97611a0487500b8186e7178af2e4d322f8f887c81f02d97be44",
"0x23d4cf254f7c6fc050dae5893035c073bc6d4339ec7a290fc5bc5ab24f8c55e9",
"0xc59a8caead5ca9b8130460d833d1685ee9a8e1698de4b1594eab091d87b05c99",
"0x40c1d7450bf9c5fd12c4994e9538c5d79160fd3e51144a664f0222012585cd42",
"0x906f36695e43e680f3407215a3528e9d1d3a7f66b3f245dc330747797232c7b4",
"0xcba33231f68105c864aaf19005d0324d8ae158a2d23d9e40cf49277fa9f87119",
"0xb6e68cca0ab8e642174d43a970239952a05c298d872f44562222cf280ba004e6",
"0x8eb401bcfceb4107d746eefae289a2c3b8847b2ae6dfb18f218d91e8db3052fa",
"0x1cb8f343dd262ecee52fc820a6c59076f4fb6ac557cce97dbc8e91f4d84e7beb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

