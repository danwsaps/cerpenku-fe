export class BlogEndpoint {
    static {
        Endpoint.setEndpoint({
            baseUrl: 'https://mocki.io',
            version: 'v1',
        });
    }

    public static readonly BLOG = Endpoint.getPath('68b15279-8315-451b-a3ad-972840bffb1f');
}
