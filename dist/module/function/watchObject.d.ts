/**
 * 深度监听指定对象属性的变化
 * 注：指定对象不能是原始类型，即不可变类型，而且对象本身的引用不能改变，最好使用 const 进行声明
 * @param object 需要监视的对象
 * @param callback 当代理对象发生改变时的回调函数，回调函数有三个参数，分别是对象，修改的 key，修改的 v
 * @returns 返回源对象的一个代理
 */
export declare function watchObject<T extends object>(object: T, callback: (target: T, k: PropertyKey, v: any) => void): object;
//# sourceMappingURL=watchObject.d.ts.map