# CodeChekr 

An **AI-powered Code Review Application** built with **React, Node.js, and Google Gemini API**.  
This project allows developers to paste their code and receive instant feedback, suggestions, and improvements from an AI model.

---

## 🚀 Features
- Paste your code in a clean editor with syntax highlighting.
- Get AI-powered review and suggestions.
- Real-time responses using Google Gemini API.
- Full-stack implementation (React + Node.js).
- Markdown & syntax-highlighted output.

---

## 🛠️ Tech Stack
**Frontend:**
- React 19
- Vite
- PrismJS / Highlight.js
- Axios

**Backend:**
- Node.js
- Express.js
- Google Generative AI SDK (`@google/generative-ai`)
- dotenv, cors

---

## ⚙️ Project Flow
1. User pastes code in the **React frontend**.
2. Frontend sends the code to the **Node.js backend** via REST API.
3. Backend calls the **Google Gemini API** with the code.
4. Gemini returns feedback → backend → frontend → displayed with formatting.

---

## 📂 Project Structure
code-review/
│── Frontend/ # React frontend
│── BackEnd/ # Node.js backend
│── .env # Environment variables (not committed)


---

## 🔑 Environment Variables
Create a `.env` file in the **BackEnd** folder:



PORT=5000
GEMINI_API_KEY=your_api_key_here


Create a `.env` file in the **Frontend** folder:



VITE_API_URL=http://localhost:5000


---

## 🖥️ Installation & Setup

### Clone the repository
```bash
git clone https://github.com/hamzasiddiqui-coder/codechekr.git
cd codechekr

Backend Setup
cd BackEnd
npm install
npm start

Frontend Setup
cd Frontend
npm install
npm run dev

🌐 Usage

Open http://localhost:5173
 for frontend (Vite default).

Backend runs on http://localhost:5000
.

Paste code in the editor → click review → get AI suggestions.



✨ Author

👤 Hamza Siddiqui
📧 siddiqui.hamza00001@gmail.com

