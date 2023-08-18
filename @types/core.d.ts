type DefaultObjectShapeT = Record<string, unknown>;
type ValueOf<O extends DefaultObjectShapeT = DefaultObjectShapeT> = O[keyof O];
type TODO<T = any> = T;
type DateISOStringT = string;
