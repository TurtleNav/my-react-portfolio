import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'

// Pages
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children: [
    {
      index: true,
      element: <AboutMe/>
    },
    {
      path: '/AboutMe',
      element: <AboutMe/>
    },
    {
      path: '/Portfolio',
      element: <Portfolio/>
    },
    {
      path: '/Contact',
      element: <Contact/>
    },
    {
      path: '/Resume',
      element: <Resume/>
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

