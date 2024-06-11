const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkle = new MerkleTree(niceList);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof: merkle.getProof(0),
    leaf: niceList[0],
    root: merkle.getRoot()
  });

  console.log({ gift });
}

main();