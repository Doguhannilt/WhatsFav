
# WhatsFav

WhatsFav is a web application designed to help users select their favorite films based on various filters. The project utilizes the MERN stack (MongoDB, Express, React, Node.js) to provide a seamless and interactive experience.

## UPDATE (24 JULY 2024)

- The background color has been changed and used more of a color palette
- Created a new filter design with the help of *Frame-Motion*
- The Mini Search Bar design has been changed
- A bug in the filter has been fixed

https://github.com/user-attachments/assets/10c24ef7-1689-4348-84d6-49fffbb3c608




## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## IMAGES AND VIDEO
![Intro](https://github.com/user-attachments/assets/aca53ca1-4067-495f-a78f-dbe5a84f1bff)
![SignUp](https://github.com/user-attachments/assets/0ce4f151-9f9d-4e5d-87a1-c644bef30238)
![Top-Mainpage](https://github.com/user-attachments/assets/048df504-4666-45d1-b1f0-9165237b653e)
![Categories](https://github.com/user-attachments/assets/6b9cd277-2b38-43d6-8e56-407bf286e647)
![DetailPage](https://github.com/user-attachments/assets/9a2e8390-b009-4ddb-8b1f-d682cc9929a3)
![Favorite-Films](https://github.com/user-attachments/assets/39018b05-35f8-45d7-bc69-b6a7db4d159f)
![profile](https://github.com/user-attachments/assets/dc6f0512-255f-4fcd-a47a-0b9485dfabf5)

## CHECK

- [x] Login (added)
- [x] Sign up (added)
- [x] Logout (added)
- [x] Update Profile (added)
- [x] Contact Menu (added)
- [x] Film Models (added)
- [x] Review Models (added)
- [x] Favorites RTK Query (added)
- [x] Create Category, and make a backend for it (added)
- [ ] Comment/Rating Tab
- [x] Movies Collecting (added)
- [x] Create A Filter System Based On The Films Genre (added)
- [x] Create A Filter System Based On the user's filter (added)
- [x] Add Films With Slider
  - [x] FavSlider.jsx (added)
  - [x] All Movies (added)
  - [x] Horror Movies (added)
  - [x] Sad Movies (added)
  - [x] Funny Movies (added)
- [x] Create a dynamic search bar (added)
- [x] Create a state management system for storing favorite films of the user RTK QUERY - BACKEND (added)
- [x] Create A Specific Film Page (added)

## Features
- **Filter Films**: Users can filter films based on their preferences, such as genre, rating, and release date.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.
- **Interactive UI**: Built with React, the user interface is dynamic and user-friendly.
- **RESTful APIs**: The backend is built with Express and Node.js, providing robust APIs for data management.
- **Database Management**: MongoDB is used to store and manage film data efficiently.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: Redux
- **API Requests**: RTK Query

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed and running

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Doguhannilt/WhatsFav.git
   cd WhatsFav
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

### Usage

1. **Start the backend server:**
   ```sh
   cd backend
   npm start
   ```

2. **Start the frontend development server:**
   ```sh
   cd ../frontend
   npm start
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
WhatsFav/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

## API Endpoints

### Film Routes
- **GET /api/films**: Retrieve all films
- **GET /api/films/:id**: Retrieve a single film by ID
- **POST /api/films**: Add a new film
- **PUT /api/films/:id**: Update a film by ID
- **DELETE /api/films/:id**: Delete a film by ID

### User Routes
- **GET /api/users**: Retrieve all users
- **GET /api/users/:id**: Retrieve a single user by ID
- **POST /api/users**: Register a new user
- **PUT /api/users/:id**: Update a user by ID
- **DELETE /api/users/:id**: Delete a user by ID

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Thanks

Thanks my buddy for collecting the data: Photographer <a href ='https://github.com/Alivan-1502'>M.Ali Van </a>

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Doguhannilt - [GitHub Profile](https://github.com/Doguhannilt)

Project Link: [https://github.com/Doguhannilt/WhatsFav](https://github.com/Doguhannilt/WhatsFav)
