module.exports = {
  siteMetadata: {
    title: `Sundae Times Gatsby Starter`,
    description: `It's too cute idk`,
    navLinks: [
      {
        name: "Home",
        slug: "/"
      }
    ]
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
  ]
}
