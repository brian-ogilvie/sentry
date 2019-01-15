import axios from 'axios'

const SUMMARY_URL = 'https://ssd-api.jpl.nasa.gov/sentry.api?all=1&ip-min=1e-3'

const Sentry = {
  async getSummary() {
    const resp = await axios(SUMMARY_URL)
    return resp.data
  }
}

export default Sentry