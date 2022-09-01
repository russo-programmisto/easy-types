export type Partial<Type> = {
    [Field in keyof Type]?: Type[Field];
}
