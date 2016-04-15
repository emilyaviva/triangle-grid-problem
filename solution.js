function triangle(n) {
  return (n * (n + 1) / 2);
}

function grid(x, y) {
  if (x <= 0 || y <= 0) {
    return;
  } else {
    if (x > y) {
      return null;
    } else {
       return (triangle(y - 1)) + x;
    }
  }
}

module.exports = grid;

