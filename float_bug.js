/*
 * Demonstrate JavaScript floating point math bugs by showing
 * which two-decimal-place numbers between 0.00 and 1.00 inclusive
 * have fractional parts after being multiplied by one hundred.
 */
var i = 0.00;

for (n = 0; n <= 100; ++n) {
  j = i * 100;
  if (Math.round(j) != j) {
    console.log(n, 'Multiplication error:', i, j);
  }

  i += 0.01;
  k = i.toPrecision(4);
  if (k != i) {
    console.log(n, 'Addition error:', k, i);
    i = +k;
  }
}

// Results:
/*
5 "Addition error:" "0.06000" 0.060000000000000005
6 "Addition error:" "0.07000" 0.06999999999999999
7 "Multiplication error:" 0.07 7.000000000000001
9 "Addition error:" "0.1000" 0.09999999999999999
14 "Multiplication error:" 0.14 14.000000000000002
14 "Addition error:" "0.1500" 0.15000000000000002
17 "Addition error:" "0.1800" 0.18000000000000002
20 "Addition error:" "0.2100" 0.21000000000000002
23 "Addition error:" "0.2400" 0.24000000000000002
28 "Multiplication error:" 0.28 28.000000000000004
28 "Addition error:" "0.2900" 0.29000000000000004
29 "Multiplication error:" 0.29 28.999999999999996
34 "Addition error:" "0.3500" 0.35000000000000003
40 "Addition error:" "0.4100" 0.41000000000000003
46 "Addition error:" "0.4700" 0.47000000000000003
55 "Multiplication error:" 0.55 55.00000000000001
56 "Multiplication error:" 0.56 56.00000000000001
56 "Addition error:" "0.5700" 0.5700000000000001
57 "Multiplication error:" 0.57 56.99999999999999
58 "Multiplication error:" 0.58 57.99999999999999
68 "Addition error:" "0.6900" 0.6900000000000001
81 "Addition error:" "0.8200" 0.8200000000000001
93 "Addition error:" "0.9400" 0.9400000000000001
*/
