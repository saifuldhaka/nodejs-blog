const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const mongoStore = connectMongo(expressSession);
const connectFlash = require("connect-flash");
const edge = require("edge.js");

// Authorization Checking  
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');


// adding controllers
const welcomePageController = require('./controllers/welcomePage');
const aboutPageController = require('./controllers/aboutPage');
const contactPageController = require('./controllers/contactPage');


const createPostController = require('./controllers/createPost');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const allPostController = require('./controllers/allPost');
const deletePostController = require('./controllers/deletePost');
const updatePostStatusController = require('./controllers/updatePostStatus');

const editPostController = require('./controllers/editPost');
const updatePostController = require('./controllers/updatePost');
const myPostController = require('./controllers/myPost');
const storePostCommentController = require('./controllers/storePostComment');
const updatePostCommentController = require('./controllers/storePostCommentUpdate');

const storeUserController = require('./controllers/storeUser');
const createUserController = require("./controllers/createUser");

const loginController = require("./controllers/login");
const loginUserController = require('./controllers/loginUser');
const logoutController = require("./controllers/logout");


const app = new express();
app.use(connectFlash());
app.use(expressSession({
    secret: "akjjkjnisaiuu8998323jdkadsih892rhoisdfasl",
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
    // secret: 'secret'
}));



mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,

})
.then(() => 'You are now connected to Mongo!')
.catch(err => console.error('Something went wrong', err));

app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge.engine);
app.set('views', __dirname + '/views');
app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId);
    edge.global('userName', req.session.userName);
    edge.global('userId', req.session.userId);
    res.locals.user = req.session.user;
    next()
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

// post save validation
const storePost = require('./middleware/storePost')
app.use('/posts/store', storePost)

// Routes
app.get("/", welcomePageController);
app.get("/about", aboutPageController);
app.get("/contact", contactPageController);
app.get("/all-post", allPostController);
app.get("/my-post", auth, myPostController);

app.get("/new-post", auth, createPostController);
app.post("/posts/store", auth, storePost, storePostController);


app.post("/posts/comment-store", storePostCommentController);
app.post("/posts/update-comment", auth, updatePostCommentController);

app.get("/posts/:id", getPostController);
app.get("/posts/delete/:id", auth, deletePostController);
app.post("/posts/update-post-status", auth, updatePostStatusController);

app.get("/posts/edit/:id", auth, editPostController);
app.post("/posts/update/:id", auth, storePost, updatePostController);






// user login
app.get("/auth/login", redirectIfAuthenticated, loginController);
app.post("/users/login", redirectIfAuthenticated, loginUserController);

// user register
app.get("/auth/register", redirectIfAuthenticated, createUserController);
app.post("/users/register", redirectIfAuthenticated, storeUserController);

// user logout 
app.get("/auth/logout", logoutController);



// static pages
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});


// running port
app.listen(4000, () => {
    console.log('App listening on port 4000')
});

