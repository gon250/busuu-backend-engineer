declare const _default: (() => {
    postgres: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
    apiKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
