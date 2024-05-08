import sha1 from 'js-sha1'
import { Base64 } from 'js-base64'

const publicKey = 'qinghuadaxuedianzixiaoyouka'
const magic = 'QHDX'

// 'QHDX' <=> [ 81, 72, 68, 88 ]
function stringToBytes(string) {
  let result = []
  for (let i = 0; i < string.length; ++i) {
    result.push(string.charCodeAt(i))
  }
  return result
}

function bytesToString(array) {
  return String.fromCharCode(...array)
}

// '550e8400-e29b-41d4-a716-446655440000' <=> [ 85, 14, 132, 0, 226, 155, 65, 212, 167, 22, 68, 102, 85, 68, 0, 0 ]
function bytesToStandardUuid(bytes) {
  let result = ''
  for (let i = 0; i < 16; ++i) {
    if (i == 4 || i == 6 || i == 8 || i == 10) {
      result += '-'
    }
    result += bytes[i].toString(16).padStart(2, '0')
  }
  return result
}

function standardUuidToBytes(uuid) {
  let uuidHex = uuid.replace(/-/g, '')
  let result = []
  for (let i = 0; i < 32; i += 2) {
    result.push(parseInt(uuidHex.substring(i, i + 2), 16))
  }
  return result
}

// 1550549847 <=> [ 0, 0, 0, 0, 92, 107, 131, 87 ]
function numberToBytes(x) {
  let result = []
  for (let i = 0; i < 8; ++i) {
    result.push(x % 256)
    x = Math.floor(x / 256)
  }
  return result.reverse()
}

function bytesToNumber(bytes) {
  let result = 0
  for (let byte of bytes) {
    result *= 256
    result += byte
  }
  return result
}

function generateQr(secret, timestamp) {
  let plain = [secret, timestamp.toString(10), publicKey].join(',')
  let digest = sha1.array(plain)
  return base64ToHex(
    Base64.btoa(
      bytesToString(
        [].concat(stringToBytes(magic),
          standardUuidToBytes(secret),
          numberToBytes(timestamp),
          digest
        ))))
}

function parseQr(base64) {
  createPadStartPolyfill()
  if (base64.substring(0, 5) == "THAA:") {
    base64 = base64.substring(5)
  }
  let bytes = stringToBytes(Base64.atob(hexToBase64(base64)))
  if (bytesToString(bytes.slice(0, 4)) != magic) {
    throw '头部不符'
  }
  let secret = bytesToStandardUuid(bytes.slice(4, 4 + 16))
  let timestamp = bytesToNumber(bytes.slice(4 + 16, 4 + 16 + 8))
  let expected = generateQr(secret, timestamp)
  if (expected !== base64) {
    throw '签名校验失败'
  }
  return [secret, timestamp]
}

function createPadStartPolyfill() {
  // https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
  if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0 //truncate if number, or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ')
      if (this.length >= targetLength) {
        return String(this)
      } else {
        targetLength = targetLength - this.length
        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length) //append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(this)
      }
    }
  }
}

function hexToBase64(str) {
  return Base64.btoa(String.fromCharCode.apply(null,
    str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
  );
}

// Base64 to Hex
function base64ToHex(str) {
  for (var i = 0, bin = Base64.atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
    let tmp = bin.charCodeAt(i).toString(16);
    if (tmp.length === 1) tmp = "0" + tmp;
    hex[hex.length] = tmp;
  }
  return hex.join("").toUpperCase();
}

module.exports = { generateQr, parseQr }
