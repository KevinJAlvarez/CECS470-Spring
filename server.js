const express = require(`express`);
const app = express();
const path = require("path");
const session = require("express-session");
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "shhh a secret",
    saveUninitialized: true,
    resave: false
  }),
);

app.use("/", express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("./index.html", path.join(__dirname));
});


const VALID_USER = { username: "admin", password: "123456" };

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === VALID_USER.username && password === VALID_USER.password) {
    req.session.isLoggedIn = true;
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid password" });
  }
});

//is logged in
app.get('/api/status', (req, res) => {
  res.json({ loggedIn: !!req.session.isLoggedIn });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
