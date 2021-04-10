const FundraiserFactoryContract = artifacts.require("FundraiserFactory");

contract("FundraiserFactory: development", () => {
  it("it has been deployed", async () => {
    const fundraiserFactory = FundraiserFactoryContract.deployed();
    assert(fundraiserFactory, "fundraiser factory was not deployed");;
  });
});

contract("FundraiserFactory: createFundraiser", accounts => {
  const name = "Hiro Miya";
  const url = "google.com";
  const imageURL = "https://placekitten.com/600/350";
  const description = "fuck";
  const beneficiary = accounts[1];

  it("increases the fundraisersCount", async () => {
    const fundraiserFactory = await FundraiserFactoryContract.deployed();
    const currentCount = await fundraiserFactory.fundraisersCount();
    await fundraiserFactory.createFundraiser(
      name,
      url,
      imageURL,
      description,
      beneficiary,
    );
    const newCount = await fundraiserFactory.fundraisersCount();
    const diff = newCount - currentCount;
    assert.equal(diff, 1, "should increment by 1");
  });
});
