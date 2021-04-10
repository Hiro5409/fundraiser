const FundraiserFactoryContract = artifacts.require("FundraiserFactory");

contract("FundraiserFactory: development", accounts => {
  it("it has been deployed", async () => {
    const fundraiserFactory = FundraiserFactoryContract.deployed();
    assert(fundraiserFactory, "fundraiser factory was not deployed");;
  });
});
