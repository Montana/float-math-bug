# Is Floating Point Math Broken? 

This was inspired by: https://stackoverflow.com/questions/588004/is-floating-point-math-broken

Demonstrated is JavaScript's floating point math bugs by showing which two-decimal-place numbers between `0.00` and `1.00` inclusive have fractional parts after being multiplied by one hundred.

The original version of this program used the floating-point value, i, as the loop counter of the for-loop. Apparently, using a floating-point number, along with a loop final-expression that converted the value to a string and back to a float again in an attempt to carefully increment by 0.01, caused Bad Things to happen. E.g., the loop would run for thousands of iterations rather than exactly one hundred, causing the browser to freeze.

The original code:

```javascript
for (i = 0.00; i <= 1.00; i = +((i + 0.01).toPrecision(2))) {
    // Note the final-expression in the for-loop limits decimal places,
    // overcoming float errors from adding 0.01
    j = i * 100;
    if (Math.round(j) != j) {
        console.log('Multiplcation error:', i, j);
    }
}
```

Changed in the new version:

* Added an integer loop counter, `n`
* Check for floating point addition errors, and if found
  * Display a message
  * Convert the more-precise number from a string back to a float

The last point may be significant, because it avoids converting the float to a string and back to a float again in **every** iteration. This conversion is done only when necessary.
