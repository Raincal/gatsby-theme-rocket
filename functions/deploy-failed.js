const axios = require('axios')

export async function handler() {
  const url = `https://openapi.daocloud.io/v1/build-flows/${process.env.BUILD_ID}/builds`
  return axios.post(url, {
    headers: {
      'Authorization': `token ${process.env.DAO_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: {
      branch:'master'
    }
  })
}