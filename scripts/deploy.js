async function main(){
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("SimpleCreditSystem");
    const token = await Token.deploy();
    console.log("Token address:", token.address);
}
main().then(()=>process.exit(0)).catch((err)=>{
    console.error(err)
    process.exit(1);
})