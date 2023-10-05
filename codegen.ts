import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: [
        {
            './schema.graphql': {
                assumeValid: true,
            },
        },
    ],
    documents: 'queries/**/*.graphql',
    generates: {
        './generated/query_collections.yaml': {
            plugins: ['hasura-allow-list'],
            config: {
                globalFragments: true,
            },
        },
        './generated/typed-document-node.ts': {
            plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
        },
        'generated/typescript-graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
            config: {
                rawRequest: true,
            },
        },
    },
};
export default config;
