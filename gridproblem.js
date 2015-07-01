/*****************

PROBLEM:

Given the following infinitely extended grid:

_________________________________
|     |      |      |      |
|  1  | null | null | null | ...
|_____|______|______|______|_____
|     |      |      |      |
|  2  |  3   | null | null | ...
|_____|______|______|______|_____
|     |      |      |      |
|  4  |  5   |  6   | null | ...
|_____|______|______|______|_____
|     |      |      |      |
|  7  |  8   |  9   |  10  | ...
|_____|______|______|______|_____
|     |      |      |      |
| ... | ...  | ...  | ...  | ...

Write a function that returns the value for any arbitrary cell.

*****************/

/****************

SOLUTION

*****************/

function grid(x, y) {
  if (x <= 0 || y <= 0) {
    return;
  }
  if (x > y) {
    return null;
  } else {
    function triangle(n) {
      return (n * (n + 1) / 2);
    }
    return (triangle(y - 1)) + x;
  }
}
