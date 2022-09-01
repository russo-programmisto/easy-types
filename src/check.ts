import { getType, Type } from "./type";

export const isNullOrUndefined = (obj: any) => {
    return typeof obj === "undefined" || obj === null;
}

/**
 * Checks whether the `obj` is an empty string.
 * @param obj 
 * @returns {boolean} If method returned `true`, it guarantees that the `obj` is an empty string.
 * 
 * When method returns `false`, it doesn't mean that `obj` is string at all.
 * It only means that it's not an **empty string**.
 */
export const isEmptyString = (obj: any) => {
    if (typeof obj === "string") {
        return !obj.length;
    } else {
        return false;
    }
}

/**
 * Checks whether the `obj` is an empty array.
 * @param obj 
 * @returns {boolean} If method returned `true`, it guarantees that the `obj` is an empty array.
 * 
 * When method returns `false`, it doesn't mean that `obj` is array at all.
 * It only means that it's not an **empty array**.
 */
export const isEmptyArray = (obj: any) => {
    if (Array.isArray(obj)) {
        return !obj.length;
    } else {
        return false;
    }
}

/**
 * Checks whether the `obj` is empty (has no keys).
 * @param obj 
 * @returns {boolean} If method returned `true`, it guarantees that the `obj` is empty.
 * 
 * When method returns `false`, it doesn't mean that `obj` is object at all.
 * It only means that it's not an **empty object**.
 */
export const isEmptyObject = (obj: any) => {
    if (getType(obj) === Type.object) {
        return !Object.keys(obj).length;
    }
}

/**
 * Checks whether the `obj` is an empty string, array, or JSON object.
 * @param obj 
 * @returns If method returned `true`, it guarantees that the `obj` is an empty string or empty array or empty object.
 * 
 * When method returns `false`, it doesn't mean anything.
 */
export const isEmpty = (obj: any) => {
    return isEmptyString(obj) || isEmptyArray(obj) || isEmptyObject(obj);
}

export const isType = (obj: any, ...types: Type[]) => {
    const objType = getType(obj);
    return types.includes(objType);
}
