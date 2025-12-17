## Setup Instructions

### 1) clone the repository
 
   	git clone https://github.com/<your-username>/Task-Manager.git
   	cd Task-Manager

### 2) Backend setup
	
-	Install dependencies

     		cd backend
     		npm install
- 	Create .env file inside backend folder

			PORT = 5000
     		MONGO_URI = your_mongodb_atlas_connection_string
   
-   Start Backend

     		npm start
     		backend will run on http://localhost:5000
   
### 3) Frontend setup

-	Install dependencies

   			cd frontend
     		npm install
   
-	Create .env file inside frontend folder

     		REACT_APP_API_URL = http://localhost:5000  #for using local backend
							or
     		REACT_APP_API_URL = your_backend_url #for using a deployed backend service
     
-	Start frontend

   			npm start
     		frontend will run on http://localhost:3000

## API ENDPOINTS

| Method | Endpoint   | Description         |
|--------|------------|---------------------|
| POST   | /tasks     | Add a new task 		|
| GET    | /tasks     | Get all tasks 		|
| DELETE | /tasks/:id | Delete a task by ID |


## Deployment Details

### 1) Backend Deployment

- **Platform:** Render
- **Environment:** Node
- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Environment Variables:** `MONGO_URI`, `PORT`
- **Backend Live URL:** https://task-manager-backend-0t4n.onrender.com

### 2) Frontend Deployment
	
- **Platform:** Vercel
- **Framework:** Create React App
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Environment Variable:** `REACT_APP_API_URL`
- **Frontend Live URL:** https://task-manager-098.vercel.app/

## Features

- Add new tasks
- View all tasks
- Delete tasks
- Input validation
- Loading & error states
- Responsive UI
