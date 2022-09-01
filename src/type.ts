import { getClassicType, ClassicType } from "./classic";

export enum Type {
    /**
     * Array object.
     */
    array = "array",
    bigint = "bigint",
    boolean = "boolean",
    function = "function",
    number = "number",
    null = "null",
    /**
     * Non-array object.
     */
    object = "object",
    string = "string",
    symbol = "symbol",
    undefined = "undefined"
}

export const getType = (obj: any): Type => {
    const classicType = getClassicType(obj);

    switch (classicType) {
        case ClassicType.bigint: {
            return Type.bigint;
        }
        case ClassicType.boolean: {
            return Type.boolean;
        }
        case ClassicType.function: {
            return Type.function;
        }
        case ClassicType.number: {
            return Type.number;
        }
        case ClassicType.object: {
            if (Array.isArray(obj)) {
                return Type.array;
            } else if (obj === null) {
                return Type.null;
            } else {
                return Type.object;
            }
        }
        case ClassicType.string: {
            return Type.string;
        }
        case ClassicType.symbol: {
            return Type.symbol;
        }
        case ClassicType.undefined: {
            return Type.undefined;
        }
    }
}
