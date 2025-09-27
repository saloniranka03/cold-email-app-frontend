# Cold Email Frontend

React web application for the Cold Email Job Application Automation system.

## Features

- Google OAuth authentication
- Drag-and-drop Excel file upload
- Flexible template and resume management
- Real-time processing status
- Comprehensive template guide
   

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install

### Configure environment:

Edit .env with your backend API URL under REACT_APP_API_URL


### Start development server:

npm start


Open browser: http://localhost:3000


## Production Build
###  Build for production
npm run build

### Serve built files
npx serve -s build

## Docker Deployment
###  Build image
docker build -t cold-email-frontend

###  Run container
docker run -p 3000:80 cold-email-frontend

## Configuration
Environment variables:
REACT_APP_API_BASE_URL - Backend API URL

## Available Scripts
* npm start - Start development server
* npm run build - Build for production
* npm test - Run tests
* npm run build:docker - Build Docker image

## Backend Integration
This frontend expects a backend API running with the following endpoints:
* /api/auth/* - Authentication endpoints
* /api/email/* - Email processing endpoints


Default backend URL: http://localhost:8080

