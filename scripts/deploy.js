const hre = require("hardhat");

async function main() {
    console.log("Deploying MoonNFT Contract");
    const [owner] = await ethers.getSigners();
    const MoonNFT = await ethers.getContractFactory("MoonNFT");
    const MoonNFTContract = await MoonNFT.deploy("MoonNFT", "MCL");
    console.log("MoonNFT deployed to:", MoonNFTContract.address);
    const tokenURI = "YOUR_IPFS_LINK";
    const tx = await MoonNFTContract.mint(tokenURI);
    console.log("Token minted:", tx)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });