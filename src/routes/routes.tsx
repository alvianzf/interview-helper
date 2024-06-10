import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Interview from '../pages/Interview'; // Ensure correct import path

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Interview />} />
  )
);

export default routes;
