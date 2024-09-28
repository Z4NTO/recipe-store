export function objectDeepEquals(objectOne: unknown, objectTwo: unknown) {
  const referenceStackX: unknown[] = [];
  const referenceStackY: unknown[] = [];

  function recursiveEquals(x: unknown, y: unknown) {
    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (
      typeof x === "number" &&
      typeof y === "number" &&
      isNaN(x) &&
      isNaN(y)
    ) {
      return true;
    }

    // Compare primitives and functions.
    // Check if both arguments link to the same object.
    if (x === y) {
      return true;
    }

    if (
      (typeof x === "function" && typeof y === "function") ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString();
    }

    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    // Check for infinitive linking loops
    if (referenceStackX.includes(x) || referenceStackY.includes(y)) {
      return false;
    }

    referenceStackX.push(x);
    referenceStackY.push(y);

    // Quick checking of one object being a subset of another.
    if (Object.keys(y).some((keyOfY) => !(keyOfY in x))) {
      return false;
    }

    // Recursively compare fields
    if (
      Object.keys(x).some(
        (keyOfX) =>
          !(keyOfX in y) ||
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          typeof x[keyOfX] !== typeof y[keyOfX] ||
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          !recursiveEquals(x[keyOfX], y[keyOfX]),
      )
    ) {
      return false;
    }

    referenceStackX.pop();
    referenceStackY.pop();

    return true;
  }

  return recursiveEquals(objectOne, objectTwo);
}
