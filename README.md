# Social Media Content Analysis (Full Stack MERN Project)

## Project Description
This project extracts text from images and pdfs using OCR and pdf-Parse and analyze the extracted text. 
It visualizes sentiment data and provides engagement suggestions for social media content.

## Features
- User Authentication (Login / Register) using JWT
- Image Upload and OCR Text Extraction
- PDF Upload and Pdf-parsing 
- All uploaded images and PDF stores to cloud (cloudinary) 
- Sentiment Analysis (Positive, Negative, Neutral)
- Data Visualization using Charts
- Engagement Recommendation System
- Dashboard for User Documents
- History page to view all uploads

## Tech Stack
Frontend: React + vite, Bootstrap, Chart.js  
Backend: Node.js, Express.js  
Database: MongoDB  
OCR: Tesseract.js  
Sentiment Analysis: sentiment npm package  
Cloud Image upload: multer + cloudinary

## Installation

### 1. Clone the Repository

open terminal and paste: 
git clone https://github.com/abhishekfalke/Social_media_content_analyzer.git

### 2. backend setup ('http://localhost:8080')

cd backend
npm install
node app.js

### 3. frontend setup ('http://localhost:5173')

cd frontend
npm install
npm run dev
open browser and hit : http://localhost:5173

## Deployed application link

frontend link: https://social-media-content-analyzer-1-seven.vercel.app/
backend link: https://social-media-content-analyzer-31k6.onrender.com/





