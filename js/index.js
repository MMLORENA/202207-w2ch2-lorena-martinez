const strictEquals = function (a, b) {
  if (Object.is(a, b)) {
    return true;
  } else {
    return false;
  }
};

strictEquals(1, 1);
