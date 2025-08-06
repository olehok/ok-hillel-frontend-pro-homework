const apiUrl = 'https://jsonplaceholder.typicode.com/';
const postsContainer = document.querySelector('#posts');
const loadPostsBtn = document.querySelector('#load-posts');

const postForm = document.querySelector('#post-form');
const postTitle = document.querySelector('#post-title');
const postText = document.querySelector('#post-text');
const postTips = document.querySelector('#post-tips');

async function loadPosts() {
    try {
        const response = await fetch(apiUrl + '/posts?_limit=5.');
        const posts = await response.json();
        if (!response.ok) return;
        postsContainer.innerHTML = '';
        posts.forEach(post => addPostToDOM(post));
    } catch (error) {
        console.error(error)
    }
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

async function loadComments(e, postId) {
    try {
        const response = await fetch(apiUrl + `/posts/${postId}/comments?_limit=2`)
        const comments = await response.json()
        if (!response.ok || comments.length === 0) return

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
    } catch (error) {
        console.error(error);
    }
}

const addNewPost = async (e) => {
    e.preventDefault();

    const title = postTitle.value.trim();
    const body = postText.value.trim();

    if (!title || !body) {
        postTips.textContent = 'Please fill in both fields.';
        return;
    }

    try {
        const response = await fetch(apiUrl + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        })

        if (!response.ok) return;

        const post = await response.json();
        addPostToDOM(post);
        postForm.reset();
        postTips.textContent = 'Post added successfully!';
    } catch (error) {
        console.error(error)
        postTips.textContent = error;
    }
}

postForm.addEventListener('submit', addNewPost);

loadPostsBtn.addEventListener('click', loadPosts);