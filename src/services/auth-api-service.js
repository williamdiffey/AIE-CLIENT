import config from '../config'
import TokenService from './token-service'
import IdleService from './idle-service'
// import UserContext from '../contexts/UserContext'
// notes - make a seperate helper that is a class comp to update user context
// and then just call it from here

// add a class here and the others should export ok?
// or just fire it off at login function?

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
    )
  },
  postLogin({ user_name, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
      )
      .then((res) => {
        /*
          whenever a user logs in
          1. save the token in local storage
          2. queue auto logout when the user goes idle
          3. queue a call to the refresh endpoint based on the JWT's exp value
        */
        TokenService.saveAuthToken(res.authToken)
        // let user = TokenService.parseJwt(res.authToken)
        // .then(UserContext.setUser('hello'))
        IdleService.regiserIdleTimerResets()
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken()
        })
        return res
      })
  },
  postRefreshToken() {
    return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
      )
      .then((res) => {
        /*
          similar logic to whenever a user logs in, the only differences are:
          - we don't need to queue the idle timers again as the user is already logged in.
          - we'll catch the error here as this refresh is happening behind the scenes
        */
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken()
        })
        return res
      })
      .catch((err) => {
        console.log('refresh token request error')
        console.error(err)
      })
  },
}
export default AuthApiService
