const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.json())

app.all('*', ({ headers, body, query, path, method, cookies, protocol, hostname }, response) => {
  const responseJson = {
    timestamp: new Date(),
    headers,
    body,
    cookies,
    query,
    method,
    path,
    hostname,
    protocol,
  }

  console.log(JSON.stringify(responseJson));

  response.json(responseJson);
})

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`)
// })

module.exports = app
