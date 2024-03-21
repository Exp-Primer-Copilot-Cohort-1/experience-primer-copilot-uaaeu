// Create web server
// Create a route to get all comments
// Create a route to get a single comment
// Create a route to add a comment
// Create a route to update a comment
// Create a route to delete a comment

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');
const PORT = 3000;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments.getAllComments());
});

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.json(comments.getCommentById(id));
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  res.json(comments.addComment(newComment));
});

app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const updatedComment = req.body;
  res.json(comments.updateComment(id, updatedComment));
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.json(comments.deleteComment(id));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});