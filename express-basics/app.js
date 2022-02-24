const express = require('express');

// Routers
// const postsRouter = require('./routes/posts.routes');
const { postsRouter } = require('./routes/posts.routes');
const { userRouter } = require('./routes/users.routes');

// Init express app
const app = express();

// Enable JSON incoming data
app.use(express.json());

// Endpoints
// http://localhost:4000/api/v1/posts
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/users', userRouter);

app.listen(4000, () => {
	console.log('Express app running');
});

// Http status codes examples:
// 2** -> success
// 3** -> misc
// 4** -> Client errors
// 5** -> Server errors
