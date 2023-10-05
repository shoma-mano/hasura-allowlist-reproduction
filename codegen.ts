import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: [
        {
            'http://localhost:8080/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': 'my_admin_secret_key',
                },
            },
        },
    ],
    documents: 'queries/**/*.graphql',
    generates: {
        'metadata/query_collections.yaml': {
            plugins: ['hasura-allow-list'],
            config: {
                globalFragments: true,
            },
        },
    },
};
export default config;
