export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4eea7ba115935b4c74aa50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8rnx3xfu',
                  apiId: '05f3b0bb-9d57-479b-aa7d-fefc4cbe3231'
                },
                {
                  buildHookId: '5e4eea7bf78b215d4002a9e6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5d9vq7nf',
                  apiId: '8e1890cb-fd05-4810-9389-6ba99dba742b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adeviss2/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5d9vq7nf.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
