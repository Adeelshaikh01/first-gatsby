module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    description:"This is my first Gatsby website",
    title:"Gatsby with MUI"
  },
  // plugins: [`gatsby-theme-material-ui`],
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
  ],
}
