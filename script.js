// //Complete this JS file to render the post1 on the screen with all the specified tags.
// let post1 = {
//   id: 1,
//   author: "John",
//   content: "My first Post!",
//   likes: 10,
//   comments: ["Great post!", "Nice photo!"],
//   image: "https://files.codingninjas.in/image2-28694.jpg",
// };

// const posted = document.getElementById("posts");
// // creating a div with the class name post
// const newPost = document.createElement("div");
// newPost.classList.add("post");
// posted.appendChild(newPost);

// // h3 tag should bi contains form object post1
// const heading = document.createElement("h3");
// newPost.appendChild(heading);
// heading.innerText = post1.author;

// // image should be contains form object post1
// const image = document.createElement("img");
// image.src = post1.image;
// newPost.appendChild(image);

// // p tag should be contains from object post1
// const para = document.createElement("p");
// newPost.appendChild(para);
// para.innerText = post1.content;

// // button and input and again button contains form object
// const likeButton = document.createElement("button");
// likeButton.classList.add("like-Button");
// newPost.appendChild(likeButton);
// likeButton.textContent = "Like";

// const commentInput = document.createElement("input");
// newPost.appendChild(commentInput);
// commentInput.placeholder = "Add a comment...";
// commentInput.textContent = commentInput;

// const commentButton = document.createElement("button");
// newPost.appendChild(commentButton);
// commentButton.textContent = "comment";

// // footer add contains from object

// const footer = document.createElement("div");
// footer.classList.add("post-footer");
// newPost.appendChild(footer);
// // footer.textContent = `Likes: ${post1.likes} Comment: ${post1.comments.length}`;

// // create the span element for display likes
// const likesdisplay = document.createElement("span");
// likesdisplay.textContent = `Likes:${post1.likes}`;
// footer.appendChild(likesdisplay);

// const commentdisplay = document.createElement("span");
// commentdisplay.textContent = ` Comment:${post1.comments.length}`;
// footer.appendChild(commentdisplay);

// // comment-container createing ..
// const containerContent = document.createElement("div");
// containerContent.classList.add("comment-container");
// newPost.appendChild(containerContent);

// for (const comment of post1.comments) {
//   const commentPara = document.createElement("p");
//   commentPara.innerText = comment;
//   containerContent.appendChild(commentPara);
// }

// // Get a reference to the post-footer div
// const postFooter = document.querySelector(".post-footer");

// // Add a click event listener to the post-footer div
// postFooter.addEventListener("click", () => {
//   if (containerContent.style.display === "block") {
//     containerContent.style.display = "none";
//   } else {
//     containerContent.style.display = "block";
//   }
// });

// // add a click event listeners to the like button
// let liked = false;
// likeButton.addEventListener("click", () => {
//   if (!liked) {
//     post1.likes++;
//     likesdisplay.textContent = `Likes:${post1.likes}`;
//     liked = true;
//     liked.disabled = false;
//     likeButton.style.background = "red";
//   }
// });

// // add a click event listeners to the comment button

// commentButton.addEventListener("click", () => {
//   const newComment = commentInput.value;

//   if (newComment.trim() !== "") {
//     //  // Check if the comment is not empty or only contains whitespace
//         post1.comments.push(newComment);
//         commentdisplay.textContent = `  Comment:${post1.comments.length}`;

//     commentInput.value = "";
//     const commentPara = document.createElement("p");
//     commentPara.innerText = newComment;
//     containerContent.appendChild(commentPara);
//   }
// });
// function displayComments() {
//   for (const newComment of post1.comments) {
//     const commentPara = document.createElement("p");
//     commentPara.innerText = newComment;
//     commentContainer.appendChild(commentPara);
//   }
// }

// // Call the function to display initial comments
// displayComments();



// other method---
// The code given below is for one object refactor the code it for using the JSON Data.
//for the given scaffold create event Listener and handler for the form.

    
let postsData = [
  { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
  { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
  { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://media.istockphoto.com/id/1455753033/photo/indoor-portrait-of-female-engineering-student.jpg?s=2048x2048&w=is&k=20&c=kBeMJXr3OlY5A3QIUYSIwF7g-AkR4Qf7dzNJpeAEpsg=' },
  { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://media.istockphoto.com/id/1455755410/photo/portrait-of-early-20s-female-stem-student.jpg?s=1024x1024&w=is&k=20&c=Q9-RsZNL3ee5KuArKr9hZ2R_ZiP9S5qOZakgeJVQ9Ag=' },
];
const likedPosts = new Set();
function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  postsData.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('h3');
    authorElement.textContent = post.author;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = 'Post Image';

    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
    likeButton.addEventListener('click', () => {
      if (!likedPosts.has(post.id)) {
          likePost(post.id);
        likedPosts.add(post.id);
          likeButton.disabled = true;  
          for(let ind of likedPosts){
              const button = document.querySelectorAll('.like-button')[ind-1];
              button.style.backgroundColor = 'red';
      
          }
  }
});

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button');
    commentButton.addEventListener('click', () => {
      addComment(post.id, commentInput.value);
      commentInput.value = '';
    });

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';

    post.comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });

    postElement.appendChild(authorElement);

    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postFooter.addEventListener('click', () => {
      if (commentsContainer.style.display === 'none') {
        commentsContainer.style.display = 'block';
      } else {
        commentsContainer.style.display = 'none';
      }
    });

    postsContainer.appendChild(postElement);
  });
}

// Function to handle post liking
function likePost(postId) {
  const post = postsData.find(post => post.id === postId);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

// Function to handle adding a comment
function addComment(postId, comment) {
  const post = postsData.find(post => post.id === postId);
  if (post) {
    post.comments.push(comment);
    renderPosts();
  }
}
const submitbutton  = document.querySelector('.submit-button')

// Create your function here to handle post creation and adding Post to the postsData.
function createNewPost() {
  const postInput = document.getElementById('postInput').value;
  const imageInput = document.getElementById('imageInput').files[0];

  // Check if postInput and imageInput are not empty
  if (postInput.trim() !== '' && imageInput) {
    // Create a new post data object
    const newPost = {
      id: postsData.length + 1,
      author: 'Your Name', // You can customize this
      content: postInput,
      likes: 0,
      comments: [],
      image: URL.createObjectURL(imageInput),
    };

    // Add the new post to the postsData array
    postsData.push(newPost);

    // Clear the input fields
    document.getElementById('postInput').value = '';
    document.getElementById('imageInput').value = '';

    // Re-render the posts to display the new post
    renderPosts();
  }
}


// Add Event listeners to listen to the submit event of the form.
const postForm = document.getElementById('postForm')
postForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally
  createNewPost(); // Call the function to create a new post
})

// Initial rendering                      
renderPosts();

