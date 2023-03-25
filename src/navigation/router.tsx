import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

// const aboutLoader = () => {
// 	return defer({ data: 'lol' });
// };

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		// loader: aboutLoader,
	},
	{
		path: '/',
		element: <About />,
		// loader: homeLoader,
	},
]);
