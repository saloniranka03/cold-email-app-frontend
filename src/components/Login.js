// frontend/src/components/Login.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * Login component that handles Gmail authentication
 */
function Login() {
  const { login, loading, error, clearError } = useAuth();

  const handleLogin = () => {
    clearError();
    login();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Cold Email Automation</h1>
         <div className="gmail-icon">
           <img
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 256 193'%3E%3Cpath fill='%23EA4335' d='M58.182 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z'/%3E%3Cpath fill='%2334A853' d='M197.818 192.05h40.727c9.658 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v98.91Z'/%3E%3Cpath fill='%23EA4335' d='m58.182 93.14-4.174-38.647L128 85.899l73.992-31.407-4.174 38.647L128 141.447l-69.818-48.307Z'/%3E%3Cpath fill='%23FBBC04' d='M197.818 17.455V93.14L256 49.504V26.181c0-15.621-17.8-24.564-30.237-15.21L197.818 17.455Z'/%3E%3Cpath fill='%23C5221F' d='m0 49.504 26.896 20.07L58.182 93.14V17.454L30.237 10.97C17.8 1.618 0 10.56 0 26.18v23.324Z'/%3E%3C/svg%3E"
             alt="Gmail"
             className="gmail-logo"
           />
         </div>
        </div>

        <div className="login-content">
          <h2>Gmail Authentication Required</h2>
          <p>To create email drafts in your Gmail account, you need to authenticate with Google.</p>

          <div className="login-features">
            <h3>This app will help you:</h3>
            <ul>
              <li>Process Excel files with contact information</li>
              <li>Generate personalized email drafts</li>
              <li>Attach role-specific resumes automatically</li>
              <li>Create drafts directly in your Gmail account</li>
            </ul>
          </div>

          <div className="login-permissions">
            <h3>Required Permissions:</h3>
            <div className="permission-item">
              <span className="permission-icon">✉️</span>
              <div>
                <strong>Gmail Compose</strong>
                <p>Create email drafts in your Gmail account</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="login-error">
              <span className="error-icon">!</span>
              <div>
                <strong>Authentication Error</strong>
                <p>{error}</p>
              </div>
            </div>
          )}

          <button
            className="login-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <span>Connecting...</span>
            ) : (
              <>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%23ffffff' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23ffffff' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23ffffff' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
                  alt="Google"
                  className="google-icon"
                />
                Sign in with Google
              </>
            )}
          </button>

          <div className="login-footer">
            <p>
              <small>
                By signing in, you agree to allow this application to create email drafts in your Gmail account.
                No emails will be sent automatically - all emails are created as drafts for your review.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="login-instructions">
        <h3>How it works:</h3>
        <div className="instruction-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Authenticate</h4>
              <p>Sign in with your Google account to grant access to Gmail</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Upload & Configure</h4>
              <p>Fill in your information and upload your Excel contact file</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Generate Drafts</h4>
              <p>Process your contacts and create personalized email drafts</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Review & Send</h4>
              <p>Review drafts in Gmail and send when ready</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .login-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 480px;
          width: 100%;
          margin-right: 40px;
        }

        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .login-header h1 {
          margin: 0 0 20px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 26px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          letter-spacing: 0.5px;
        }

        .gmail-icon {
          margin-bottom: 15px;
          display: flex;
          justify-content: center;
        }

        .gmail-logo {
          width: 64px;
          height: 64px;
          transition: transform 0.3s ease;
        }

        .gmail-logo:hover {
          transform: scale(1.1);
        }

        .login-content h2 {
          color: #333;
          margin-bottom: 10px;
          font-size: 20px;
          text-align: center;
        }

        .login-content > p {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .login-features, .login-permissions {
          margin-bottom: 25px;
        }

        .login-features h3, .login-permissions h3 {
          color: #333;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .login-features ul {
          color: #666;
          padding-left: 20px;
        }

        .login-features li {
          margin-bottom: 5px;
        }

        .permission-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .permission-icon {
          font-size: 20px;
        }

        .permission-item strong {
          color: #333;
          display: block;
          margin-bottom: 2px;
        }

        .permission-item p {
          color: #666;
          margin: 0;
          font-size: 14px;
        }

        .login-error {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: #fee;
          border: 1px solid #fcc;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .error-icon {
          color: #d32f2f;
          font-size: 20px;
        }

        .login-error strong {
          color: #d32f2f;
          display: block;
          margin-bottom: 2px;
        }

        .login-error p {
          color: #c62828;
          margin: 0;
          font-size: 14px;
        }

        .login-button {
          width: 100%;
          padding: 12px 20px;
          background: #4285f4;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: background-color 0.2s;
        }

        .login-button:hover:not(:disabled) {
          background: #3367d6;
        }

        .login-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .google-icon {
          width: 20px;
          height: 20px;
        }

        .login-footer {
          margin-top: 20px;
          text-align: center;
        }

        .login-footer small {
          color: #666;
          line-height: 1.4;
        }

        .login-instructions {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 30px;
          max-width: 400px;
          backdrop-filter: blur(10px);
        }

        .login-instructions h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .instruction-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .step-number {
          background: #4285f4;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
        }

        .step-content h4 {
          color: #333;
          margin: 0 0 5px 0;
          font-size: 16px;
        }

        .step-content p {
          color: #666;
          margin: 0;
          font-size: 14px;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .login-container {
            flex-direction: column;
            gap: 30px;
          }

          .login-card {
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;