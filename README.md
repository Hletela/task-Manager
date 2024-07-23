# Mars Mission Task Tracker

A Single Page Application (SPA) built with React and Webpack to help track tasks for a Mars mission. This application allows users to view, create, update, and delete task items.

## Features

- **Task Management**: View, create, update, and delete tasks.
- **Side Panel**: Displays the current user, the number of tasks, and a button to delete all tasks.
- **Mars Image**: Renders an image of Mars fetched asynchronously from Unsplash.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Webpack**: A module bundler for modern JavaScript applications.
- **Jest**: A JavaScript testing framework.
- **Testing Library**: For testing React components.
- **Node-fetch**: For server-side fetching.

## Installation

To get started with the project, clone the repository and install the dependencies:
npm install

To run the application locally:
npm start

To run the tests:
npm test

Project Structure:
.
├── dist
│   ├── index.html
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── SidePanel.js
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   └── MarsImage.js
│   ├── __tests__
│   │   ├── App.test.js
│   │   ├── TaskForm.test.js
│   │   ├── TaskList.test.js
│   │   └── MarsImage.test.js
│   ├── App.js
│   ├── styles.css
│   ├── index.js
│   └── setupTests.js
├── package.json
├── jest.config.js
├── .babelrc
└── webpack.config.js

