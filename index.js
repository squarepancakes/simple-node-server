const http = require("http");
const PORT = 3000;
const server = http.createServer();

server.on("request", (req, res) => {
	console.log("Method", req.method);
    console.log("Path", req.url);

	if (req.url === "/books" && req.method === "GET") {
		res.end("Here are books");
	} else if (req.url ==="/books"&& req.method === "POST") {
        res.end("Book created");
	} else {
		res.end("Thanks for visiting");
	}
});

server.listen(PORT, () => {
	console.log("Server is now listening on PORT", PORT);
});
