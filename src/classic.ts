export enum ClassicType {
    bigint = "bigint",
    boolean = "boolean",
    function = "function",
    number = "number",
    object = "object",
    string = "string",
    symbol = "symbol",
    undefined = "undefined"
}

export const getClassicType = (obj: any): ClassicType => {
    return typeof obj as ClassicType;
}
