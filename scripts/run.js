const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("Contract");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Ingresso vendido a:", waveContract.address);
    console.log("Vendido por:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTicket();
  
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTicket();
  
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTicket();
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