import TokenService from '../services/token-service'
import config from '../config'

const RegcodeApiService = {
  getRegcode() {
    return fetch(`${config.API_ENDPOINT}/registration`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
    )
  },
  postRegcode(regcode) {
    console.log(regcode)
    return fetch(`${config.API_ENDPOINT}/registration/newregcode`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(regcode),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
    )
  },
}

export default RegcodeApiService
