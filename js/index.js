const strictEquals = function (a, b) {
  if (Object.is(a, b)) {
    if (isNaN(a) && isNaN(b)) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

strictEquals(1, 1);
strictEquals(NaN, NaN);
