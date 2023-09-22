export enum HTTPMethodEnum {
  get = 'GET',
  options = 'OPTIONS',
  head = 'HEAD',
  put = 'PUT',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
}

export type RequestHeadersT = Record<string, string>;

export type RequestMockT<R = any> = {
  statusCode?: number;
  response?: R;
};

export type RequestQueryT = Record<
  string,
  string | number | Array<string> | Array<number> | null
>;

export type DefaultRequestShapeT<D = any> = {
  query?: RequestQueryT;
  headers?: RequestHeadersT;
  data?: D;
};

export type RequestT<T extends DefaultRequestShapeT> = T & {
  method: HTTPMethodEnum;
  url: string;
  mock?: RequestMockT;
  timeout?: number;
  credentials?: 'include' | 'omit' | 'same-origin';
};

export type RequestInitT = Omit<RequestInit, 'headers'> & {
  headers?: RequestHeadersT;
};
