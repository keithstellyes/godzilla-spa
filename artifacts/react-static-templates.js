

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/keithstellyes/projects/godzilla-spa/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js'
      
const t_1 = universal(import('/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js'
      
const t_2 = universal(import('/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js'), universalOptions)
      t_2.template = '/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js'
      
const t_3 = universal(import('/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js'), universalOptions)
      t_3.template = '/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js'
      
const t_4 = universal(import('/Users/keithstellyes/projects/godzilla-spa/src/containers/Post'), universalOptions)
      t_4.template = '/Users/keithstellyes/projects/godzilla-spa/src/containers/Post'
      

// Template Map
export default {
  '/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js': t_0,
'/Users/keithstellyes/projects/godzilla-spa/src/pages/about.js': t_1,
'/Users/keithstellyes/projects/godzilla-spa/src/pages/all-movies.js': t_2,
'/Users/keithstellyes/projects/godzilla-spa/src/pages/index.js': t_3,
'/Users/keithstellyes/projects/godzilla-spa/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/Users/keithstellyes/projects/godzilla-spa/src/pages/404.js"

