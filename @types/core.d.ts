type DefaultObjectShapeT = Record<string, unknown>;
type ValueOf<O extends DefaultObjectShapeT = DefaultObjectShapeT> = O[keyof O];
type TODO<T = any> = T;
type DateISOStringT = string;
type I18nStringT = string;
type DateISOShortStringT = string;
type InterfaceToType<T extends object> = {
  [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P] | null;
};
