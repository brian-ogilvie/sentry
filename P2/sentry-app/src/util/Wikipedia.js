import axios from 'axios'

const URL = 'https://en.wikipedia.org/api/rest_v1/page/summary/Sentry_(monitoring_system)'

const Wikipedia = {
  async getSentryInfo() {
    const resp = await axios(URL)
    return resp.data
  }
}

export default Wikipedia