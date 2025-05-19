import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/login" element={
          !isAuthenticated ? (
            <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
          ) : (
            <Navigate to="/chat" replace />
          )
        } />
        <Route path="/signup" element={
          !isAuthenticated ? (
            <Signup setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
          ) : (
            <Navigate to="/chat" replace />
          )
        } />
        <Route
          path="/chat"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Chat user={user} onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/chat" : "/login"} replace />
          }
        />
      </Routes>
    </div>
  );
}

export default App; 