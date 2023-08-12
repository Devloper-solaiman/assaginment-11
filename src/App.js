import { ToastContainer } from 'react-toastify';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <section className='max-w-6xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />

    </section>
  );
}

export default App;
