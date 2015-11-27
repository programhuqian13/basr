/**
 * @file 对象扩展
 * @author treelite(c.xinle@gmail.com)
 */

'use strict';

/**
 * 对象属性拷贝
 *
 * @param {Object} target 目标对象
 * @param {...Object} source 源对象
 * @return {Object}
 */
export default function (target, ...sources) {
    for (let item of sources) {
        if (!item) {
            continue;
        }
        Object.keys(item).forEach((key) => {
            target[key] = item[key];
        });
    }

    return target;
}
