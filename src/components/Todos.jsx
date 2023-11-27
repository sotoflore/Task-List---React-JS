import Todo from "./Todo";

const Todos = ( { todos, deleteTodo, updateTodo}) => {
    return (
        <div>
            <h2 className="text-center mb-5">Todos</h2>
            <ul className="list-group">
                {
                    todos.map( (todo) => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    ))
                }
                {todos.length === 0 && ( 
                    <li className="list-group-item text-center text-black">sin Todos</li>
                )}
            </ul>
        </div>
    )
}
export default Todos;