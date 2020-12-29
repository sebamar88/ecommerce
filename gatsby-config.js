require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MDUzMDRiNDUtMjk4MS00MGQzLWE3MDAtY2M4MDYwODIyOGM3NjM3NDQ4MTMwMTMzNzIzODE1',
        autopop: true
      }
    },
  ],
}
