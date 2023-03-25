import './App.css';
import { TodoContextProvider } from './components/contexts/TodoContext';
import ContextTodoList from './components/ContextTodoList';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="App">
			<TodoContextProvider>
				<p className="text-3xl text-cyan-700 mb-10">Todo list 🍏</p>
				<TodoList />
				<div className="h-2 bg-gray-300 w-full my-4" />
				<ContextTodoList />
			</TodoContextProvider>
		</div>
	);
};

export default App;

