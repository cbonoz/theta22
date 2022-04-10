//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ClippedNFT is Ownable {
    // A ClippedNFT contract represents digital ownership over a video file produced by a ThetaTV creator.
    
    string private name; // Name of the theta video contract / item.
    string private videoUrl; // Link to the theta NFT video file.
    string private creatorName; // Theta creator of the video.

    constructor(string memory _name, string memory _videoUrl,  string memory _creatorName) {
        console.log("Deploying a ClippedNFT contract with name:", _name);
        name = _name;
        videoUrl = _videoUrl;
        creatorName = _creatorName;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function getCreator() public view returns (string memory) {
        return creatorName;
    }

    function getVideoUrl() public view returns (string memory) {
        return videoUrl;
    }

}