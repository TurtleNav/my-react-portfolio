# My React Portfolio

**Live at https://heroic-dolphin-fadfac.netlify.app/**

This is a personal portfolio website built using React and is meant to
show off things I've learned in web development.

## Demo
[my-react-portfolio-demo.webm](https://github.com/TurtleNav/my-react-portfolio/assets/57142468/13381bf4-43ae-40b2-af4a-ca86195514d0)

## How To Install

1. Download this repo however you wish
2. `cd` into the root directory
3. Run the command `npm install` followed by `npm run dev`
4. View the page by loading localhost:3000 in the browser of your choice

## Site Aspects

### react-router-dom
All site routing was achieved using react-router-dom. The below technique is highly modular and adding a new page to the site
would amount to ~10 new lines of code. The below snippets show how routing to the home (AboutMe page) is achieved.

```jsx
/* main.jsx */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'

// import a new page here
import AboutMe from './components/pages/AboutMe';

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children: [
    {
      path: '/AboutMe',
      element: <AboutMe/>
    },
    // new pages are appened to 'children'
  ...
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
```

```jsx
/* App.jsx */
import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="my-react-portfolio">
      <div id="content">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
```

While there may be significant boiler plate above, the price of adding a new route is less than Express.js.

### Form Handling + State Variables

In the 'Contact Me' setion of my webpage there is a form to get in touch with myself. The user must
input their name, email, and a message. All three of these variables are tracked using React's `useState`
hook. The form inputs are also validated in an appropriate manner. Take the name input for example:

```jsx
/* Contact.jsx */
let [name, setName] = useState(''); // Getter and setter for name input
<form ... >
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    value={name}
    name="name"
    className="contact-name-input"
    onChange={(e) => {
      setName(e.target.value);
    }}
    onBlur={((e) => {
      // event emits whenever the name input was selected then a new element was selected

      // This span tag is used to provide feedback on the validity of the input
      const el = document.querySelector('.feedback-span');

      if (name.replace(/[a-zA-Z]/g, "").length > 0) {
        el.textContent = "A valid name is required";
      } else {
        el.textContent = "";
      }
    })}
  ></input>
```










