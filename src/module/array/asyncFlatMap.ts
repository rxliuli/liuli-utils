/**
 * 将数组异步压平一层
 * @param arr 数组
 * @param fn 映射函数，将一个元素映射为一个数组
 * @returns 压平一层的数组
 * @deprecated 已废弃，请使用更强大的异步数组 {@link AsyncArray}
 */
export async function asyncFlatMap<T>(
  arr: T[],
  fn: (item: T, index: number, arr: T[]) => Promise<T[]>,
): Promise<T[]> {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(...(await fn(arr[i], i, arr)))
  }
  return res
}
