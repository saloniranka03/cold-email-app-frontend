// frontend/src/components/AuthCallback.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * Component to handle OAuth callback success/error states
 */
function AuthCallback() {
  const { checkAuthStatus } = useAuth();
  const [status, setStatus] = useState('checking'); // checking, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const error = urlParams.get('error');
      const message = urlParams.get('message');

      if (error) {
          // User clicked "Back to safety" or cancelled
          setStatus('cancelled');
          setMessage('Authentication was cancelled');
          setTimeout(() => {
            window.location.href = '/'; // Redirect to home
          }, 2000);
      } else {
        // Success case - check auth status and redirect
        try {
          await checkAuthStatus();
          setStatus('success');
          setMessage('Authentication successful! Redirecting...');

          // Redirect to main app after 2 seconds
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } catch (error) {
          setStatus('error');
          setMessage('Failed to verify authentication');
        }
      }
    };

    handleCallback();
  }, [checkAuthStatus]);

  const handleRetry = () => {
    window.location.href = '/';
  };

  return (
    <div className="auth-callback-container">
      <div className="auth-callback-card">
        {status === 'checking' && (
          <div className="status-checking">
            <div className="spinner"></div>
            <h2>Verifying Authentication...</h2>
            <p>Please wait while we complete the authentication process.</p>
          </div>
        )}

        {status === 'success' && (
          <div className="status-success">
            <div className="success-icon">✓</div>
            <h2>Authentication Successful!</h2>
            <p>{message}</p>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="status-error">
            <div className="error-icon">!</div>
            <h2>Authentication Failed</h2>
            <p>{message}</p>
            <button className="retry-button" onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .auth-callback-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .auth-callback-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 60px 40px;
          max-width: 480px;
          width: 100%;
          text-align: center;
        }

        .status-checking,
        .status-success,
        .status-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f0f0f0;
          border-top: 4px solid #4285f4;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .success-icon {
          width: 60px;
          height: 60px;
          background: #4caf50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bold;
        }

        .error-icon {
          width: 60px;
          height: 60px;
          background: #f44336;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bold;
        }

        h2 {
          color: #333;
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }

        p {
          color: #666;
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
        }

        .loading-bar {
          width: 100%;
          height: 4px;
          background: #f0f0f0;
          border-radius: 2px;
          overflow: hidden;
          margin-top: 10px;
        }

        .loading-progress {
          width: 0;
          height: 100%;
          background: #4285f4;
          border-radius: 2px;
          animation: progress 2s ease-in-out forwards;
        }

        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .retry-button {
          padding: 12px 24px;
          background: #4285f4;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .retry-button:hover {
          background: #3367d6;
        }

        @media (max-width: 568px) {
          .auth-callback-card {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default AuthCallback;