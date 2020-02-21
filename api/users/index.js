async function getAllUsers(req, res) {
  res.send({
    data: [
      {
        username: 'one'
      },
      {
        username: 'two'
      }
    ]
  })
}

module.exports = {
  method: 'get',
  controller: getAllUsers
}