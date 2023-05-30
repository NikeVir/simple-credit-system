Title: Development of a Simple Blockchain Credit System

Objective: Design and implement a simple web3 application that showcases your understanding of blockchain technology and smart contract development. The application will demonstrate
a simple credit system using a smart contract deployed on any test network (like Ropsten or Rinkeby).

 Description:

1. *Smart Contract Development*

Account Structure:

a. Each account is represented by an Ethereum address.
The credit balance of each account is stored in a mapping called balances, where the key is the account address, and the value is the credit balance.
Initialization:

b.When the credit system contract is deployed, each account is assigned a default credit balance of 1000 (or any other initial value you choose).
Credit Transfer:

c.The contract includes a function transferCredits that allows accounts to transfer credits to other accounts.
The function takes two parameters: the recipient's account address and the amount of credits to be transferred.
Before executing the transfer, the function checks if the sender has a sufficient credit balance to perform the transfer.
If the sender has enough credits, the specified amount is deducted from their balance and added to the recipient's balance.
Credit Balance Inquiry:

d. The contract includes a function getBalance that allows users to query the credit balance of a given account.
The function takes the account address as a parameter and returns the corresponding credit balance from the balances mapping. 


2. *Smart Contract Deployment*

contract is Deployed on the Ethereum testnet (Ropsten or Rinkeby). In this project i have used Hardhat for this purpose. contract address : 0x42604eC59D8dB5690D2FA8C78F29De90505f77e4
3. *Frontend Integration*

a simple front-end interface is Developed using React Framework:

- Connect to a user's Metamask wallet.
- Display the user's current credit balance (by interacting with the smart contract).
- Allow users to transfer credits to other users (by invoking the appropriate function on the smart contract).
- Handle errors (like if a user tries to send more credits than they have) and provide appropriate user feedback.

Outcome : -
![Screenshot 2023-05-30 100510](https://github.com/NikeVir/simple-credit-system/assets/82455622/d80ad7d2-3595-4295-b160-a519b3566856)
![Screenshot 2023-05-30 100545](https://github.com/NikeVir/simple-credit-system/assets/82455622/40125972-6868-49f3-8663-0490e0879fb1)
![Screenshot 2023-05-30 100730](https://github.com/NikeVir/simple-credit-system/assets/82455622/8f165199-ff25-46a7-a5e6-95c5cd10939d)
![Screenshot 2023-05-30 100819](https://github.com/NikeVir/simple-credit-system/assets/82455622/17df6fa9-6ce2-4ee0-837a-d93f075d173f)
![Screenshot 2023-05-30 100900](https://github.com/NikeVir/simple-credit-system/assets/82455622/4908c3ea-cffd-4c93-9ac4-54ef637e16c1)

