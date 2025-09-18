import { useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import "prismjs"
import "prismjs/components/prism-javascript"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState('')

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:5000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      setReview('Error: Could not fetch review. Is the backend running?')
    }
  }

  return (
    <>
      <h1 className="site-heading">CODECHEKR</h1>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code =>
                window.Prism
                  ? window.Prism.highlight(code, window.Prism.languages.javascript, "javascript")
                  : code
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review"
            style={{ cursor: "pointer", marginTop: "10px", padding: "8px", background: "#222", color: "#fff", borderRadius: "4px", textAlign: "center" }}
          >Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
