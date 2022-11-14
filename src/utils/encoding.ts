function fromHex (hexString: string | undefined): string {
  let s = ''
  if (hexString !== undefined) {
    for (let i = 0; i < hexString.length; i += 2) {
      s += String.fromCharCode(parseInt(hexString.substr(i, 2), 16))
    }
    return decodeURIComponent(escape(s)).replace(/\0/g, '')
  }
  return s
}

function toHex (str: string): string {
  // utf8 to latin1
  const s = unescape(encodeURIComponent(str))
  let h = ''
  for (let i = 0; i < s.length; i++) {
    h += s.charCodeAt(i).toString(16)
  }
  return h
}

function stringToUint8Array (str: string | undefined): Uint8Array {
  if (str !== undefined) {
    const result = new TextEncoder().encode(str)
    return result
  }
  const result = new Uint8Array()
  return result
}

export { fromHex, toHex, stringToUint8Array }
