# Book Previewer

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Display a list of books information
- Efficient data fetching fake API
- Efficient data fetching using React Query, with local caching to avoid redundant server requests
- Efficient data is displayed in a table and has pagination capability
- Clicking on each book navigates to a dedicated page displaying complete book information
- Dispaly a responsive list of books with titles, authors, images and description
- State management with Redux Toolkit for actions such as API requests
- React Profiler is used to measure and monitor application performance
- Code splitting and lazy loading are used for components and images

## Dependencies

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [TailwindCss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- React Table
- [i18next](https://www.i18next.com/)
- [Sass](https://sass-lang.com/)
- [Sass](https://sass-lang.com/)

## Installation

```bash
# Clone the repository
git clone https://github.com/ghmahdipour/book-previewer.git

# Navigate to the project folder
cd your-project

# Install dependencies
npm install
```

## Usage

```bash
# Runs the app in the development mode
npm run dev
```

## Project Structure
```lua
|-- src/
|   |-- api/
|   |   |-- books
|   |   |   |-- bookApi.tsx
|   |   |-- api.tsx
|   |-- app/
|   |   |-- App.tsx
|   |-- assets/
|   |   |-- fonts/
            .
            .
            .
|   |   |-- scss/
|   |   |   |-- config/
|   |   |   |-- custom/
|   |   |   |   |-- components/
|   |   |   |   |   |-- _cards.scss/
|   |   |   |   |   |-- _pagination.scss/
|   |   |   |   |   |-- _reboot.scss/
|   |   |   |   |   |-- _tables.scss/
|   |   |   |   |   |-- _type.scss/
|   |   |   |   |-- fonts/
                    .
                    .
                    .
|   |   |   |   |-- plugins/
                    .
                    .
                    .
|   |   |   |   |-- structure/
                    .
                    .
                    .
|   |   |   |-- app.scss
|   |   |   |-- bootstrap.scss
|   |   |   |-- icons.scss
|   |   |   |-- Theme.scss
|   |-- components/
|   |   |-- LazyImage.tsx
|   |   |-- Loading.tsx
|   |   |-- Pagination.tsx
|   |   |-- Table.tsx
|   |-- config/
|   |   |-- ErrorMiddleware.tsx
|   |-- helpers/
|   |   |-- utils.tsx
|   |-- models/
|   |   |-- book.model.ts
|   |-- pages/
|   |   |-- book/
|   |   |   |-- index.tsx
|   |   |-- landing/
|   |   |   |-- index.tsx
|   |-- redux/
|   |   |-- hooks.tsx
|   |   |-- store.tsx
|   |-- slices/
|   |   |-- bookSlice.tsx
|   |   |-- mainSlice.tsx
|-- index.tsx
|-- index.html
|-- package.json
|-- README.md
.
.
.