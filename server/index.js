const { createServer } = require("http");
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require("express-session");
// const passport = require("passport");
const flash = require("connect-flash");
const MongoDbStore = require('connect-mongo');
const mongoose = require('mongoose');
const socketIo = require("socket.io");
const { body, validationResult } = require('express-validator');
const bookSeeder = require("./apps/bible/data/seeders/books/bookSeeder");
const bookRoutes = require("./apps/bible/http/routes/browser/books");
const chapterSeeder = require("./apps/bible/data/seeders/genesis/chapterSeeder");
const verseSeeder = require("./apps/bible/data/seeders/genesis/verseSeeder");
const app = express();
const server = createServer(app);

// THIS STRING IS THE LINK TO OUR MONGODB
const url = 'mongodb://localhost:27017/bible';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

bookSeeder();
chapterSeeder.chapterImporter("Genesis", 50);
chapterSeeder.chaptersToBook("Genesis");
verseSeeder.verseImporter("Genesis", 1);

// Set view engine to ejs so that template files will be ejs files
app.set("view engine", "ejs");
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(expressLayouts);

app.use(session({
  store: MongoDbStore.create({
    mongoUrl: url
  }),
  secret: "secretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
  }
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// -- Set Passport Config After Session Config -- //
// Passport Configuration
// const passportInit = require("../config/passport");
// passportInit(passport);
// app.use(passport.initialize());
// app.use(passport.session());

// Setup static directories
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use((req, res, next) => {
  // res.locals.session = req.session;
  // res.locals.user = req.user;
  // res.locals.login = req.isAuthenticated();

  next();
});

const io = socketIo(server, { cors: { origin: "*" } });

app.use((req, res, next) => {
  req.io = io;
  return next();
});

// Now all routes & middleware will have access to req.io
app.get('/', (req, res) => {
  res.render('index');
});

app.use("/", bookRoutes);

server.listen(3000, () => console.log(`Server started!`));