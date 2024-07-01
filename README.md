# GeoWeaver Chatbot

GeoWeaver Chatbot is a React-based chatbot application designed to assist with wildfire forecasting. The chatbot uses a pre-trained language model fine-tuned with wildfire data to generate scientifically supported answers. The project leverages the DeepChat library for the chat interface and integrates with a backend API for question answering.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Responsive chat interface with Bootstrap
- Sidebar for message history
- Integration with a backend API for wildfire forecasting
- Full-screen layout similar to ChatGPT

## Prerequisites
- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/geoweaver-chatbot.git
   cd geoweaver-chatbot
   ```

2. Install dependencies:
  ```bash
  cd frontend
  npm install
  cd ../backend
  pip install -r requirements.txt
  ```

## Running the Application

### Set environment variable for OpenSSL (if needed):

- Unix-based systems (macOS, Linux):
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

- Windows:
```cmd
set NODE_OPTIONS=--openssl-legacy-provider
```

### Start the application:

```bash
npm start
```

### Open your browser and navigate to http://localhost:3000.

## Folder Structure

```bash
geoweaver-chatbot/
├── backend/                # Backend server (Flask)
│   ├── app.py              # Main backend script
│   ├── requirements.txt    # Backend dependencies
├── frontend/               # Frontend application (React)
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.js
│   │   │   ├── Chatbot.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── .env
├── README.md
```

## Contributing

We welcome contributions from the community! Follow these steps to set up your local development environment and start contributing:

Fork the repository: Click the "Fork" button on the upper right corner of the repository page.

- Clone your fork:

```bash
git clone https://github.com/yourusername/geoweaver-chatbot.git
cd geoweaver-chatbot
```

Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

Make your changes:

Ensure your code follows the project's coding standards.

Update documentation as needed.

Commit your changes:

```bash
git add .
git commit -m "Add your descriptive commit message"
```

Push to your fork:

```bash
git push origin feature/your-feature-name
```

Create a Pull Request: Go to the repository in your GitHub account and click the "New Pull Request" button.

## License

This project is licensed under the Apache 2.0 License. See the LICENSE file for more details.
