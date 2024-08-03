

# Next.js

## Requirements

Before running this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later) or [yarn](https://yarnpkg.com/) (version 1.x or later)
- [Docker](https://www.docker.com/) (for running with Docker)
- [Docker Compose](https://docs.docker.com/compose/) (for running with Docker)

## Getting Started

Follow the steps below to set up and run the project.

### 1. Clone the Repository

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/fktona/lightbraincm-task.git
cd lightbraincm-task
```

### Running the Project Locally (Without Docker)

### 2. Install Dependencies

Install the project dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### 4. Open the App in Your Browser

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Running the Project with Docker

### 2. Build the Docker Image

Build the Docker image using Docker Compose:

```bash
docker-compose build
```

### 3. Run the Docker Container

Start the Docker container:

```bash
docker-compose up
```

### 4. Open the App in Your Browser

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will be served by the Docker container.

## Additional Commands

### Stopping the Docker Container

To stop the Docker container, run:

```bash
docker-compose down
```

### Rebuilding the Docker Image

If you make changes to the Dockerfile or `docker-compose.yml` and need to rebuild the Docker image, run:

```bash
docker-compose up --build
```


### Linting and Formatting

To lint the project using ESLint:

```bash
npm run lint
# or
yarn lint
```

To format the code using Prettier:

```bash
npm run format
# or
yarn format
```



