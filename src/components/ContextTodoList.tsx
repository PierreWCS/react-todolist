import { useContext, useEffect } from 'react';
import { TodoContext } from './contexts/TodoContext';
import TodoItem from './TodoItem';
import { fakeTodos } from './utils';

const ContextTodoList = () => {
	const { todos, setTodos } = useContext(TodoContext);

	useEffect(() => {
		setTodos(fakeTodos);
	}, []);

	return (
		<div>
			<h1 className="text-2xl mb-10">Todo list with context</h1>
			{todos?.map((todo) => (
				<TodoItem removeTodo={() => {}} todo={todo} />
			))}
		</div>
	);
};

export default ContextTodoList;
