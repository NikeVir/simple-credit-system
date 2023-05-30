// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.5.0 < 0.9.0;

contract SimpleCreditSystem{

    address private owner;
    uint private totalmintedcredits = 0;
    mapping(address => uint256) private balances;

    constructor(){
        owner = msg.sender;
        balances[msg.sender] = 1000;
        totalmintedcredits += 1000; 
    }

    modifier onlyOwner(){
        require(msg.sender == owner,"Only Owner can call this funtion");
        _;
    }
    function transferCredits(address recipeint, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient credits balance in your account");
        balances[msg.sender] -= amount;
        balances[recipeint] += amount;
    }

    function getbalance(address account) external view returns (uint256) {
        return balances[account];
    }

    function mintCredits(address account, uint256 amount) external onlyOwner{
        balances[account] += amount;
        totalmintedcredits += amount;
    }
}