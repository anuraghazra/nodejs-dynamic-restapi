// with :id param
async function getUserById(req, res) {
  res.send({
    data: req.params.id
  })
}

module.exports = {
  method: 'get',
  controller: getUserById
}