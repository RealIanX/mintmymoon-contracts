const { expect } = require('chai');
const { ethers } = require("hardhat")

describe("MoonNFT Smart Contract Tests", function() {

    let moonNFT;

    this.beforeEach(async function() {
        // This is executed before each test
        // Deploying the smart contract
        const MoonNFT = await ethers.getContractFactory("MoonNFT");
        moonNFT = await MoonNFT.deploy("MoonNFT Contract", "MMM");
    })

    it("NFT is minted successfully", async function() {
        [account1] = await ethers.getSigners();

        expect(await moonNFT.balanceOf(account1.address)).to.equal(0);
        
        const tokenURI = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tx = await moonNFT.connect(account1).mint(tokenURI);

        expect(await moonNFT.balanceOf(account1.address)).to.equal(1);
    })

    it("tokenURI is set sucessfully", async function() {
        [account1, account2] = await ethers.getSigners();

        const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

        const tx1 = await moonNFT.connect(account1).mint(tokenURI_1);
        const tx2 = await moonNFT.connect(account2).mint(tokenURI_2);

        expect(await moonNFT.tokenURI(0)).to.equal(tokenURI_1);
        expect(await moonNFT.tokenURI(1)).to.equal(tokenURI_2);

    })

})