const apiUrl = 'https://jsonplaceholder.typicode.com/';
const postsContainer = document.querySelector('#posts');
const loadPostsBtn = document.querySelector('#load-posts');

const postForm = document.querySelector('#post-form');
const postTitle = document.querySelector('#post-title');
const postText = document.querySelector('#post-text');
const postTips = document.querySelector('#post-tips');

function loadPosts() {
    fetch(apiUrl + '/posts?_limit=5.').then(response => {
        return response.json()
    }).then(posts => {
        postsContainer.innerHTML = '';
        posts.forEach(post => addPostToDOM(post));
    }).catch(error => console.error(error));
}

function addPostToDOM(post) {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
        <h3 class="post-title">${post.title}</h3>
        <p class="post-content">${post.body}</p>
        <button class="load-comments">Comments</button>`
    postEl.dataset.postId = post.id;
    const loadCommentsBtn = postEl.querySelector('.load-comments');
    loadCommentsBtn.addEventListener('click', (e) => {
        loadComments(e, post.id);
    });
    postsContainer.appendChild(postEl);
}

function loadComments(e, postId) {
    fetch(apiUrl + `/posts/${postId}/comments?_limit=2`)
        .then(response => {
            return response.json()
        })
        .then(comments => {
            if (comments.length === 0) return;

            const existingComments = e.target.parentElement.querySelector('.comments');
            if (existingComments) {
                existingComments.remove();
                return;
            }

            const commentsContainer = document.createElement('div');
            commentsContainer.classList.add('comments');
            commentsContainer.innerHTML = `
            <h4>Comments</h4>
            <ul class="comment-list"></ul>`

            comments.forEach(comment => {
                const li = document.createElement('li');
                li.classList.add('comment-item');
                li.innerHTML = `
                    <p id="comment-name">${comment.name}</p>
                    <p id="comment-email">${comment.email}</p>
                    <p id="comment-body">${comment.body}</p>`

                commentsContainer.querySelector('.comment-list').appendChild(li);
            })

            e.target.parentElement.appendChild(commentsContainer);
        })
}

const addNewPost = (e) => {
    e.preventDefault();

    const title = postTitle.value.trim();
    const body = postText.value.trim();

    if (title && body) {
        fetch(apiUrl + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        }).then(response => {
            return response.json();
        }).then(post => {
            addPostToDOM(post);
            postForm.reset();
            postTips.textContent = 'Post added successfully!';
        }).catch(error => {
            console.error(error)
            postTips.textContent = error;
        });
    } else {
        postTips.textContent = 'Please fill in both fields.';
    }
}

postForm.addEventListener('submit', addNewPost);

loadPostsBtn.addEventListener('click', loadPosts);