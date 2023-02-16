import axios from 'axios'
import * as http from 'http'

export async function getProject () {
  const result = await axios.get('http://127.0.0.1:8000/nlux-project')
  return result
}

export async function getBalance () {
  const result = await axios.get('http://127.0.0.1:8000/nlux-balance/0xfA95d8D0267aFf6fA669B93fCCc784afCf316b4f')
  return result
}
