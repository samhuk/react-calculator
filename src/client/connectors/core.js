import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }

const absoluteUrl = relativeUrl => `${window.location.protocol}//${window.location.host}/api/${relativeUrl}`

export const get = (url, headers, responseType = 'json') => ajax({
  url: absoluteUrl(url),
  method: 'GET',
  responseType,
  headers,
}).pipe(map(res => res.response))

export const post = (url, body, headers = DEFAULT_HEADERS) => ajax({
  url: absoluteUrl(url),
  method: 'POST',
  headers,
  body,
}).pipe(map(res => res.response))
