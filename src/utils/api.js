const baseUrl = 'https://642c00f9208dfe2547253f45.mockapi.io'

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl
  }

  getPizzas() {
    return fetch(`${this._baseUrl}/items`)
      .then(res => this._checkResponse(res))
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } 
    Promise.reject(res.status)
  }
}

const api = new Api(baseUrl)

export { api }