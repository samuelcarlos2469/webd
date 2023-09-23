let n1 = 20;
let n2 = 24;
let r = 0;

while (n2 != 0) {
  r = n1 % n2;
  n1 = n2;
  n2 = r;
}
