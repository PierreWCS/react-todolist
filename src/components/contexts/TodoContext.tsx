import { createContext, useMemo, useState } from 'react';
import { Todo } from '../TodoList';
import { fakeTodos } from '../utils';

type ContextProps = {
	todos: Todo[];
	setTodos: (todos: Todo[]) => void;
};
export const TodoContext = createContext<ContextProps>({
	setTodos: () => {},
	todos: [],
});

export const TodoContextProvider = ({ children }: { children: any }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const value = useMemo(
		() => ({
			todos,
			setTodos,
		}),
		[todos]
	);

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
