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
