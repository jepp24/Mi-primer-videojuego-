import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePreview from './components/HomePreview.jsx'

const Main = () => {
  const [showPreview, setShowPreview] = useState(true);

  if (showPreview) {
    return <HomePreview onBack={() => setShowPreview(false)} />;
  }

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
