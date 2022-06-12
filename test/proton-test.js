const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("proton", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Proton = await ethers.getContractFactory("proton");
    const proton = await proton.deploy();
    await proton.deployed();

    expect(await proton.test("hello")).to.equal("hello");

  });
});
