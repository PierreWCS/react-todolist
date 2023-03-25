import { Todo } from './TodoList';

type Props = {
	todo: Todo;
	removeTodo: (id: number) => void;
};
const TodoItem = ({ todo, removeTodo }: Props) => (
	<div className="bg-gray-300 p-2 rounded-xl">
		<p className="text-xl font-bold">{todo.name}</p>
		<p>Done: {todo.done ? 'Yes' : 'No'}</p>
		<button onClick={() => removeTodo(todo.id)} className="bg-red-300 rounded-lg p-2">
			Remove
		</button>
	</div>
);

export default TodoItem;
