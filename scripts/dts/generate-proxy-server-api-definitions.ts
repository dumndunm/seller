import { generator } from './generator';

generator({
  filePath: 'lib/api/proxy-server-api/docs/openapi.json',
  fileName: 'generated-proxy-server-api-definitions.d.ts',
  namespace: 'ProxyServerApiDefinitions',
});
