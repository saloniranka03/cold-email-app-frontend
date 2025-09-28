// frontend/src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Extract session from URL if present
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionParam = urlParams.get('session');

    if (sessionParam) {
      console.log('📋 Found session in URL parameter:', sessionParam);
      setSessionId(sessionParam);

      // Store in localStorage for persistence
      localStorage.setItem('session_id', sessionParam);

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);

      // Check auth status with this session
      checkAuthStatusWithSession(sessionParam);
    } else {
      // Try to get session from localStorage
      const storedSession = localStorage.getItem('session_id');
      if (storedSession) {
        console.log('📋 Found session in localStorage:', storedSession);
        setSessionId(storedSession);
        checkAuthStatusWithSession(storedSession);
      } else {
        checkAuthStatus();
      }
    }
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);

      console.log('🔍 Checking auth status...');
      console.log('🌐 API_BASE_URL:', API_BASE_URL);
      console.log('🍪 Document.cookie:', document.cookie);

      const response = await fetch(`${API_BASE_URL}/api/auth/status`, {
        method: 'GET',
        credentials: 'include', // Include cookies
      });

      console.log('📡 Auth status response:', {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Auth status data:', data);

        if (data.authenticated) {
          console.log('🎉 User is authenticated! Setting auth state...');
          setIsAuthenticated(true);
          setUser({
            email: data.email,
            userId: data.userId
          });
        } else {
          console.log('❌ User not authenticated according to backend');
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        const errorText = await response.text();
        console.log('❌ Auth status failed:', response.status, response.statusText);
        console.log('📄 Error response body:', errorText);
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('💥 Error checking auth status:', error);
      console.log('🔍 Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      setIsAuthenticated(false);
      setUser(null);
      console.log('Auth check failed (normal if not authenticated):', error.message);
    } finally {
      console.log('🏁 Auth check completed. Setting loading to false...');
      setLoading(false);
    }
  };

  const checkAuthStatusWithSession = async (sessionParam) => {
    try {
      setLoading(true);

      console.log('🔍 Checking auth status with session parameter:', sessionParam);

      const response = await fetch(`${API_BASE_URL}/api/auth/status?session=${sessionParam}`, {
        method: 'GET',
        credentials: 'include',
      });

      console.log('📡 Auth status response with session:', {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Auth status data with session:', data);

        if (data.authenticated) {
          console.log('🎉 User is authenticated with session! Setting auth state...');
          setIsAuthenticated(true);
          setUser({
            email: data.email,
            userId: data.userId
          });
          setSessionId(sessionParam);
        } else {
          console.log('❌ Session not valid');
          setIsAuthenticated(false);
          setUser(null);
          setSessionId(null);
          localStorage.removeItem('session_id');
        }
      } else {
        console.log('❌ Auth status failed with session');
        setIsAuthenticated(false);
        setUser(null);
        setSessionId(null);
        localStorage.removeItem('session_id');
      }
    } catch (error) {
      console.error('💥 Error checking auth status with session:', error);
      setIsAuthenticated(false);
      setUser(null);
      setSessionId(null);
      localStorage.removeItem('session_id');
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      setError(null);
      console.log('🚀 Starting login process...');
      console.log('🌐 Login API_BASE_URL:', API_BASE_URL);

      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('📡 Login response status:', response.status);
      console.log('📋 Login response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Login response data:', data);

        if (data.authUrl) {
          console.log('🔗 Redirecting to OAuth URL:', data.authUrl);
          // Redirect to Google OAuth
          window.location.href = data.authUrl;
        } else {
          throw new Error('No authorization URL received from server');
        }
      } else {
        const errorText = await response.text();
        console.error('❌ Login failed:', response.status, errorText);
        throw new Error(`Login failed: ${response.status} ${errorText}`);
      }
    } catch (error) {
      console.error('💥 Login error:', error);

      // Check if it's a CORS error
      if (error.message.includes('fetch')) {
        setError('Unable to connect to authentication server. Please check if the backend is running.');
      } else {
        setError('Failed to initiate login: ' + error.message);
      }
    }
  };

  const logout = async () => {
    try {
      setError(null);
      console.log('👋 Starting logout process...');

      const logoutUrl = sessionId
        ? `${API_BASE_URL}/api/auth/logout?session=${sessionId}`
        : `${API_BASE_URL}/api/auth/logout`;

      const response = await fetch(logoutUrl, {
        method: 'POST',
        credentials: 'include',
      });

      console.log('📡 Logout response:', response.status);

      if (response.ok) {
        console.log('✅ Logout successful');
        setIsAuthenticated(false);
        setUser(null);
        setSessionId(null);
        localStorage.removeItem('session_id');
        // Optionally reload the page to clear any app state
        window.location.reload();
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error('💥 Logout error:', error);
      setError('Failed to logout: ' + error.message);

      // Clear local state anyway
      setIsAuthenticated(false);
      setUser(null);
      setSessionId(null);
      localStorage.removeItem('session_id');
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    error,
    sessionId,
    login,
    logout,
    checkAuthStatus,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};