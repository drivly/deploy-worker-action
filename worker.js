// import { json } from 'https://pkg.do/apis.do@0.1.8'
import { json } from 'https://pkg.do/itty-router-extras'

export default {
    fetch: req => json({ hello: 'https://workers.do/api' })
}

