const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("First Middleware");
  next();
});

app.use("/", (req, res, next) => {
  console.log("second Middleware");
  next();
});

app.get("/", (req, res, next) => {
  console.log("Third Middleware");
  res.send(`<h1>Welcome to express</h1>
  `);
});


app.post("/contact-Us",(req,res)=>{
console.log("handling contact us post",req.url,req.method)
res.send(`
<h1>We will contact you shortly</h>
`)
})



app.get("/contact-Us", (req, res, next) => {
  console.log("handling /for GET", req.url, req.method);
  res.send(`<h1>Please enter your details here</h1>
  <form action="/contact-Us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" required />
    <input type="email" name="email" placeholder="Enter your Email-ID" required />
    <input type="submit" value="Submit" />
  </form>
`);
});

const port = 5006;
app.listen(port, () => {
  console.log(`your server has been connected to the http://localhost:${port}`);
});
