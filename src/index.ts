import { ClassicType, getClassicType } from "./classic"
import { getType, Type } from "./type"
import { Verificator } from "./verificator"
import { Partial } from "./partial"
import { isNullOrUndefined, isEmptyString, isEmptyArray, isEmptyObject, isEmpty, isType } from "./check"

export {
    ClassicType,
    getClassicType,
    Type,
    getType,
    Verificator,
    Partial,
    isNullOrUndefined,
    isEmptyString,
    isEmptyArray,
    isEmptyObject,
    isEmpty
}

isType({}, Type.array, Type.object)