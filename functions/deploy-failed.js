const axios = require('axios')

axios.defaults.headers.common['Authorization'] =
  `token ${process.env.DAO_TOKEN}`

export async function handler() {
  try {
    const res = await axios.get(
      `https://openapi.daocloud.io/v1/build-flows/${process.env.BUILD_ID}`
    )

    if (res.data.status !== 'Started') {
      return axios.post(
        `https://openapi.daocloud.io/v1/build-flows/${
          process.env.BUILD_ID
        }/builds`,
        {
          data: {
            branch: 'master',
          },
        }
      )
    }
  } catch (error) {
    // eslint-disable-next-line
    console.log(error.response.data)
    return
  }
}
