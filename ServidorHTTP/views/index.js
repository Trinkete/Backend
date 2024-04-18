const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/home.html" : req.url;
  if (req.url === "/login") {
    filePath = "/login.html";
  }
  if (req.url === "/register") {
    filePath = "/register.html";
  }
  const fullPath = path.join(__dirname, filePath);
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error al leer el archivo: ${err}`);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});
server.listen(3000, () => {
  console.log("Servidor web iniciado en el puerto 3000");
});
