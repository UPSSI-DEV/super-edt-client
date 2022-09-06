/**
 * I wanted to use a Map cuz why not :D
 * Might need optimising in future
 */

export default class Map<K, V> {
  private keys: K[];
  private values: V[];

  constructor() {
    this.keys = [];
    this.values = [];
  }

  public set(key: K, value: V) {
    this.keys.push(key);
    this.values.push(value);
  }

  public get(key: K): V {
    const index = this.keys.indexOf(key);
    return this.values[index];
  }

  public isKey(key: K): boolean {
    return this.keys.includes(key);
  }

  public keySet(): K[] {
    return this.keys;
  }
}
