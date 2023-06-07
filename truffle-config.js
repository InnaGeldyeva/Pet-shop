module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    matic: {
      //https://side-greatest-dew.matic-testnet.discover.quiknode.pro/e4f8fafc81ac110f69dc8ebbd9fa3d8df9f57b89/
      //https://rpc-mumbai.maticvigil.com 
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
      },
  }
};
