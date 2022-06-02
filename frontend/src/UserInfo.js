export default function UserInfo() {
    return <>
        <nav class="navbar navbar-light bg-light">
            <div id="errorInfo" class="alert alert-danger fade show" role="alert" style="opacity:0"></div>
            <div><a href="/">Return to Homepage</a></div>
            <div id="identity_div">loading...</div>
        </nav>
        <h1>Website Sharer</h1>

        <h2>Info for user: <span id="username-span"></span></h2>
        <h3>About</h3>
        <p id="bio"></p>
        <h3>Favorite website</h3>
        <p id="favWebsite"></p>
        <br />
        <div id="user_info_new_div">
            <h3>Update User Info:</h3>
            <p>Enter a bio</p>
            <input type="text" id="bioInput" />
            <br />
            <p>What's your favorite website?</p>
            <input type="text" id="favWebsiteInput" />
            <br />
            <p id="userPostStatus"></p>
            <button onclick="saveUserInfo()">Save User Info</button>
        </div>
        <br /><br />
        <h2>All Posts</h2>
        <button onclick="loadUserInfo()">refresh</button>
        <div id="posts_box"></div>
    </>
}