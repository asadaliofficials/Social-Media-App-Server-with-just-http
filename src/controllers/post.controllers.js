
function createNewPost(req, res){
	const { title, description, views, likes, userEmail, id } = JSON.parse(req.body);
  console.log(title, description, views, likes, userEmail, id);
  res.end('data recieved')

}

module.exports = createNewPost;