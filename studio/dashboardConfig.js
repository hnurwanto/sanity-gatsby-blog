export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d4a596184c04ca8d126fb2d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-anycfwfy',
                  apiId: '3d688db0-6d3d-4b7b-9094-acf2d1b46aab'
                },
                {
                  buildHookId: '5d4a596184c04c358126fae4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uqpdc4jr',
                  apiId: '2570bc28-9a91-49aa-84b2-6c3053050af5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hnurwanto/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uqpdc4jr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
