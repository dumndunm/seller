import { generator } from './generator';

generator({
  filePath: 'lib/api/ozon-seller-api/docs/openapi.json',
  fileName: 'generated-ozon-seller-api-definitions.d.ts',
  namespace: 'OzonSellerApiDefinitions',
});
