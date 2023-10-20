import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
