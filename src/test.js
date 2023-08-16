function reverse (n) {
n = String(n);
  const str = n.split('').reverse().join('');
  return parseInt(str);
}

console.log(reverse(-123));
