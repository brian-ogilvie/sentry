import axios from 'axios'

const SUMMARY_URL = 'https://ssd-api.jpl.nasa.gov/sentry.api?all=1&ip-min=1e-3'
const OBJECT_URL = 'https://ssd-api.jpl.nasa.gov/sentry.api?des='

const Sentry = {
  async getData(id) {
    const url = id ? (OBJECT_URL + id.toString()) : SUMMARY_URL
    const resp = await axios(url)
    return resp.data
  }
}

export default Sentry