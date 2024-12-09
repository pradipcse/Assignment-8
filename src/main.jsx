import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/Books/ListedBooks';
import BookDetails from './components/Books/Book/BookDetails';
import Read from './components/Books/Book/Read';
import WishBooks from './components/Books/Book/WishBooks';
import Readpages from './components/Books/Readpages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path: "/", element: <Home /> },
      { path: "/Listed", element: <ListedBooks />,
        children:[
          { path: "readBooks", element: <Read /> },
          { path: "wishList", element: <WishBooks /> },
        ]
      },
      { path: "/Read", element: <Readpages /> },
      { path: "/book/:bookId", element: <BookDetails />, loader: () => fetch('/books.json') },
  
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
