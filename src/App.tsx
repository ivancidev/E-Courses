import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';
import mackServer from './mirage/server';

if(process.env.NODE_ENV === 'development') {
  mackServer({ environment: 'development' });
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
