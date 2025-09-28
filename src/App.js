// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import AuthCallback from './components/AuthCallback';
import UserForm from './components/UserForm';
import FileUpload from './components/FileUpload';
import ProcessingStatus from './components/ProcessingStatus';
import TemplateGuide from './components/TemplateGuide';
import Instructions from './components/Instructions';
import ApiService from './services/apiService';
import './App.css';

/**
 * Main authenticated application component
 */
function AuthenticatedApp() {
  const { user, logout, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('form');
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    phoneNumber: '',
    linkedInUrl: '',
    templatesFolderPath: '',
    templateFiles: [],
    resumeFiles: []
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [processingResult, setProcessingResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMethod, setProcessingMethod] = useState('upload'); // Default to upload method

  // Clear form data
  const handleClearForm = () => {
    setUserInfo({
      fullName: '',
      phoneNumber: '',
      linkedInUrl: '',
      templatesFolderPath: '',
      templateFiles: [],
      resumeFiles: []
    });
    setSelectedFile(null);
  };

  // Validate form before processing
  const validateForm = () => {
    const errors = [];

    if (!userInfo.fullName.trim()) {
      errors.push('Full Name is required');
    }

    if (!userInfo.phoneNumber.trim()) {
      errors.push('Phone Number is required');
    }

    if (!selectedFile) {
      errors.push('Excel file is required');
    }

    // Validate based on processing method
    if (processingMethod === 'folder') {
      if (!userInfo.templatesFolderPath.trim()) {
        errors.push('Templates Folder Path is required for folder method');
      }
    } else {
      // Upload method validation
      if (!userInfo.templateFiles || userInfo.templateFiles.length === 0) {
        errors.push('At least one template file is required for upload method');
      }
      if (!userInfo.resumeFiles || userInfo.resumeFiles.length === 0) {
        errors.push('At least one resume file is required for upload method');
      }
    }

    return errors;
  };

  // Handle email processing with authentication
  const handleProcessEmails = async () => {
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      alert('Please fix the following errors:\n' + validationErrors.join('\n'));
      return;
    }

    setIsProcessing(true);
    setProcessingResult(null);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fullName', userInfo.fullName);
      formData.append('phoneNumber', userInfo.phoneNumber);
      formData.append('linkedInUrl', userInfo.linkedInUrl || '');
      formData.append('processingMethod', processingMethod);

      if (processingMethod === 'folder') {
        formData.append('templatesFolderPath', userInfo.templatesFolderPath);
      } else {
        // Add uploaded files
        if (userInfo.templateFiles) {
          userInfo.templateFiles.forEach(file => {
            formData.append('templateFiles', file);
          });
        }
        if (userInfo.resumeFiles) {
          userInfo.resumeFiles.forEach(file => {
            formData.append('resumeFiles', file);
          });
        }
      }

      // Process emails using authenticated API service
      const result = await ApiService.processEmails(formData);

      setProcessingResult(result);
      setActiveTab('status');

      console.log('Processing completed:', result);

    } catch (error) {
      console.error('Processing failed:', error);

      // Handle authentication errors
      if (error.status === 401) {
        alert('Your session has expired. Please log in again.');
        logout();
        return;
      }

      // Create error result for display
      const errorResult = {
        totalProcessed: 0,
        successCount: 0,
        errorCount: 1,
        errors: [error.message || 'Processing failed. Please try again.'],
        warnings: [],
        missingTemplates: [],
        missingResumes: [],
        helpText: 'Check your form inputs and try again. Ensure all required fields are filled and your Excel file is properly formatted.'
      };

      setProcessingResult(errorResult);
      setActiveTab('status');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle navigation to different tabs
  const handleNavigateToTab = (tabName) => {
    setActiveTab(tabName);
  };

  if (authLoading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Loading application...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header with user info and logout */}
      <header className="app-header">
        <div className="header-content">
          <h1>Cold Email Automation</h1>
          <div className="user-section">
            <span className="user-email">Signed in as: {user?.email}</span>
            <button className="logout-button" onClick={logout}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Application Form
        </button>
        <button
          className={`tab-button ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          Processing Status
        </button>
        <button
          className={`tab-button ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          Template Guide
        </button>
        <button
          className={`tab-button ${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        {activeTab === 'form' && (
          <div className="combined-form-section">
            {/* User Form Section */}
            <UserForm
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              onClearForm={handleClearForm}
              processingMethod={processingMethod}
            />

            {/* File Upload Section */}
            <div className="file-upload-wrapper">
              <FileUpload
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                isProcessing={isProcessing}
                processingMethod={processingMethod}
                setProcessingMethod={setProcessingMethod}
              />

              {/* Process Button */}
              <div className="process-section">
                <button
                  className="process-button"
                  onClick={handleProcessEmails}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="button-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    'Generate Email Drafts'
                  )}
                </button>

                {isProcessing && (
                  <p className="processing-note">
                    This may take a few minutes depending on the number of contacts...
                  </p>
                )}

                {/* Show current method and file counts */}
                <div className="process-summary">
                  <small>
                    <strong>Method:</strong> {processingMethod === 'folder' ? 'Folder Path' : 'File Upload'}
                    {processingMethod === 'upload' && (
                      <>
                        <br />
                        <strong>Files:</strong> {userInfo.templateFiles?.length || 0} templates, {userInfo.resumeFiles?.length || 0} resumes
                      </>
                    )}
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <ProcessingStatus
            result={processingResult}
            onNavigateToTab={handleNavigateToTab}
          />
        )}

        {activeTab === 'templates' && <TemplateGuide />}

        {activeTab === 'instructions' && <Instructions />}
      </main>
    </div>
  );
}

/**
 * Main App component with routing and authentication
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* OAuth callback routes */}
          <Route path="/auth/success" element={<AuthCallback />} />
          <Route path="/auth/error" element={<AuthCallback />} />

          {/* Main application route */}
          <Route path="/*" element={<AppWithAuth />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

/**
 * Wrapper component that handles authentication state
 */
function AppWithAuth() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  return isAuthenticated ? <AuthenticatedApp /> : <Login />;
}

export default App;