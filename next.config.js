module.exports = {
  env: {
    NOTION_KEY: 'secret_vvPvjPxDwqx5zvM564Va1UzgRzoMt8aCJhopbuJaeGj',
    NOTION_BLOG_DATABASE_ID: '1a1928b159f74dfebd5c81bf7bb5d856',
    NOTION_PROJECTS_DATABASE_ID: '19c6efbc027243c78dcaed54c8e01b79',
  },
  images: {
    domains: [
      'www.flaticon.com',
      'img.flaticon.com',
      'logos-download.com',
      's3.us-west-2.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/about',
        permanent: true,
      },
    ];
  },
};
