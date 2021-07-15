function share(x) {
  console.log("share = ", x);
}
function add2(d, e) {
  return d + e;
}
function subtract(d, g) {
  return d - g;
}
function multiply(d, e) {
  return d * e;
}
// share(add2(1,2));
// share(subtract(2,1));
// share(multiply(1,2));
function addWithShare(x, y, z) {
  c = add2(x, y);
  z(c);
}
addWithShare(3, 2, share);
