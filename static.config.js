import path from 'path'
import axios from 'axios'

export default {
  siteRoot: "https://keithstellyes.github.io",
  basePath: "godzilla-spa",
  getRoutes: async () => {
    return []
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-sass'),
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
