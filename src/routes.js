async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('Served')
  })
}

module.exports = Routes
