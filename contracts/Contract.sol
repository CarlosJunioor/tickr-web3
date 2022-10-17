// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Contract {
    uint256 ticket;

    constructor() {
        console.log("Bem-vindo ao Marketplace da Tickr");
    }

    function wave() public {
        ticket += 1;
        console.log("%s Recebeu o ingresso dos Coldplay", msg.sender);
    }

    function getTicket() public view returns (uint256) {
        console.log("Temos um total de %d Ingressos", ticket);
        return ticket;
    }
}