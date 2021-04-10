// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.6.8;

import "./Fundraiser.sol";

contract FundraiserFactory {
    Fundraiser[] private _fundraisers;

    function createFundraiser(
        string memory name,
        string memory url,
        string memory imageURL,
        string memory description,
        address payable beneficiary
    ) public {
        Fundraiser fundraiser =
            new Fundraiser(
                name,
                url,
                imageURL,
                description,
                beneficiary,
                msg.sender
            );
        _fundraisers.push(fundraiser);
    }

    function fundraisersCount() public view returns (uint256) {
        return _fundraisers.length;
    }
}
