import Map from "./map";

export { partition };

function partition<T>(array: T[], func: (arg: T) => string): Map<string, T[]> {
  const map: Map<string, T[]> = new Map();
  for (const elem of array) {
    const index = func(elem);
    if (!map.isKey(index)) map.set(index, []);
    map.get(index).push(elem);
  }

  return map;
}
