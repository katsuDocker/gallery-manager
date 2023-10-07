const exp = require('express')

const Routes = require('./src/routes')
const Serve = require('./src/serve')

const app = exp()

Routes(app, __dirname)
Serve(app)
