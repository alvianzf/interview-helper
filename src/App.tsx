import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes'; // Updated import path
import './index.css';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
