# E-commerce Platform (FastAPI & React)

A full-stack e-commerce web application designed to demonstrate the integration of a high-performance Python backend with a modern JavaScript frontend. This project serves as a laboratory for building scalable REST APIs and responsive user interfaces.

## Tech Stack

### Backend
* **Python 3.10+**
* **FastAPI**: High-performance web framework for building APIs.
* **Uvicorn**: ASGI web server implementation.
* *(Database technologies to be defined)*

### Frontend
* **Node.js 18+**
* **React**: JavaScript library for building user interfaces.
* *(Additional frontend tooling to be defined)*

## Project Structure

```text
fastapi-react-lab/
├── backend/            # FastAPI source code, routing, and models
├── frontend/           # React frontend application (upcoming)
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
* Python 3.10 or higher
* Node.js 18 or higher
* Git

### Backend Setup

1. Navigate to the project root or backend directory (depending on your setup):
   ```bash
   # cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # Linux/macOS
   # source venv/bin/activate
   ```

3. Install dependencies (once `requirements.txt` is available):
   ```bash
   # pip install -r requirements.txt
   ```

4. Run the development server:
   ```bash
   uvicorn main:app --reload
   ```
   The API will be available at `http://localhost:8000`. 
   Interactive API documentation (Swagger UI) is automatically generated at `http://localhost:8000/docs`.

### Frontend Setup

*(Frontend initialization is currently pending. Once configured, standard commands will apply:)*

```bash
cd frontend
npm install
npm run dev
```

## Roadmap

- [ ] Initialize FastAPI backend structure
- [ ] Setup database and ORM configurations
- [ ] Implement product catalog endpoints (GET)
- [ ] Initialize React frontend application
- [ ] Develop core UI components and layout
- [ ] Integrate frontend with backend REST API
- [ ] Implement shopping cart functionality
