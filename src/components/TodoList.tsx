import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { fakeTodos } from './utils';

export type Todo = {
	name: string;
	id: number;
	done: boolean;
};
const TodoList = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState<Todo>();

	const getTodos = async () => {
		setTimeout(() => {
			setTodos(fakeTodos);
		}, 3000);
	};

	const getNextTodoId = () => {
		const nbOfTodos = todos?.length;
		return nbOfTodos + 1;
	};

	const handleNewTodo = () => {
		if (newTodo) {
			setTodos([...todos, newTodo]);
		}
	};

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2">
				<input
					className="flex-[4] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					onChange={(e) => {
						if (e.target.value?.length) {
							setNewTodo({ name: e.target.value, done: false, id: getNextTodoId() });
						}
					}}
				/>
				<button onClick={handleNewTodo} className="flex-[1] bg-slate-300 lg:bg-orange-400 rounded-xl py-2">
					Confirm
				</button>
			</div>
			{todos?.length ? (
				todos?.map((todo) => <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />)
			) : (
				<p>Loading ...</p>
			)}
		</div>
	);
};

export default TodoList;
