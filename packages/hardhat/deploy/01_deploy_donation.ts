import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployDonation: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const donationContract = await deploy("Donation", {
    from: deployer,
    args: [], // No constructor arguments for this contract
    log: true,
  });

  console.log("Donation contract deployed at:", donationContract.address);
};

export default deployDonation;
deployDonation.tags = ["Donation"];
