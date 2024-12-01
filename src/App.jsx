import './App.css'
import PostsList from "./app/features/posts/PostList.jsx";
import AddPostForm from "./app/features/posts/AddPostForm.jsx";
import TodoList from "./app/features/todos/TodoList.jsx";

function App() {

    return (
        <main className="App">
            {/*<AddPostForm/>*/}
            {/*<PostsList/>*/}
            <TodoList/>
        </main>
    )
}

export default App
