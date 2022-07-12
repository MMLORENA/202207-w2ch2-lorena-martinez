const strictEquals = function (a, b) {
  if (Object.is(a, b)) {
    if (isNaN(a) && isNaN(b)) {
      return false;
    }
  } else {
    if (Object.is(a, 0) && Object.is(b, -0)) {
      return true;
    }
    if (Object.is(a, -0) && Object.is(b, 0)) {
      return true;
    }
    return false;
  }
};

strictEquals(0, -0);
