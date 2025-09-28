// frontend/src/components/UserForm.js
import React from 'react';

/**
 * User information form component.
 * Collects required user details for email template processing.
 * Enhanced with form clearing functionality and conditional folder path.
 */
function UserForm({ userInfo, setUserInfo, onClearForm, processingMethod }) {

  /**
   * Handles input field changes and updates parent state
   */
  const handleInputChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Validates phone number format (basic validation)
   */
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
    return phoneRegex.test(phone);
  };

  /**
   * Handles form clearing with confirmation
   */
  const handleClearForm = () => {
    if (window.confirm('Are you sure you want to clear all form fields? This action cannot be undone.')) {
      onClearForm();
    }
  };

  return (
    <div className="user-form">
      <div className="form-header">
        <h2>Your Information</h2>
        <button
          type="button"
          className="clear-form-button"
          onClick={handleClearForm}
          title="Clear all form fields"
        >
          Clear Form
        </button>
      </div>

      <p className="form-description">
        This information will be used in your email templates and signatures.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="e.g., Saloni Ranka"
            value={userInfo.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            required
          />
          <small className="field-help">
            Your name will appear in email subjects and signatures. Also used for standardized resume attachment naming.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="e.g., +1-650-789-4084"
            value={userInfo.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className={userInfo.phoneNumber && !validatePhoneNumber(userInfo.phoneNumber) ? 'error' : ''}
            required
          />
          <small className="field-help">
            Include country code for international numbers
          </small>
          {userInfo.phoneNumber && !validatePhoneNumber(userInfo.phoneNumber) && (
            <small className="error-text">Please enter a valid phone number</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="linkedInUrl">LinkedIn Profile URL</label>
          <input
            type="url"
            id="linkedInUrl"
            placeholder="https://www.linkedin.com/in/yourprofile"
            value={userInfo.linkedInUrl}
            onChange={(e) => handleInputChange('linkedInUrl', e.target.value)}
          />
          <small className="field-help">
            Optional - will be added as a hyperlink in your email signature
          </small>
        </div>

        {/* Only show folder path when using folder method */}
        {processingMethod === 'folder' && (
          <div className="form-group full-width">
            <label htmlFor="templatesFolderPath">
              Templates & Resumes Folder Path <span className="required">*</span>
            </label>
            <input
              type="text"
              id="templatesFolderPath"
              placeholder="/Users/username/Desktop/JobEmailerFiles"
              value={userInfo.templatesFolderPath}
              onChange={(e) => handleInputChange('templatesFolderPath', e.target.value)}
              required
            />
            <small className="field-help">
              Absolute path to folder containing your email templates and resume files
            </small>
          </div>
        )}
      </div>

      <div className="form-tips">
        <h3>💡 Quick Tips:</h3>
        <ul>
          <li><strong>Flexible File Names:</strong> Template files can be named like FSE.txt, fse.txt, or template_FSE.txt</li>
          <li><strong>Resume Finding:</strong> Any .pdf/.docx file containing the role name will be found (case doesn't matter)</li>
          <li><strong>Standardized Attachments:</strong> Resume files are always attached as Full_Name_Role.extension format</li>
          <li><strong>Placeholders:</strong> Use {`{NAME}`}, {`{POSITION}`}, {`{USER_NAME}`}, {`{PHONE}`}, {`{LINKEDIN}`} in templates</li>
          <li><strong>LinkedIn URL:</strong> Only appears in emails if provided</li>
          {processingMethod === 'upload' && (
            <li><strong>File Upload:</strong> Upload template (.txt) and resume (.pdf/.docx) files directly through the interface</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UserForm;