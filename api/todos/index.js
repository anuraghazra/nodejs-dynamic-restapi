async function getAllTodos(req, res) {
  res.send({
    data: [
      {
        title: 'get food'
      },
      {
        title: 'do stuff'
      }
    ]
  })
}

module.exports = {
  method: 'get',
  controller: getAllTodos
}