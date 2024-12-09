

Book Shelf Application
A simple React-based web application that allows users to manage their book collection, including viewing details, adding books to their reading list or wishlist, and sorting books based on different criteria.

Features
Browse Books: Users can view a list of books and filter them by categories such as "Read Books" and "Wish List Books".
Book Details: Each book has a detailed view with additional information like author, category, publisher, rating, and more.
Local Storage: Books can be added to the "Read Books" or "Wish List Books" sections, with data stored in the browser’s local storage.
Sorting: Books can be sorted based on rating, number of pages, or year of publishing.
Responsive Design: The application is fully responsive, adapting to different screen sizes using Tailwind CSS.
Installation
Prerequisites
Node.js version 14 or higher.
npm or yarn as a package manager.
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/book-shelf.git
Navigate to the project directory:

bash
Copy code
cd book-shelf
Install the dependencies:

bash
Copy code
npm install
Or, if using yarn:

bash
Copy code
yarn install
Start the development server:

bash
Copy code
npm start
Or with yarn:

bash
Copy code
yarn start
Open the app in your browser at http://localhost:3000.

Usage
Pages:
Home Page: Displays a banner and navigation options to view the listed books.
Listed Books Page: View all books categorized into "Read Books" and "Wish List Books". Users can sort and filter these books by different criteria.
Book Details Page: Each book has a detailed view that includes more information about the book (like author, publisher, rating, etc.), and users can add the book to either their reading list or wishlist.
Features:
Sorting Books: The books can be sorted by rating, number of pages, or published year.
Adding to Lists: Users can add books to the "Read Books" or "Wish List Books" sections. These actions are saved in the browser’s local storage.
Responsive Design: The layout adjusts based on screen size (mobile, tablet, desktop).
Technologies Used
React: A JavaScript library for building user interfaces.
React Router: A library for handling routing in the React application.
Tailwind CSS: A utility-first CSS framework for responsive design.
React Toastify: A library for displaying toast notifications.
LocalStorage: Used for storing the books that are added to the "Read Books" and "Wish List Books" sections.
Folder Structure
bash
Copy code
/book-shelf
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── Header.js
│   │   ├── Banner.js
│   │   ├── Book.js
│   │   ├── BookDetails.js
│   │   └── ListedBooks.js
│   ├── /pages
│   │   ├── Home.js
│   │   ├── ListedBooksPage.js
│   │   └── BookDetailsPage.js
│   ├── /assets
│   └── App.js
└── /package.json
Contributing
We welcome contributions to improve the project!

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make changes and commit them (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Tailwind CSS for the UI styling.
React Router for routing.
React Toastify for notifications
















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
