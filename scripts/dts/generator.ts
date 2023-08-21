import fs from 'fs';
import path from 'path';
import { format } from 'prettier';
import { default as dtsgenerator, parseSchema } from 'dtsgenerator';

const asyncPrettify = (content: string) => {
  return format(content, {
    parser: 'typescript',
  });
};

const withNamespace = (namespace: string, content: string) =>
  `declare namespace ${namespace} {${content}}`;

type GeneratorConfigT = {
  filePath: string;
  fileName: string;
  namespace: string;
};

export const generator = (config: GeneratorConfigT) => {
  const filePath = path.join(process.cwd(), config.filePath);
  const fileContent = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  dtsgenerator({
    contents: [parseSchema(JSON.parse(fileContent))],
  })
    .then((content) => asyncPrettify(withNamespace(config.namespace, content)))
    .then((content) => {
      fs.writeFileSync(
        path.join(process.cwd(), '@types', config.fileName),
        content
      );
    });
};
