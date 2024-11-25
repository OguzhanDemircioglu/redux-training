import './App.css'
import PostsList from "./app/features/posts/PostList.jsx";
import AddPostForm from "./app/features/posts/AddPostForm.jsx";

function App() {

    return (
        <main className="App">
            <AddPostForm/>
            <PostsList/>
        </main>
    )
}

export default App
