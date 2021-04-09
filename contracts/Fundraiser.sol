// SPDX-License-Identifier: UNLICENSED

pragma solidity >0.4.23 <0.7.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Fundraiser is Ownable {
    string public name;
    string public url;
    string public imageURL;
    string public description;
    address payable public owner;
    address public beneficiary;

    constructor(
        string memory _name,
        string memory _url,
        string memory _imageURL,
        string memory _description,
        address payable _owner,
        address _beneficiary
    ) public {
        name = _name;
        url = _url;
        imageURL = _imageURL;
        description = _description;
        owner = _owner;
        beneficiary = _beneficiary;
        transferOwnership(owner);
    }
}
