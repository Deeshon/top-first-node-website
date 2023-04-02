var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('home.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else if (req.url == "/about") {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else if (req.url == "/contact") {
        fs.readFile('contact.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
}).listen(8080)