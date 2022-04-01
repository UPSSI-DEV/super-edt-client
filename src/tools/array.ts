export { arrayEquals };

function arrayEquals(arr1: any[], arr2: any[]) {
  return (
    arr1.length == arr2.length &&
    arr1.sort().every((el, i) => el === arr2.sort()[i])
  );
}
