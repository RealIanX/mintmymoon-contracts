# ![MintMyMoon](media/logo.jpg)

Welcome to MintMyMoon, a web app to create and manage your NFTs on MoonBeam:<br><br>
:point_right: Deploy your own collections and mint your NFTs<br>
:point_right: Easily transfer your NFTs (no need to create them on MintMyMoon)<br>
:point_right: Showcase your NFTs in your profil<br>
:point_right: Enjoy low gas fees of MoonBeam blockchain<br>

**Support this project by voting for it the MoonBeam hackathon :heartbeat:**

*This repository contains the smartcontracts of MintMyMoon and the logic/base frontend of the MintMyMoon app.*

## Contracts
This project comes with a classic ERC-721 contract, tests for that contract, a script that deploys that contract.
This is the exact smartcontract deployed by MintMyMoon users when they create a new Collection.  
### Build
```shell
npx hardhat compile
npx hardhat test
node scripts/deploy.js
```
### Verification
You can check that the bytecode of the MintMyMoon collections matchs the bytecode of these smartcontracts 


## Contribute
MintMyMoon is open source under the terms of the GPL2. We welcome contributions. Please review our CONTRIBUTIONS.md document for more information.