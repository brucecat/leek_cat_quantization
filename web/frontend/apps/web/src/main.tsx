import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log("glob", import.meta.glob);

const testFiles = import.meta.glob('./*', { eager: true })
console.log('testFiles: ', testFiles);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)