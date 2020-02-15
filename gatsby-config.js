module.exports = {
  siteMetadata: {
    title: `Hanut Singh Gusain | Serial entrepreneur, solutions architect and technology consultant`,
    description: `
    Experienced cloud systems architect, business analyst, team lead and tech entrepreneur. 
    Having worked on projects spanning a wide array of business domains, I am well versed with the latest 
    technologies and platforms such as Node.js, Golang, React, Vuejs, Docker + Kubernetes, 
    AWS/Azure/GCP and mobile app development. I love learning and keeping up with the latest in 
    the ever evolving software landscape. 
    `,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#dd9900`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
