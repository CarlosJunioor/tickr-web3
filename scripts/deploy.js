const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account:", deployer.address);
    console.log("Accout balance:", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("Contract");
    const portal = await Token.deploy();
    await portal.deployed();

    console.log("Contract address:", portal.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();