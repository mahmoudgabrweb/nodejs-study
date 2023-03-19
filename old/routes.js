const fs = require("fs");
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><form action='/message' method='post'><input type='text' name='message'><button type='submit'>Send</button></form></body></html>")
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split("=")[1];
            fs.writeFile("message.txt", data, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write("<html><body><p>Done</p></body></html>");
    res.end();
};

module.exports = requestHandler;