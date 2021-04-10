class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters');
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/characters/${id}`)
  }

  createOneRegister (createChar) {
    return axios.post(this.BASE_URL + '/characters', createChar)
  }

  updateOneRegister (id, updateChar) {
    return axios.patch(this.BASE_URL + `/characters/${id}`, updateChar)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + `/characters/${id}`)
  }
}
