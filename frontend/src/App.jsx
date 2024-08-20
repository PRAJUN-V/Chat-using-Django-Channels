import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatComponent from './pages/ChatComponent';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:roomName" element={<ChatComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
