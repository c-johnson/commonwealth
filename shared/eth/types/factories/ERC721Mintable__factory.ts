/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC721Mintable } from "../ERC721Mintable";

export class ERC721Mintable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Mintable> {
    return super.deploy(overrides || {}) as Promise<ERC721Mintable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Mintable {
    return super.attach(address) as ERC721Mintable;
  }
  connect(signer: Signer): ERC721Mintable__factory {
    return super.connect(signer) as ERC721Mintable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mintable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mintable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600681526518ddd5195cdd60d21b60208083019182528351808501909452600384526210d5d560ea1b9084015281519192916200005b916000916200007a565b508051620000719060019060208401906200007a565b5050506200015d565b828054620000889062000120565b90600052602060002090601f016020900481019282620000ac5760008555620000f7565b82601f10620000c757805160ff1916838001178555620000f7565b82800160010185558215620000f7579182015b82811115620000f7578251825591602001919060010190620000da565b506200010592915062000109565b5090565b5b808211156200010557600081556001016200010a565b600181811c908216806200013557607f821691505b602082108114156200015757634e487b7160e01b600052602260045260246000fd5b50919050565b611407806200016d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb465146101e1578063b88d4fde146101f4578063c87b56dd14610207578063e985e9c51461021a57600080fd5b806370a08231146101a557806395d89b41146101c6578063a0712d68146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806323b872dd1461016c57806342842e0e1461017f5780636352211e1461019257600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004611102565b610256565b60405190151581526020015b60405180910390f35b61011f6102a8565b60405161010e91906111ea565b61013f61013a36600461113a565b61033a565b6040516001600160a01b03909116815260200161010e565b61016a6101653660046110d9565b6103d4565b005b61016a61017a366004610f8f565b6104ea565b61016a61018d366004610f8f565b61051b565b61013f6101a036600461113a565b610536565b6101b86101b3366004610f43565b6105ad565b60405190815260200161010e565b61011f610634565b61016a6101dc36600461113a565b610643565b61016a6101ef36600461109f565b610650565b61016a610202366004610fca565b610715565b61011f61021536600461113a565b61074d565b610102610228366004610f5d565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061028757506001600160e01b03198216635b5e139f60e01b145b806102a257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102b79061130f565b80601f01602080910402602001604051908101604052809291908181526020018280546102e39061130f565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103b85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103df82610536565b9050806001600160a01b0316836001600160a01b0316141561044d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103af565b336001600160a01b038216148061046957506104698133610228565b6104db5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103af565b6104e58383610835565b505050565b6104f433826108a3565b6105105760405162461bcd60e51b81526004016103af9061124f565b6104e583838361099a565b6104e583838360405180602001604052806000815250610715565b6000818152600260205260408120546001600160a01b0316806102a25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103af565b60006001600160a01b0382166106185760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103af565b506001600160a01b031660009081526003602052604090205490565b6060600180546102b79061130f565b61064d3382610b3a565b50565b6001600160a01b0382163314156106a95760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103af565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61071f33836108a3565b61073b5760405162461bcd60e51b81526004016103af9061124f565b61074784848484610b58565b50505050565b6000818152600260205260409020546060906001600160a01b03166107cc5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103af565b60006107e360408051602081019091526000815290565b90506000815111610803576040518060200160405280600081525061082e565b8061080d84610b8b565b60405160200161081e92919061117e565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061086a82610536565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b031661091c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103af565b600061092783610536565b9050806001600160a01b0316846001600160a01b031614806109625750836001600160a01b03166109578461033a565b6001600160a01b0316145b8061099257506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166109ad82610536565b6001600160a01b031614610a155760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016103af565b6001600160a01b038216610a775760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103af565b610a82600082610835565b6001600160a01b0383166000908152600360205260408120805460019290610aab9084906112cc565b90915550506001600160a01b0382166000908152600360205260408120805460019290610ad99084906112a0565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610b54828260405180602001604052806000815250610ca5565b5050565b610b6384848461099a565b610b6f84848484610cd8565b6107475760405162461bcd60e51b81526004016103af906111fd565b606081610baf5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610bd95780610bc38161134a565b9150610bd29050600a836112b8565b9150610bb3565b60008167ffffffffffffffff811115610c0257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c2c576020820181803683370190505b5090505b841561099257610c416001836112cc565b9150610c4e600a86611365565b610c599060306112a0565b60f81b818381518110610c7c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610c9e600a866112b8565b9450610c30565b610caf8383610de5565b610cbc6000848484610cd8565b6104e55760405162461bcd60e51b81526004016103af906111fd565b60006001600160a01b0384163b15610dda57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610d1c9033908990889088906004016111ad565b602060405180830381600087803b158015610d3657600080fd5b505af1925050508015610d66575060408051601f3d908101601f19168201909252610d639181019061111e565b60015b610dc0573d808015610d94576040519150601f19603f3d011682016040523d82523d6000602084013e610d99565b606091505b508051610db85760405162461bcd60e51b81526004016103af906111fd565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610992565b506001949350505050565b6001600160a01b038216610e3b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103af565b6000818152600260205260409020546001600160a01b031615610ea05760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103af565b6001600160a01b0382166000908152600360205260408120805460019290610ec99084906112a0565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80356001600160a01b0381168114610f3e57600080fd5b919050565b600060208284031215610f54578081fd5b61082e82610f27565b60008060408385031215610f6f578081fd5b610f7883610f27565b9150610f8660208401610f27565b90509250929050565b600080600060608486031215610fa3578081fd5b610fac84610f27565b9250610fba60208501610f27565b9150604084013590509250925092565b60008060008060808587031215610fdf578081fd5b610fe885610f27565b9350610ff660208601610f27565b925060408501359150606085013567ffffffffffffffff80821115611019578283fd5b818701915087601f83011261102c578283fd5b81358181111561103e5761103e6113a5565b604051601f8201601f19908116603f01168101908382118183101715611066576110666113a5565b816040528281528a602084870101111561107e578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156110b1578182fd5b6110ba83610f27565b9150602083013580151581146110ce578182fd5b809150509250929050565b600080604083850312156110eb578182fd5b6110f483610f27565b946020939093013593505050565b600060208284031215611113578081fd5b813561082e816113bb565b60006020828403121561112f578081fd5b815161082e816113bb565b60006020828403121561114b578081fd5b5035919050565b6000815180845261116a8160208601602086016112e3565b601f01601f19169290920160200192915050565b600083516111908184602088016112e3565b8351908301906111a48183602088016112e3565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111e090830184611152565b9695505050505050565b60208152600061082e6020830184611152565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156112b3576112b3611379565b500190565b6000826112c7576112c761138f565b500490565b6000828210156112de576112de611379565b500390565b60005b838110156112fe5781810151838201526020016112e6565b838111156107475750506000910152565b600181811c9082168061132357607f821691505b6020821081141561134457634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561135e5761135e611379565b5060010190565b6000826113745761137461138f565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461064d57600080fdfea26469706673582212202eb1ee7aa034e69cc272a0d7ea7f3cb93b5f05d49d7572ca5f44ae93738b538d64736f6c63430008040033";
