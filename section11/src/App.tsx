import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface TODO {
    id: number;
    content: string;
}
function App() {
    const [todos, setTodos] = useState<TODO[]>([]);
    const idRef = useRef(0);

    const onClickEvent = (text: string) => {
        setTodos([
            ...todos,
            {
                id: idRef.current++,
                content: text,
            },
        ]);
    };
    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className="App">
            <h1>TODO</h1>
            <Editor onClickEvent={onClickEvent} />
        </div>
    );
}

export default App;
