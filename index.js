const _r = require('axios');

const headers = {
  'accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Basic dTB3ODR1Y2Z4czpjaVVqVGpyNV9nNFk4bm8yTXZFR3M3dUxRYW1LLU5fQXo3SHYzMWIydHFV'
};

async function get() {
  try {
    const res = (await _r.get(
      'https://u0z109b1m2-u0e6xl8ne0-connect.us0-aws.kaleido.io/instances/ss123/get?kld-from=0x0a14954680ed13ae3ddf2b2f31be1721ae5a53f3',
      { headers }
    ));
    console.log(res.data);
  } catch(err) {
    console.error(err);
  }  
}

async function set() {
  try {
    const res = (
      await _r.post(
        'https://u0z109b1m2-u0e6xl8ne0-connect.us0-aws.kaleido.io/instances/ss123/set?kld-from=0x0a14954680ed13ae3ddf2b2f31be1721ae5a53f3',
        { x: "23444" },
        { headers }
    )).data;
    console.log(res);
  } catch(err) {
    console.error(err);
  }  
}

set()
//get()

