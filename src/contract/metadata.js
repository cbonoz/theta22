export const THETA_CONTRACT = {
  contractName: "ThetaMoment",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_videoUrl",
          type: "string",
        },
        {
          internalType: "string",
          name: "_creatorName",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getCreator",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getVideoUrl",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.4+commit.c7e474f2"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_videoUrl","type":"string"},{"internalType":"string","name":"_creatorName","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"getCreator","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVideoUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{"owner()":{"details":"Returns the address of the current owner."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/ThetaMoment.sol":"ThetaMoment"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/access/Ownable.sol":{"keccak256":"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9","license":"MIT","urls":["bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981","dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51"]},"@openzeppelin/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"hardhat/console.sol":{"keccak256":"0x72b6a1d297cd3b033d7c2e4a7e7864934bb767db6453623f1c3082c6534547f4","license":"MIT","urls":["bzz-raw://a8cb8681076e765c214e0d51cac989325f6b98e315eaae06ee0cbd5a9f084763","dweb:/ipfs/QmNWGHi4zmjxQTYN3NMGnJd49jBT5dE4bxTdWEaDuJrC6N"]},"project:/contracts/ThetaMoment.sol":{"keccak256":"0xe568048be8bc62d48c06983f09c2c61e4fdb0b2c5c1d65a3bcd4357232e45540","license":"Unlicense","urls":["bzz-raw://cbe3960dd70fdb30e7d830631fbbf3486760a6fe809c7c8c2f6c3c83c3278ade","dweb:/ipfs/QmXstZWm2VrHadTUMbJ6A52tynD6sgVSBibvxegBjnbLWQ"]}},"version":1}',
  bytecode:
    "0x60806040523480156200001157600080fd5b5060405162000fa938038062000fa9833981810160405281019062000037919062000398565b620000576200004b620000db60201b60201c565b620000e360201b60201c565b620000876040518060600160405280602b815260200162000f7e602b913984620001a760201b620004641760201c565b82600190805190602001906200009f92919062000276565b508160029080519060200190620000b892919062000276565b508060039080519060200190620000d192919062000276565b5050505062000641565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002498282604051602401620001c09291906200047a565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200024d60201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054620002849062000566565b90600052602060002090601f016020900481019282620002a85760008555620002f4565b82601f10620002c357805160ff1916838001178555620002f4565b82800160010185558215620002f4579182015b82811115620002f3578251825591602001919060010190620002d6565b5b50905062000303919062000307565b5090565b5b808211156200032257600081600090555060010162000308565b5090565b60006200033d6200033784620004de565b620004b5565b9050828152602081018484840111156200035657600080fd5b6200036384828562000530565b509392505050565b600082601f8301126200037d57600080fd5b81516200038f84826020860162000326565b91505092915050565b600080600060608486031215620003ae57600080fd5b600084015167ffffffffffffffff811115620003c957600080fd5b620003d7868287016200036b565b935050602084015167ffffffffffffffff811115620003f557600080fd5b62000403868287016200036b565b925050604084015167ffffffffffffffff8111156200042157600080fd5b6200042f868287016200036b565b9150509250925092565b6000620004468262000514565b6200045281856200051f565b93506200046481856020860162000530565b6200046f8162000630565b840191505092915050565b6000604082019050818103600083015262000496818562000439565b90508181036020830152620004ac818462000439565b90509392505050565b6000620004c1620004d4565b9050620004cf82826200059c565b919050565b6000604051905090565b600067ffffffffffffffff821115620004fc57620004fb62000601565b5b620005078262000630565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200055057808201518184015260208101905062000533565b8381111562000560576000848401525b50505050565b600060028204905060018216806200057f57607f821691505b60208210811415620005965762000595620005d2565b5b50919050565b620005a78262000630565b810181811067ffffffffffffffff82111715620005c957620005c862000601565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61092d80620006516000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630ee2cb101461006757806317d7de7c14610085578063511c2287146100a3578063715018a6146100c15780638da5cb5b146100cb578063f2fde38b146100e9575b600080fd5b61006f610105565b60405161007c91906106dc565b60405180910390f35b61008d610197565b60405161009a91906106dc565b60405180910390f35b6100ab610229565b6040516100b891906106dc565b60405180910390f35b6100c96102bb565b005b6100d3610343565b6040516100e091906106c1565b60405180910390f35b61010360048036038101906100fe919061060a565b61036c565b005b606060038054610114906107f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610140906107f6565b801561018d5780601f106101625761010080835404028352916020019161018d565b820191906000526020600020905b81548152906001019060200180831161017057829003601f168201915b5050505050905090565b6060600180546101a6906107f6565b80601f01602080910402602001604051908101604052809291908181526020018280546101d2906107f6565b801561021f5780601f106101f45761010080835404028352916020019161021f565b820191906000526020600020905b81548152906001019060200180831161020257829003601f168201915b5050505050905090565b606060028054610238906107f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610264906107f6565b80156102b15780601f10610286576101008083540402835291602001916102b1565b820191906000526020600020905b81548152906001019060200180831161029457829003601f168201915b5050505050905090565b6102c3610500565b73ffffffffffffffffffffffffffffffffffffffff166102e1610343565b73ffffffffffffffffffffffffffffffffffffffff1614610337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032e90610755565b60405180910390fd5b6103416000610508565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610374610500565b73ffffffffffffffffffffffffffffffffffffffff16610392610343565b73ffffffffffffffffffffffffffffffffffffffff16146103e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103df90610755565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044f90610735565b60405180910390fd5b61046181610508565b50565b6104fc828260405160240161047a9291906106fe565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105cc565b5050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081359050610604816108e0565b92915050565b60006020828403121561061c57600080fd5b600061062a848285016105f5565b91505092915050565b61063c81610791565b82525050565b600061064d82610775565b6106578185610780565b93506106678185602086016107c3565b61067081610857565b840191505092915050565b6000610688602683610780565b915061069382610868565b604082019050919050565b60006106ab602083610780565b91506106b6826108b7565b602082019050919050565b60006020820190506106d66000830184610633565b92915050565b600060208201905081810360008301526106f68184610642565b905092915050565b600060408201905081810360008301526107188185610642565b9050818103602083015261072c8184610642565b90509392505050565b6000602082019050818103600083015261074e8161067b565b9050919050565b6000602082019050818103600083015261076e8161069e565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061079c826107a3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156107e15780820151818401526020810190506107c6565b838111156107f0576000848401525b50505050565b6000600282049050600182168061080e57607f821691505b6020821081141561082257610821610828565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6108e981610791565b81146108f457600080fd5b5056fea26469706673582212207e92e9a86155fbbe8d1ce2fcd58a0ea18977b7cc3aab607ef08cbfb247e55d4a64736f6c634300080400334465706c6f79696e6720612054686574614d6f6d656e7420636f6e74726163742077697468206e616d653a",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100625760003560e01c80630ee2cb101461006757806317d7de7c14610085578063511c2287146100a3578063715018a6146100c15780638da5cb5b146100cb578063f2fde38b146100e9575b600080fd5b61006f610105565b60405161007c91906106dc565b60405180910390f35b61008d610197565b60405161009a91906106dc565b60405180910390f35b6100ab610229565b6040516100b891906106dc565b60405180910390f35b6100c96102bb565b005b6100d3610343565b6040516100e091906106c1565b60405180910390f35b61010360048036038101906100fe919061060a565b61036c565b005b606060038054610114906107f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610140906107f6565b801561018d5780601f106101625761010080835404028352916020019161018d565b820191906000526020600020905b81548152906001019060200180831161017057829003601f168201915b5050505050905090565b6060600180546101a6906107f6565b80601f01602080910402602001604051908101604052809291908181526020018280546101d2906107f6565b801561021f5780601f106101f45761010080835404028352916020019161021f565b820191906000526020600020905b81548152906001019060200180831161020257829003601f168201915b5050505050905090565b606060028054610238906107f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610264906107f6565b80156102b15780601f10610286576101008083540402835291602001916102b1565b820191906000526020600020905b81548152906001019060200180831161029457829003601f168201915b5050505050905090565b6102c3610500565b73ffffffffffffffffffffffffffffffffffffffff166102e1610343565b73ffffffffffffffffffffffffffffffffffffffff1614610337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032e90610755565b60405180910390fd5b6103416000610508565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610374610500565b73ffffffffffffffffffffffffffffffffffffffff16610392610343565b73ffffffffffffffffffffffffffffffffffffffff16146103e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103df90610755565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044f90610735565b60405180910390fd5b61046181610508565b50565b6104fc828260405160240161047a9291906106fe565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105cc565b5050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081359050610604816108e0565b92915050565b60006020828403121561061c57600080fd5b600061062a848285016105f5565b91505092915050565b61063c81610791565b82525050565b600061064d82610775565b6106578185610780565b93506106678185602086016107c3565b61067081610857565b840191505092915050565b6000610688602683610780565b915061069382610868565b604082019050919050565b60006106ab602083610780565b91506106b6826108b7565b602082019050919050565b60006020820190506106d66000830184610633565b92915050565b600060208201905081810360008301526106f68184610642565b905092915050565b600060408201905081810360008301526107188185610642565b9050818103602083015261072c8184610642565b90509392505050565b6000602082019050818103600083015261074e8161067b565b9050919050565b6000602082019050818103600083015261076e8161069e565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061079c826107a3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156107e15780820151818401526020810190506107c6565b838111156107f0576000848401525b50505050565b6000600282049050600182168061080e57607f821691505b6020821081141561082257610821610828565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6108e981610791565b81146108f457600080fd5b5056fea26469706673582212207e92e9a86155fbbe8d1ce2fcd58a0ea18977b7cc3aab607ef08cbfb247e55d4a64736f6c63430008040033",
  immutableReferences: {},
  generatedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:4698:5",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "102:259:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "112:75:5",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "179:6:5",
                          },
                        ],
                        functionName: {
                          name: "array_allocation_size_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "137:41:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "137:49:5",
                      },
                    ],
                    functionName: {
                      name: "allocate_memory",
                      nodeType: "YulIdentifier",
                      src: "121:15:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "121:66:5",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "112:5:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "203:5:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "210:6:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "196:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "196:21:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "196:21:5",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "226:27:5",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "241:5:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "248:4:5",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "237:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "237:16:5",
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "230:3:5",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "291:16:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "300:1:5",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "303:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "293:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "293:12:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "293:12:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "272:3:5",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "277:6:5",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "268:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "268:16:5",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "286:3:5",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "265:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "265:25:5",
                  },
                  nodeType: "YulIf",
                  src: "262:2:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "338:3:5",
                      },
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "343:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "348:6:5",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "316:21:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "316:39:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "316:39:5",
                },
              ],
            },
            name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "75:3:5",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "80:6:5",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "88:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "96:5:5",
                type: "",
              },
            ],
            src: "7:354:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "454:215:5",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "503:16:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "512:1:5",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "515:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "505:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "505:12:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "505:12:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "482:6:5",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "490:4:5",
                                type: "",
                                value: "0x1f",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "478:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "478:17:5",
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "497:3:5",
                          },
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "474:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "474:27:5",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "467:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "467:35:5",
                  },
                  nodeType: "YulIf",
                  src: "464:2:5",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "528:27:5",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "548:6:5",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "542:5:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "542:13:5",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "532:6:5",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "564:99:5",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "636:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "644:4:5",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "632:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "632:17:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "651:6:5",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "659:3:5",
                      },
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                      nodeType: "YulIdentifier",
                      src: "573:58:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "573:90:5",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "564:5:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_t_string_memory_ptr_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "432:6:5",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "440:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "448:5:5",
                type: "",
              },
            ],
            src: "381:288:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "816:773:5",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "862:16:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "871:1:5",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "874:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "864:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "864:12:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "864:12:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "837:7:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "846:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "833:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "833:23:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "858:2:5",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "829:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "829:32:5",
                  },
                  nodeType: "YulIf",
                  src: "826:2:5",
                },
                {
                  nodeType: "YulBlock",
                  src: "888:224:5",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "903:38:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "927:9:5",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "938:1:5",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "923:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "923:17:5",
                          },
                        ],
                        functionName: {
                          name: "mload",
                          nodeType: "YulIdentifier",
                          src: "917:5:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "917:24:5",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "907:6:5",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "988:16:5",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "997:1:5",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1000:1:5",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "990:6:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "990:12:5",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "990:12:5",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "960:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "968:18:5",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "957:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "957:30:5",
                      },
                      nodeType: "YulIf",
                      src: "954:2:5",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1018:84:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1074:9:5",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1085:6:5",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1070:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1070:22:5",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1094:7:5",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "1028:41:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1028:74:5",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1018:6:5",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "1122:225:5",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1137:39:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1161:9:5",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1172:2:5",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1157:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1157:18:5",
                          },
                        ],
                        functionName: {
                          name: "mload",
                          nodeType: "YulIdentifier",
                          src: "1151:5:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1151:25:5",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1141:6:5",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1223:16:5",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1232:1:5",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1235:1:5",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1225:6:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1225:12:5",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1225:12:5",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1195:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1203:18:5",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1192:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1192:30:5",
                      },
                      nodeType: "YulIf",
                      src: "1189:2:5",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1253:84:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1309:9:5",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1320:6:5",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1305:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1305:22:5",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1329:7:5",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "1263:41:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1263:74:5",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "1253:6:5",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "1357:225:5",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1372:39:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1396:9:5",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1407:2:5",
                                type: "",
                                value: "64",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1392:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1392:18:5",
                          },
                        ],
                        functionName: {
                          name: "mload",
                          nodeType: "YulIdentifier",
                          src: "1386:5:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1386:25:5",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1376:6:5",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1458:16:5",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1467:1:5",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1470:1:5",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1460:6:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1460:12:5",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1460:12:5",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1430:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1438:18:5",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1427:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1427:30:5",
                      },
                      nodeType: "YulIf",
                      src: "1424:2:5",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1488:84:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1544:9:5",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1555:6:5",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1540:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1540:22:5",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1564:7:5",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "1498:41:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1498:74:5",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "1488:6:5",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_string_memory_ptr_fromMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "770:9:5",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "781:7:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "793:6:5",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "801:6:5",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "809:6:5",
                type: "",
              },
            ],
            src: "675:914:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1687:272:5",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1697:53:5",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1744:5:5",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "1711:32:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1711:39:5",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "1701:6:5",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1759:78:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1825:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1830:6:5",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1766:58:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1766:71:5",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "1759:3:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1872:5:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1879:4:5",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1868:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1868:16:5",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1886:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1891:6:5",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "1846:21:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1846:52:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1846:52:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1907:46:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1918:3:5",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1945:6:5",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "1923:21:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1923:29:5",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1914:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1914:39:5",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "1907:3:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1668:5:5",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1675:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "1683:3:5",
                type: "",
              },
            ],
            src: "1595:364:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2131:348:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2141:26:5",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2153:9:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2164:2:5",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2149:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2149:18:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2141:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2188:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2199:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2184:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2184:17:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2207:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2213:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2203:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2203:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2177:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2177:47:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2177:47:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2233:86:5",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "2305:6:5",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2314:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2241:63:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2241:78:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2233:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2340:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2351:2:5",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2336:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2336:18:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2360:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2366:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2356:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2356:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2329:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2329:48:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2329:48:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2386:86:5",
                  value: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "2458:6:5",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2467:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2394:63:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2394:78:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2386:4:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2095:9:5",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2107:6:5",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2115:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2126:4:5",
                type: "",
              },
            ],
            src: "1965:514:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2526:88:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2536:30:5",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "allocate_unbounded",
                      nodeType: "YulIdentifier",
                      src: "2546:18:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2546:20:5",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "2536:6:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "2595:6:5",
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "2603:4:5",
                      },
                    ],
                    functionName: {
                      name: "finalize_allocation",
                      nodeType: "YulIdentifier",
                      src: "2575:19:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2575:33:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2575:33:5",
                },
              ],
            },
            name: "allocate_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "2510:4:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "2519:6:5",
                type: "",
              },
            ],
            src: "2485:129:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2660:35:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2670:19:5",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2686:2:5",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "2680:5:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2680:9:5",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "2670:6:5",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "2653:6:5",
                type: "",
              },
            ],
            src: "2620:75:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2768:241:5",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2873:22:5",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "2875:16:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2875:18:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2875:18:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2845:6:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2853:18:5",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2842:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2842:30:5",
                  },
                  nodeType: "YulIf",
                  src: "2839:2:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2905:37:5",
                  value: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2935:6:5",
                      },
                    ],
                    functionName: {
                      name: "round_up_to_mul_of_32",
                      nodeType: "YulIdentifier",
                      src: "2913:21:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2913:29:5",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "2905:4:5",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "2979:23:5",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "2991:4:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2997:4:5",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2987:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2987:15:5",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "2979:4:5",
                    },
                  ],
                },
              ],
            },
            name: "array_allocation_size_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "2752:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "2763:4:5",
                type: "",
              },
            ],
            src: "2701:308:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3074:40:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3085:22:5",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3101:5:5",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "3095:5:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3095:12:5",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "3085:6:5",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3057:5:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3067:6:5",
                type: "",
              },
            ],
            src: "3015:99:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3216:73:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3233:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3238:6:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3226:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3226:19:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3226:19:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3254:29:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3273:3:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3278:4:5",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3269:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3269:14:5",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "3254:11:5",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3188:3:5",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3193:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "3204:11:5",
                type: "",
              },
            ],
            src: "3120:169:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3344:258:5",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3354:10:5",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "3363:1:5",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "3358:1:5",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3423:63:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "3448:3:5",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "3453:1:5",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3444:3:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3444:11:5",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "3467:3:5",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "3472:1:5",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "3463:3:5",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3463:11:5",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "3457:5:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3457:18:5",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3437:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3437:39:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3437:39:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "3384:1:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3387:6:5",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "3381:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3381:13:5",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "3395:19:5",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "3397:15:5",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "3406:1:5",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3409:2:5",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "3402:3:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3402:10:5",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "3397:1:5",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "3377:3:5",
                    statements: [],
                  },
                  src: "3373:113:5",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3520:76:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "3570:3:5",
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "3575:6:5",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3566:3:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3566:16:5",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3584:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "3559:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3559:27:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3559:27:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "3501:1:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3504:6:5",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "3498:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3498:13:5",
                  },
                  nodeType: "YulIf",
                  src: "3495:2:5",
                },
              ],
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3326:3:5",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "3331:3:5",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3336:6:5",
                type: "",
              },
            ],
            src: "3295:307:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3659:269:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3669:22:5",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3683:4:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3689:1:5",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "3679:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3679:12:5",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "3669:6:5",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3700:38:5",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3730:4:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3736:1:5",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "3726:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3726:12:5",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "3704:18:5",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3777:51:5",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "3791:27:5",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "3805:6:5",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3813:4:5",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "3801:3:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3801:17:5",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3791:6:5",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "3757:18:5",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "3750:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3750:26:5",
                  },
                  nodeType: "YulIf",
                  src: "3747:2:5",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3880:42:5",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "3894:16:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3894:18:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3894:18:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "3844:18:5",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3867:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3875:2:5",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "3864:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3864:14:5",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "3841:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3841:38:5",
                  },
                  nodeType: "YulIf",
                  src: "3838:2:5",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "3643:4:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3652:6:5",
                type: "",
              },
            ],
            src: "3608:320:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3977:238:5",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3987:58:5",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "4009:6:5",
                      },
                      {
                        arguments: [
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "4039:4:5",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "4017:21:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4017:27:5",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4005:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4005:40:5",
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "3991:10:5",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4156:22:5",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4158:16:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4158:18:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4158:18:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4099:10:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4111:18:5",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "4096:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4096:34:5",
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4135:10:5",
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "4147:6:5",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "4132:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4132:22:5",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "4093:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4093:62:5",
                  },
                  nodeType: "YulIf",
                  src: "4090:2:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4194:2:5",
                        type: "",
                        value: "64",
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "4198:10:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4187:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4187:22:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4187:22:5",
                },
              ],
            },
            name: "finalize_allocation",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "3963:6:5",
                type: "",
              },
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "3971:4:5",
                type: "",
              },
            ],
            src: "3934:281:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4249:152:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4266:1:5",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4269:77:5",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4259:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4259:88:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4259:88:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4363:1:5",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4366:4:5",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4356:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4356:15:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4356:15:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4387:1:5",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4390:4:5",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4380:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4380:15:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4380:15:5",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "4221:180:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4435:152:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4452:1:5",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4455:77:5",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4445:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4445:88:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4445:88:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4549:1:5",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4552:4:5",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4542:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4542:15:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4542:15:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4573:1:5",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4576:4:5",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4566:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4566:15:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4566:15:5",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "4407:180:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4641:54:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4651:38:5",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "4669:5:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4676:2:5",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4665:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4665:14:5",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4685:2:5",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "4681:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4681:7:5",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4661:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4661:28:5",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "4651:6:5",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4624:5:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "4634:6:5",
                type: "",
              },
            ],
            src: "4593:102:5",
          },
        ],
      },
      contents:
        "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value2 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n}\n",
      id: 5,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:5566:5",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "59:87:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "69:29:5",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "91:6:5",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "78:12:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "78:20:5",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "69:5:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "134:5:5",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_address",
                      nodeType: "YulIdentifier",
                      src: "107:26:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "107:33:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "107:33:5",
                },
              ],
            },
            name: "abi_decode_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "37:6:5",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "45:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "53:5:5",
                type: "",
              },
            ],
            src: "7:139:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "218:196:5",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "264:16:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "273:1:5",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "276:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "266:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "266:12:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "266:12:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "239:7:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "248:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "235:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "235:23:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "260:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "231:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "231:32:5",
                  },
                  nodeType: "YulIf",
                  src: "228:2:5",
                },
                {
                  nodeType: "YulBlock",
                  src: "290:117:5",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "305:15:5",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "319:1:5",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "309:6:5",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "334:63:5",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "369:9:5",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "380:6:5",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "365:3:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "365:22:5",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "389:7:5",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "344:20:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "344:53:5",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "334:6:5",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "188:9:5",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "199:7:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "211:6:5",
                type: "",
              },
            ],
            src: "152:262:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "485:53:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "502:3:5",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "525:5:5",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_address",
                          nodeType: "YulIdentifier",
                          src: "507:17:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "507:24:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "495:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "495:37:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "495:37:5",
                },
              ],
            },
            name: "abi_encode_t_address_to_t_address_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "473:5:5",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "480:3:5",
                type: "",
              },
            ],
            src: "420:118:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "636:272:5",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "646:53:5",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "693:5:5",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "660:32:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "660:39:5",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "650:6:5",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "708:78:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "774:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "779:6:5",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "715:58:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "715:71:5",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "708:3:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "821:5:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "828:4:5",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "817:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "817:16:5",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "835:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "840:6:5",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "795:21:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "795:52:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "795:52:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "856:46:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "867:3:5",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "894:6:5",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "872:21:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "872:29:5",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "863:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "863:39:5",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "856:3:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "617:5:5",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "624:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "632:3:5",
                type: "",
              },
            ],
            src: "544:364:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1060:220:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1070:74:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1136:3:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1141:2:5",
                        type: "",
                        value: "38",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1077:58:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1077:67:5",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "1070:3:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1242:3:5",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      nodeType: "YulIdentifier",
                      src: "1153:88:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1153:93:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1153:93:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1255:19:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1266:3:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1271:2:5",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1262:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1262:12:5",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "1255:3:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1048:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "1056:3:5",
                type: "",
              },
            ],
            src: "914:366:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1432:220:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1442:74:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1508:3:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1513:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1449:58:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1449:67:5",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "1442:3:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1614:3:5",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      nodeType: "YulIdentifier",
                      src: "1525:88:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1525:93:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1525:93:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1627:19:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1638:3:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1643:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1634:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1634:12:5",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "1627:3:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1420:3:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "1428:3:5",
                type: "",
              },
            ],
            src: "1286:366:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1756:124:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1766:26:5",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1778:9:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1789:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1774:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1774:18:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1766:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1846:6:5",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1859:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1870:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1855:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1855:17:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1802:43:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1802:71:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1802:71:5",
                },
              ],
            },
            name: "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1728:9:5",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1740:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1751:4:5",
                type: "",
              },
            ],
            src: "1658:222:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2004:195:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2014:26:5",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2026:9:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2037:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2022:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2022:18:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2014:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2061:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2072:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2057:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2057:17:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2080:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2086:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2076:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2076:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2050:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2050:47:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2050:47:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2106:86:5",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "2178:6:5",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2187:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2114:63:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2114:78:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2106:4:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1976:9:5",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1988:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1999:4:5",
                type: "",
              },
            ],
            src: "1886:313:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2371:348:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2381:26:5",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2393:9:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2404:2:5",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2389:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2389:18:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2381:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2428:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2439:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2424:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2424:17:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2447:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2453:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2443:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2443:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2417:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2417:47:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2417:47:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2473:86:5",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "2545:6:5",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2554:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2481:63:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2481:78:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2473:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2580:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2591:2:5",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2576:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2576:18:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2600:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2606:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2596:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2596:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2569:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2569:48:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2569:48:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2626:86:5",
                  value: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "2698:6:5",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2707:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2634:63:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2634:78:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2626:4:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2335:9:5",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2347:6:5",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2355:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2366:4:5",
                type: "",
              },
            ],
            src: "2205:514:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2896:248:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2906:26:5",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2918:9:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2929:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2914:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2914:18:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2906:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2953:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2964:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2949:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2949:17:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2972:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2978:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2968:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2968:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2942:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2942:47:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2942:47:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2998:139:5",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3132:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3006:124:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3006:131:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2998:4:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2876:9:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2891:4:5",
                type: "",
              },
            ],
            src: "2725:419:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3321:248:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3331:26:5",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3343:9:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3354:2:5",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3339:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3339:18:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3331:4:5",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3378:9:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3389:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3374:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3374:17:5",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "3397:4:5",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3403:9:5",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3393:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3393:20:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3367:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3367:47:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3367:47:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3423:139:5",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3557:4:5",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3431:124:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3431:131:5",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3423:4:5",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3301:9:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3316:4:5",
                type: "",
              },
            ],
            src: "3150:419:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3634:40:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3645:22:5",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3661:5:5",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "3655:5:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3655:12:5",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "3645:6:5",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3617:5:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3627:6:5",
                type: "",
              },
            ],
            src: "3575:99:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3776:73:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3793:3:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3798:6:5",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3786:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3786:19:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3786:19:5",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3814:29:5",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3833:3:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3838:4:5",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3829:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3829:14:5",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "3814:11:5",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3748:3:5",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3753:6:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "3764:11:5",
                type: "",
              },
            ],
            src: "3680:169:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3900:51:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3910:35:5",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3939:5:5",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "3921:17:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3921:24:5",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "3910:7:5",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3882:5:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "3892:7:5",
                type: "",
              },
            ],
            src: "3855:96:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4002:81:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4012:65:5",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "4027:5:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4034:42:5",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4023:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4023:54:5",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "4012:7:5",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3984:5:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "3994:7:5",
                type: "",
              },
            ],
            src: "3957:126:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4138:258:5",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4148:10:5",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "4157:1:5",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "4152:1:5",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4217:63:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "4242:3:5",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "4247:1:5",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4238:3:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4238:11:5",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "4261:3:5",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "4266:1:5",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4257:3:5",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4257:11:5",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "4251:5:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4251:18:5",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "4231:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4231:39:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4231:39:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "4178:1:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4181:6:5",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "4175:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4175:13:5",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "4189:19:5",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "4191:15:5",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "4200:1:5",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4203:2:5",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "4196:3:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4196:10:5",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "4191:1:5",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "4171:3:5",
                    statements: [],
                  },
                  src: "4167:113:5",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4314:76:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "4364:3:5",
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "4369:6:5",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4360:3:5",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4360:16:5",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4378:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "4353:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4353:27:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4353:27:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "4295:1:5",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4298:6:5",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4292:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4292:13:5",
                  },
                  nodeType: "YulIf",
                  src: "4289:2:5",
                },
              ],
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "4120:3:5",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "4125:3:5",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4130:6:5",
                type: "",
              },
            ],
            src: "4089:307:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4453:269:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4463:22:5",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "4477:4:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4483:1:5",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "4473:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4473:12:5",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "4463:6:5",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4494:38:5",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "4524:4:5",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4530:1:5",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4520:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4520:12:5",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "4498:18:5",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4571:51:5",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "4585:27:5",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "4599:6:5",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4607:4:5",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "4595:3:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4595:17:5",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4585:6:5",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "4551:18:5",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "4544:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4544:26:5",
                  },
                  nodeType: "YulIf",
                  src: "4541:2:5",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4674:42:5",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "4688:16:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4688:18:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4688:18:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "4638:18:5",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4661:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4669:2:5",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "4658:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4658:14:5",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "4635:2:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4635:38:5",
                  },
                  nodeType: "YulIf",
                  src: "4632:2:5",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "4437:4:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4446:6:5",
                type: "",
              },
            ],
            src: "4402:320:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4756:152:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4773:1:5",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4776:77:5",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4766:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4766:88:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4766:88:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4870:1:5",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4873:4:5",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4863:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4863:15:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4863:15:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4894:1:5",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4897:4:5",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4887:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4887:15:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4887:15:5",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "4728:180:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4962:54:5",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4972:38:5",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "4990:5:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4997:2:5",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4986:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4986:14:5",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5006:2:5",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "5002:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5002:7:5",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4982:3:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4982:28:5",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "4972:6:5",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4945:5:5",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "4955:6:5",
                type: "",
              },
            ],
            src: "4914:102:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5128:119:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "5150:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5158:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5146:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5146:14:5",
                      },
                      {
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5162:34:5",
                        type: "",
                        value: "Ownable: new owner is the zero a",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5139:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5139:58:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5139:58:5",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "5218:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5226:2:5",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5214:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5214:15:5",
                      },
                      {
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5231:8:5",
                        type: "",
                        value: "ddress",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5207:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5207:33:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5207:33:5",
                },
              ],
            },
            name: "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "5120:6:5",
                type: "",
              },
            ],
            src: "5022:225:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5359:76:5",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "5381:6:5",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5389:1:5",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5377:3:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5377:14:5",
                      },
                      {
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "5393:34:5",
                        type: "",
                        value: "Ownable: caller is not the owner",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5370:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5370:58:5",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5370:58:5",
                },
              ],
            },
            name: "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "5351:6:5",
                type: "",
              },
            ],
            src: "5253:182:5",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5484:79:5",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5541:16:5",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5550:1:5",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5553:1:5",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "5543:6:5",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5543:12:5",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5543:12:5",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5507:5:5",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "5532:5:5",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_address",
                              nodeType: "YulIdentifier",
                              src: "5514:17:5",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5514:24:5",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "5504:2:5",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5504:35:5",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5497:6:5",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5497:43:5",
                  },
                  nodeType: "YulIf",
                  src: "5494:2:5",
                },
              ],
            },
            name: "validator_revert_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5477:5:5",
                type: "",
              },
            ],
            src: "5441:122:5",
          },
        ],
      },
      contents:
        '{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), "Ownable: new owner is the zero a")\n\n        mstore(add(memPtr, 32), "ddress")\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), "Ownable: caller is not the owner")\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n}\n',
      id: 5,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap:
    "146:895:4:-:0;;;496:257;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;593:65:4;;;;;;;;;;;;;;;;;;652:5;593:11;;;;;:65;;:::i;:::-;675:5;668:4;:12;;;;;;;;;;;;:::i;:::-;;701:9;690:8;:20;;;;;;;;;;;;:::i;:::-;;734:12;720:11;:26;;;;;;;;;;;;:::i;:::-;;496:257;;;146:895;;640:96:1;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2270:187;;:::o;6021:141:2:-;6088:70;6150:2;6154;6104:53;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6088:15;;;:70;;:::i;:::-;6021:141;;:::o;176:288::-;240:21;264:7;:14;240:38;;282:22;129:42;282:40;;373:2;364:7;360:16;455:1;452;437:13;423:12;407:14;400:5;389:68;335:126;;;;;:::o;146:895:4:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:354:5:-;96:5;121:66;137:49;179:6;137:49;:::i;:::-;121:66;:::i;:::-;112:75;;210:6;203:5;196:21;248:4;241:5;237:16;286:3;277:6;272:3;268:16;265:25;262:2;;;303:1;300;293:12;262:2;316:39;348:6;343:3;338;316:39;:::i;:::-;102:259;;;;;;:::o;381:288::-;448:5;497:3;490:4;482:6;478:17;474:27;464:2;;515:1;512;505:12;464:2;548:6;542:13;573:90;659:3;651:6;644:4;636:6;632:17;573:90;:::i;:::-;564:99;;454:215;;;;;:::o;675:914::-;793:6;801;809;858:2;846:9;837:7;833:23;829:32;826:2;;;874:1;871;864:12;826:2;938:1;927:9;923:17;917:24;968:18;960:6;957:30;954:2;;;1000:1;997;990:12;954:2;1028:74;1094:7;1085:6;1074:9;1070:22;1028:74;:::i;:::-;1018:84;;888:224;1172:2;1161:9;1157:18;1151:25;1203:18;1195:6;1192:30;1189:2;;;1235:1;1232;1225:12;1189:2;1263:74;1329:7;1320:6;1309:9;1305:22;1263:74;:::i;:::-;1253:84;;1122:225;1407:2;1396:9;1392:18;1386:25;1438:18;1430:6;1427:30;1424:2;;;1470:1;1467;1460:12;1424:2;1498:74;1564:7;1555:6;1544:9;1540:22;1498:74;:::i;:::-;1488:84;;1357:225;816:773;;;;;:::o;1595:364::-;1683:3;1711:39;1744:5;1711:39;:::i;:::-;1766:71;1830:6;1825:3;1766:71;:::i;:::-;1759:78;;1846:52;1891:6;1886:3;1879:4;1872:5;1868:16;1846:52;:::i;:::-;1923:29;1945:6;1923:29;:::i;:::-;1918:3;1914:39;1907:46;;1687:272;;;;;:::o;1965:514::-;2126:4;2164:2;2153:9;2149:18;2141:26;;2213:9;2207:4;2203:20;2199:1;2188:9;2184:17;2177:47;2241:78;2314:4;2305:6;2241:78;:::i;:::-;2233:86;;2366:9;2360:4;2356:20;2351:2;2340:9;2336:18;2329:48;2394:78;2467:4;2458:6;2394:78;:::i;:::-;2386:86;;2131:348;;;;;:::o;2485:129::-;2519:6;2546:20;;:::i;:::-;2536:30;;2575:33;2603:4;2595:6;2575:33;:::i;:::-;2526:88;;;:::o;2620:75::-;2653:6;2686:2;2680:9;2670:19;;2660:35;:::o;2701:308::-;2763:4;2853:18;2845:6;2842:30;2839:2;;;2875:18;;:::i;:::-;2839:2;2913:29;2935:6;2913:29;:::i;:::-;2905:37;;2997:4;2991;2987:15;2979:23;;2768:241;;;:::o;3015:99::-;3067:6;3101:5;3095:12;3085:22;;3074:40;;;:::o;3120:169::-;3204:11;3238:6;3233:3;3226:19;3278:4;3273:3;3269:14;3254:29;;3216:73;;;;:::o;3295:307::-;3363:1;3373:113;3387:6;3384:1;3381:13;3373:113;;;3472:1;3467:3;3463:11;3457:18;3453:1;3448:3;3444:11;3437:39;3409:2;3406:1;3402:10;3397:15;;3373:113;;;3504:6;3501:1;3498:13;3495:2;;;3584:1;3575:6;3570:3;3566:16;3559:27;3495:2;3344:258;;;;:::o;3608:320::-;3652:6;3689:1;3683:4;3679:12;3669:22;;3736:1;3730:4;3726:12;3757:18;3747:2;;3813:4;3805:6;3801:17;3791:27;;3747:2;3875;3867:6;3864:14;3844:18;3841:38;3838:2;;;3894:18;;:::i;:::-;3838:2;3659:269;;;;:::o;3934:281::-;4017:27;4039:4;4017:27;:::i;:::-;4009:6;4005:40;4147:6;4135:10;4132:22;4111:18;4099:10;4096:34;4093:62;4090:2;;;4158:18;;:::i;:::-;4090:2;4198:10;4194:2;4187:22;3977:238;;;:::o;4221:180::-;4269:77;4266:1;4259:88;4366:4;4363:1;4356:15;4390:4;4387:1;4380:15;4407:180;4455:77;4452:1;4445:88;4552:4;4549:1;4542:15;4576:4;4573:1;4566:15;4593:102;4634:6;4685:2;4681:7;4676:2;4669:5;4665:14;4661:28;4651:38;;4641:54;;;:::o;146:895:4:-;;;;;;;",
  deployedSourceMap:
    "146:895:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;848:93;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;759:83;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;947:91;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1668:101:0;;;:::i;:::-;;1036:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1918:198;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;848:93:4;891:13;923:11;916:18;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;848:93;:::o;759:83::-;799:13;831:4;824:11;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;759:83;:::o;947:91::-;991:13;1023:8;1016:15;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:91;:::o;1668:101:0:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;1036:85::-;1082:7;1108:6;;;;;;;;;;;1101:13;;1036:85;:::o;1918:198::-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;2026:1:::1;2006:22;;:8;:22;;;;1998:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;6021:141:2:-;6088:70;6150:2;6154;6104:53;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6088:15;:70::i;:::-;6021:141;;:::o;640:96:1:-;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2270:187;;:::o;176:288:2:-;240:21;264:7;:14;240:38;;282:22;129:42;282:40;;373:2;364:7;360:16;455:1;452;437:13;423:12;407:14;400:5;389:68;335:126;;;;;:::o;7:139:5:-;53:5;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:262::-;211:6;260:2;248:9;239:7;235:23;231:32;228:2;;;276:1;273;266:12;228:2;319:1;344:53;389:7;380:6;369:9;365:22;344:53;:::i;:::-;334:63;;290:117;218:196;;;;:::o;420:118::-;507:24;525:5;507:24;:::i;:::-;502:3;495:37;485:53;;:::o;544:364::-;632:3;660:39;693:5;660:39;:::i;:::-;715:71;779:6;774:3;715:71;:::i;:::-;708:78;;795:52;840:6;835:3;828:4;821:5;817:16;795:52;:::i;:::-;872:29;894:6;872:29;:::i;:::-;867:3;863:39;856:46;;636:272;;;;;:::o;914:366::-;1056:3;1077:67;1141:2;1136:3;1077:67;:::i;:::-;1070:74;;1153:93;1242:3;1153:93;:::i;:::-;1271:2;1266:3;1262:12;1255:19;;1060:220;;;:::o;1286:366::-;1428:3;1449:67;1513:2;1508:3;1449:67;:::i;:::-;1442:74;;1525:93;1614:3;1525:93;:::i;:::-;1643:2;1638:3;1634:12;1627:19;;1432:220;;;:::o;1658:222::-;1751:4;1789:2;1778:9;1774:18;1766:26;;1802:71;1870:1;1859:9;1855:17;1846:6;1802:71;:::i;:::-;1756:124;;;;:::o;1886:313::-;1999:4;2037:2;2026:9;2022:18;2014:26;;2086:9;2080:4;2076:20;2072:1;2061:9;2057:17;2050:47;2114:78;2187:4;2178:6;2114:78;:::i;:::-;2106:86;;2004:195;;;;:::o;2205:514::-;2366:4;2404:2;2393:9;2389:18;2381:26;;2453:9;2447:4;2443:20;2439:1;2428:9;2424:17;2417:47;2481:78;2554:4;2545:6;2481:78;:::i;:::-;2473:86;;2606:9;2600:4;2596:20;2591:2;2580:9;2576:18;2569:48;2634:78;2707:4;2698:6;2634:78;:::i;:::-;2626:86;;2371:348;;;;;:::o;2725:419::-;2891:4;2929:2;2918:9;2914:18;2906:26;;2978:9;2972:4;2968:20;2964:1;2953:9;2949:17;2942:47;3006:131;3132:4;3006:131;:::i;:::-;2998:139;;2896:248;;;:::o;3150:419::-;3316:4;3354:2;3343:9;3339:18;3331:26;;3403:9;3397:4;3393:20;3389:1;3378:9;3374:17;3367:47;3431:131;3557:4;3431:131;:::i;:::-;3423:139;;3321:248;;;:::o;3575:99::-;3627:6;3661:5;3655:12;3645:22;;3634:40;;;:::o;3680:169::-;3764:11;3798:6;3793:3;3786:19;3838:4;3833:3;3829:14;3814:29;;3776:73;;;;:::o;3855:96::-;3892:7;3921:24;3939:5;3921:24;:::i;:::-;3910:35;;3900:51;;;:::o;3957:126::-;3994:7;4034:42;4027:5;4023:54;4012:65;;4002:81;;;:::o;4089:307::-;4157:1;4167:113;4181:6;4178:1;4175:13;4167:113;;;4266:1;4261:3;4257:11;4251:18;4247:1;4242:3;4238:11;4231:39;4203:2;4200:1;4196:10;4191:15;;4167:113;;;4298:6;4295:1;4292:13;4289:2;;;4378:1;4369:6;4364:3;4360:16;4353:27;4289:2;4138:258;;;;:::o;4402:320::-;4446:6;4483:1;4477:4;4473:12;4463:22;;4530:1;4524:4;4520:12;4551:18;4541:2;;4607:4;4599:6;4595:17;4585:27;;4541:2;4669;4661:6;4658:14;4638:18;4635:38;4632:2;;;4688:18;;:::i;:::-;4632:2;4453:269;;;;:::o;4728:180::-;4776:77;4773:1;4766:88;4873:4;4870:1;4863:15;4897:4;4894:1;4887:15;4914:102;4955:6;5006:2;5002:7;4997:2;4990:5;4986:14;4982:28;4972:38;;4962:54;;;:::o;5022:225::-;5162:34;5158:1;5150:6;5146:14;5139:58;5231:8;5226:2;5218:6;5214:15;5207:33;5128:119;:::o;5253:182::-;5393:34;5389:1;5381:6;5377:14;5370:58;5359:76;:::o;5441:122::-;5514:24;5532:5;5514:24;:::i;:::-;5507:5;5504:35;5494:2;;5553:1;5550;5543:12;5494:2;5484:79;:::o",
  source:
    '//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.4;\n\nimport "hardhat/console.sol";\nimport "@openzeppelin/contracts/access/Ownable.sol";\n\ncontract ThetaMoment is Ownable {\n    // A ThetaMoment contract represents digital ownership over a video file produced by a ThetaTV creator.\n    \n    string private name; // Name of the theta video contract / item.\n    string private videoUrl; // Link to the theta NFT video file.\n    string private creatorName; // Theta creator of the video.\n\n    constructor(string memory _name, string memory _videoUrl,  string memory _creatorName) {\n        console.log("Deploying a ThetaMoment contract with name:", _name);\n        name = _name;\n        videoUrl = _videoUrl;\n        creatorName = _creatorName;\n    }\n\n    function getName() public view returns (string memory) {\n        return name;\n    }\n\n    function getCreator() public view returns (string memory) {\n        return creatorName;\n    }\n\n    function getVideoUrl() public view returns (string memory) {\n        return videoUrl;\n    }\n\n}',
  sourcePath:
    "/Users/chrisbuonocore/personal/hackathons/theta22/contracts/contracts/ThetaMoment.sol",
  ast: {
    absolutePath: "project:/contracts/ThetaMoment.sol",
    exportedSymbols: {
      Context: [126],
      Ownable: [104],
      ThetaMoment: [8289],
      console: [8190],
    },
    id: 8290,
    license: "Unlicense",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 8225,
        literals: ["solidity", "^", "0.8", ".4"],
        nodeType: "PragmaDirective",
        src: "37:23:4",
      },
      {
        absolutePath: "hardhat/console.sol",
        file: "hardhat/console.sol",
        id: 8226,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 8290,
        sourceUnit: 8191,
        src: "62:29:4",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath: "@openzeppelin/contracts/access/Ownable.sol",
        file: "@openzeppelin/contracts/access/Ownable.sol",
        id: 8227,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 8290,
        sourceUnit: 105,
        src: "92:52:4",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 8228,
              name: "Ownable",
              nodeType: "IdentifierPath",
              referencedDeclaration: 104,
              src: "170:7:4",
            },
            id: 8229,
            nodeType: "InheritanceSpecifier",
            src: "170:7:4",
          },
        ],
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 8289,
        linearizedBaseContracts: [8289, 104, 126],
        name: "ThetaMoment",
        nameLocation: "155:11:4",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 8231,
            mutability: "mutable",
            name: "name",
            nameLocation: "312:4:4",
            nodeType: "VariableDeclaration",
            scope: 8289,
            src: "297:19:4",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 8230,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "297:6:4",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            id: 8233,
            mutability: "mutable",
            name: "videoUrl",
            nameLocation: "381:8:4",
            nodeType: "VariableDeclaration",
            scope: 8289,
            src: "366:23:4",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 8232,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "366:6:4",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            id: 8235,
            mutability: "mutable",
            name: "creatorName",
            nameLocation: "447:11:4",
            nodeType: "VariableDeclaration",
            scope: 8289,
            src: "432:26:4",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 8234,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "432:6:4",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "private",
          },
          {
            body: {
              id: 8263,
              nodeType: "Block",
              src: "583:170:4",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        hexValue:
                          "4465706c6f79696e6720612054686574614d6f6d656e7420636f6e74726163742077697468206e616d653a",
                        id: 8247,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "605:45:4",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_390f754c7a6f59d9f8001741eb969d0b2caaee0ebe0c1a5dc148ca309df666d4",
                          typeString:
                            'literal_string "Deploying a ThetaMoment contract with name:"',
                        },
                        value: "Deploying a ThetaMoment contract with name:",
                      },
                      {
                        id: 8248,
                        name: "_name",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 8237,
                        src: "652:5:4",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_390f754c7a6f59d9f8001741eb969d0b2caaee0ebe0c1a5dc148ca309df666d4",
                          typeString:
                            'literal_string "Deploying a ThetaMoment contract with name:"',
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      expression: {
                        id: 8244,
                        name: "console",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 8190,
                        src: "593:7:4",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_contract$_console_$8190_$",
                          typeString: "type(library console)",
                        },
                      },
                      id: 8246,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "log",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 851,
                      src: "593:11:4",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,string memory) view",
                      },
                    },
                    id: 8249,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "593:65:4",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 8250,
                  nodeType: "ExpressionStatement",
                  src: "593:65:4",
                },
                {
                  expression: {
                    id: 8253,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 8251,
                      name: "name",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8231,
                      src: "668:4:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 8252,
                      name: "_name",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8237,
                      src: "675:5:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "668:12:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 8254,
                  nodeType: "ExpressionStatement",
                  src: "668:12:4",
                },
                {
                  expression: {
                    id: 8257,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 8255,
                      name: "videoUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8233,
                      src: "690:8:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 8256,
                      name: "_videoUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8239,
                      src: "701:9:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "690:20:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 8258,
                  nodeType: "ExpressionStatement",
                  src: "690:20:4",
                },
                {
                  expression: {
                    id: 8261,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 8259,
                      name: "creatorName",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8235,
                      src: "720:11:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 8260,
                      name: "_creatorName",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8241,
                      src: "734:12:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "720:26:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 8262,
                  nodeType: "ExpressionStatement",
                  src: "720:26:4",
                },
              ],
            },
            id: 8264,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8242,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8237,
                  mutability: "mutable",
                  name: "_name",
                  nameLocation: "522:5:4",
                  nodeType: "VariableDeclaration",
                  scope: 8264,
                  src: "508:19:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8236,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "508:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 8239,
                  mutability: "mutable",
                  name: "_videoUrl",
                  nameLocation: "543:9:4",
                  nodeType: "VariableDeclaration",
                  scope: 8264,
                  src: "529:23:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8238,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "529:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 8241,
                  mutability: "mutable",
                  name: "_creatorName",
                  nameLocation: "569:12:4",
                  nodeType: "VariableDeclaration",
                  scope: 8264,
                  src: "555:26:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8240,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "555:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "507:75:4",
            },
            returnParameters: {
              id: 8243,
              nodeType: "ParameterList",
              parameters: [],
              src: "583:0:4",
            },
            scope: 8289,
            src: "496:257:4",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 8271,
              nodeType: "Block",
              src: "814:28:4",
              statements: [
                {
                  expression: {
                    id: 8269,
                    name: "name",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 8231,
                    src: "831:4:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 8268,
                  id: 8270,
                  nodeType: "Return",
                  src: "824:11:4",
                },
              ],
            },
            functionSelector: "17d7de7c",
            id: 8272,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getName",
            nameLocation: "768:7:4",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8265,
              nodeType: "ParameterList",
              parameters: [],
              src: "775:2:4",
            },
            returnParameters: {
              id: 8268,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8267,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 8272,
                  src: "799:13:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8266,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "799:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "798:15:4",
            },
            scope: 8289,
            src: "759:83:4",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 8279,
              nodeType: "Block",
              src: "906:35:4",
              statements: [
                {
                  expression: {
                    id: 8277,
                    name: "creatorName",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 8235,
                    src: "923:11:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 8276,
                  id: 8278,
                  nodeType: "Return",
                  src: "916:18:4",
                },
              ],
            },
            functionSelector: "0ee2cb10",
            id: 8280,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getCreator",
            nameLocation: "857:10:4",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8273,
              nodeType: "ParameterList",
              parameters: [],
              src: "867:2:4",
            },
            returnParameters: {
              id: 8276,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8275,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 8280,
                  src: "891:13:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8274,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "891:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "890:15:4",
            },
            scope: 8289,
            src: "848:93:4",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 8287,
              nodeType: "Block",
              src: "1006:32:4",
              statements: [
                {
                  expression: {
                    id: 8285,
                    name: "videoUrl",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 8233,
                    src: "1023:8:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 8284,
                  id: 8286,
                  nodeType: "Return",
                  src: "1016:15:4",
                },
              ],
            },
            functionSelector: "511c2287",
            id: 8288,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getVideoUrl",
            nameLocation: "956:11:4",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8281,
              nodeType: "ParameterList",
              parameters: [],
              src: "967:2:4",
            },
            returnParameters: {
              id: 8284,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8283,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 8288,
                  src: "991:13:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8282,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "991:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "990:15:4",
            },
            scope: 8289,
            src: "947:91:4",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 8290,
        src: "146:895:4",
        usedErrors: [],
      },
    ],
    src: "37:1004:4",
  },
  legacyAST: {
    absolutePath: "project:/contracts/ThetaMoment.sol",
    exportedSymbols: {
      Context: [126],
      Ownable: [104],
      ThetaMoment: [8289],
      console: [8190],
    },
    id: 8290,
    license: "Unlicense",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 8225,
        literals: ["solidity", "^", "0.8", ".4"],
        nodeType: "PragmaDirective",
        src: "37:23:4",
      },
      {
        absolutePath: "hardhat/console.sol",
        file: "hardhat/console.sol",
        id: 8226,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 8290,
        sourceUnit: 8191,
        src: "62:29:4",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath: "@openzeppelin/contracts/access/Ownable.sol",
        file: "@openzeppelin/contracts/access/Ownable.sol",
        id: 8227,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 8290,
        sourceUnit: 105,
        src: "92:52:4",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 8228,
              name: "Ownable",
              nodeType: "IdentifierPath",
              referencedDeclaration: 104,
              src: "170:7:4",
            },
            id: 8229,
            nodeType: "InheritanceSpecifier",
            src: "170:7:4",
          },
        ],
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 8289,
        linearizedBaseContracts: [8289, 104, 126],
        name: "ThetaMoment",
        nameLocation: "155:11:4",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 8231,
            mutability: "mutable",
            name: "name",
            nameLocation: "312:4:4",
            nodeType: "VariableDeclaration",
            scope: 8289,
            src: "297:19:4",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 8230,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "297:6:4",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            id: 8233,
            mutability: "mutable",
            name: "videoUrl",
            nameLocation: "381:8:4",
            nodeType: "VariableDeclaration",
            scope: 8289,
            src: "366:23:4",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 8232,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "366:6:4",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            id: 8235,
            mutability: "mutable",
            name: "creatorName",
            nameLocation: "447:11:4",
            nodeType: "VariableDeclaration",
            scope: 8289,
            src: "432:26:4",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 8234,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "432:6:4",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "private",
          },
          {
            body: {
              id: 8263,
              nodeType: "Block",
              src: "583:170:4",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        hexValue:
                          "4465706c6f79696e6720612054686574614d6f6d656e7420636f6e74726163742077697468206e616d653a",
                        id: 8247,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "605:45:4",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_390f754c7a6f59d9f8001741eb969d0b2caaee0ebe0c1a5dc148ca309df666d4",
                          typeString:
                            'literal_string "Deploying a ThetaMoment contract with name:"',
                        },
                        value: "Deploying a ThetaMoment contract with name:",
                      },
                      {
                        id: 8248,
                        name: "_name",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 8237,
                        src: "652:5:4",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_stringliteral_390f754c7a6f59d9f8001741eb969d0b2caaee0ebe0c1a5dc148ca309df666d4",
                          typeString:
                            'literal_string "Deploying a ThetaMoment contract with name:"',
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      expression: {
                        id: 8244,
                        name: "console",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 8190,
                        src: "593:7:4",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_contract$_console_$8190_$",
                          typeString: "type(library console)",
                        },
                      },
                      id: 8246,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "log",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 851,
                      src: "593:11:4",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,string memory) view",
                      },
                    },
                    id: 8249,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "593:65:4",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 8250,
                  nodeType: "ExpressionStatement",
                  src: "593:65:4",
                },
                {
                  expression: {
                    id: 8253,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 8251,
                      name: "name",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8231,
                      src: "668:4:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 8252,
                      name: "_name",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8237,
                      src: "675:5:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "668:12:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 8254,
                  nodeType: "ExpressionStatement",
                  src: "668:12:4",
                },
                {
                  expression: {
                    id: 8257,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 8255,
                      name: "videoUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8233,
                      src: "690:8:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 8256,
                      name: "_videoUrl",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8239,
                      src: "701:9:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "690:20:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 8258,
                  nodeType: "ExpressionStatement",
                  src: "690:20:4",
                },
                {
                  expression: {
                    id: 8261,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 8259,
                      name: "creatorName",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8235,
                      src: "720:11:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 8260,
                      name: "_creatorName",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8241,
                      src: "734:12:4",
                      typeDescriptions: {
                        typeIdentifier: "t_string_memory_ptr",
                        typeString: "string memory",
                      },
                    },
                    src: "720:26:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 8262,
                  nodeType: "ExpressionStatement",
                  src: "720:26:4",
                },
              ],
            },
            id: 8264,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8242,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8237,
                  mutability: "mutable",
                  name: "_name",
                  nameLocation: "522:5:4",
                  nodeType: "VariableDeclaration",
                  scope: 8264,
                  src: "508:19:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8236,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "508:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 8239,
                  mutability: "mutable",
                  name: "_videoUrl",
                  nameLocation: "543:9:4",
                  nodeType: "VariableDeclaration",
                  scope: 8264,
                  src: "529:23:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8238,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "529:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 8241,
                  mutability: "mutable",
                  name: "_creatorName",
                  nameLocation: "569:12:4",
                  nodeType: "VariableDeclaration",
                  scope: 8264,
                  src: "555:26:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8240,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "555:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "507:75:4",
            },
            returnParameters: {
              id: 8243,
              nodeType: "ParameterList",
              parameters: [],
              src: "583:0:4",
            },
            scope: 8289,
            src: "496:257:4",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 8271,
              nodeType: "Block",
              src: "814:28:4",
              statements: [
                {
                  expression: {
                    id: 8269,
                    name: "name",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 8231,
                    src: "831:4:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 8268,
                  id: 8270,
                  nodeType: "Return",
                  src: "824:11:4",
                },
              ],
            },
            functionSelector: "17d7de7c",
            id: 8272,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getName",
            nameLocation: "768:7:4",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8265,
              nodeType: "ParameterList",
              parameters: [],
              src: "775:2:4",
            },
            returnParameters: {
              id: 8268,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8267,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 8272,
                  src: "799:13:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8266,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "799:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "798:15:4",
            },
            scope: 8289,
            src: "759:83:4",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 8279,
              nodeType: "Block",
              src: "906:35:4",
              statements: [
                {
                  expression: {
                    id: 8277,
                    name: "creatorName",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 8235,
                    src: "923:11:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 8276,
                  id: 8278,
                  nodeType: "Return",
                  src: "916:18:4",
                },
              ],
            },
            functionSelector: "0ee2cb10",
            id: 8280,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getCreator",
            nameLocation: "857:10:4",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8273,
              nodeType: "ParameterList",
              parameters: [],
              src: "867:2:4",
            },
            returnParameters: {
              id: 8276,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8275,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 8280,
                  src: "891:13:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8274,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "891:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "890:15:4",
            },
            scope: 8289,
            src: "848:93:4",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 8287,
              nodeType: "Block",
              src: "1006:32:4",
              statements: [
                {
                  expression: {
                    id: 8285,
                    name: "videoUrl",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 8233,
                    src: "1023:8:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 8284,
                  id: 8286,
                  nodeType: "Return",
                  src: "1016:15:4",
                },
              ],
            },
            functionSelector: "511c2287",
            id: 8288,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getVideoUrl",
            nameLocation: "956:11:4",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 8281,
              nodeType: "ParameterList",
              parameters: [],
              src: "967:2:4",
            },
            returnParameters: {
              id: 8284,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 8283,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 8288,
                  src: "991:13:4",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 8282,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "991:6:4",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "990:15:4",
            },
            scope: 8289,
            src: "947:91:4",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 8290,
        src: "146:895:4",
        usedErrors: [],
      },
    ],
    src: "37:1004:4",
  },
  compiler: {
    name: "solc",
    version: "0.8.4+commit.c7e474f2.Emscripten.clang",
  },
  networks: {},
  schemaVersion: "3.4.6",
  updatedAt: "2022-03-21T01:11:51.524Z",
  devdoc: {
    kind: "dev",
    methods: {
      "owner()": {
        details: "Returns the address of the current owner.",
      },
      "renounceOwnership()": {
        details:
          "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.",
      },
      "transferOwnership(address)": {
        details:
          "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
      },
    },
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};
