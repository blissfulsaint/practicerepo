import { useState, useRef, useEffect } from "react"

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        setTodoList(['test 1', 'test 2']);
    }, [])

    function addItem() {
        if (inputRef.current.value.trim() !== '') {
            setTodoList([...todoList, inputRef.current.value]);
            inputRef.current.value = '';
        }
    }

    function deleteItem(index) {
        setTodoList(todoList.filter((_, i) => i !== index));
    }

    function clearAllItems() {
        setTodoList([]);
    }

    return (
        <div>
            {todoList.length > 0 && todoList.map((item, index) => {
                return <div key={index} className="todolist-item">
                    <p>{item}</p>
                    <button onClick={(e) => {deleteItem(index)}}>Delete</button>
                </div>
            })}
            <input type="text" ref={inputRef} />
            <button onClick={addItem}>Add Item</button>
            <button onClick={clearAllItems}>Clear All Items</button>
        </div>
    )
}