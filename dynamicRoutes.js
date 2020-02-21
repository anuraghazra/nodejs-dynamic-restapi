const router = require('express').Router();
const fs = require('fs');

const buildRoutes = (route, endpoint) => {
  const { method, controller } = route.file

  // if the file name is index then we will be treat it baseline
  let routeName = (route.name === 'index' ? '' : router.name)
  // check if its a query param :id (file named with [brackets].js)
  let paramRoute = route.name.match(/\[(.*)\]/);
  if (paramRoute) routeName = ':' + paramRoute[1]

  const url = `/${endpoint}/${routeName}`

  // dynamically set the router
  router[method](url, controller)
}

const dynamicRoute = () => {
  let endpoints = fs.readdirSync('./api/')

  endpoints.forEach(endpoint => {
    let fileNames = fs.readdirSync(`api/${endpoint}`)

    const files = fileNames.map(file => ({
      name: file.replace('.js', ''),
      file: require(`./api/${endpoint}/${file}`)
    }))

    files.forEach((route) => buildRoutes(route, endpoint))
  })

  return router;
}


module.exports = dynamicRoute;