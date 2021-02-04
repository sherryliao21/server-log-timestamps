const express = require('express')
const app = express()
const port = 3000

// function printServerLog(req, res) {
//   const DateNow = Date.now()
//   const timeFormat = new Intl.DateTimeFormat("cn-ca-chinese", {
//     timeStyle: "medium",
//     month: "numeric",
//     year: "numeric",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: false
//   })
//   const timeNow = timeFormat.format(DateNow)
//   console.log(`${timeNow} | ${req.method} from ${req.originalUrl}`)
// }

app.use(function (req, res, next) {
  const DateNow = Date.now()
  const timeFormat = new Intl.DateTimeFormat("cn-ca-chinese", {
    timeStyle: "medium",
    month: "numeric",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  })
  const timeNow = timeFormat.format(DateNow)
  console.log(`${timeNow} | ${req.method} from ${req.originalUrl}`)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})