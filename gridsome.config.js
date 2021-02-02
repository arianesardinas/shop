// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',

  plugins: [
    {

      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFULL_SPACE, // required
        accessToken: process.env.CONTENTFULL_CONTENTFULL_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      },





    }
  ]
}
