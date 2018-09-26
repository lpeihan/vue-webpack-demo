export function leftpad(str, len, ch = ' ') {
  str = `${str}`;

  for (let i = str.length; i < len; i++) {
    str = ch + str;
  }

  return str;
};


export function noop() {
  console.log('noop');
}

export default {
  a: 1
};