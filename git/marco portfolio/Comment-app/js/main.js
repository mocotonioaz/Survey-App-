function todoList() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)
     
	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)
	var newImg = document.createElement('img')
    newImg.setAttribute('src', "http://vignette3.wikia.nocookie.net/nintendo/images/f/f4/The_Mario_Bros..jpeg/revision/latest?cb=20140221224337&path-prefix=en"),
    

   
	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	newListItem.appendChild(newImg)
	document.getElementById("commentList").appendChild(newListItem)
}