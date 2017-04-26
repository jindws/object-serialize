export default function(obj) {
  let n = '';
  for (let m in obj) {
    if (n) {
      n += '&';
    }
    n += `${m}=${obj[m]}`;
  }
  return n;
}
