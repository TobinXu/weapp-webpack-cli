import base from './mp-api/base'
import friend from './mp-api/friend'
import donation from './mp-api/donation'
import oAuth from './mp-api/oAuth'
import anniversary from './mp-api/anniversary'
import email from './mp-api/email'

export default {
  ...base,
  ...friend,
  ...donation,
  ...oAuth,
  ...anniversary,
  ...email,
}