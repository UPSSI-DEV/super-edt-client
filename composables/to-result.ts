type Result<T, E> = {
  data: T | null;
  err: E | null;
};

export async function to_res<T>(promise: Promise<T>): Promise<Result<T, any>> {
  const res: Result<T, any> = { data: null, err: null };
  await promise.then((x) => (res.data = x)).catch((e) => (res.err = e.data));

  return res;
}
