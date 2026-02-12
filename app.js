//import express model (web framework)
import express from "express";

//Create an express application
const app = express();

//Define a port number where server will listen
const PORT = 3001;

//Define main route (default route) ('/') (the root directory of our project)
app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/submit-booking", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

//Enable static file serving -- tells express where to look for the static files
app.use(express.static("public"));

//Start server and listen on the designated port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
