// frontend/src/components/FileUpload.js
import React, { useRef } from 'react';

/**
 * File upload component for Excel files containing contact information.
 * Provides drag-and-drop functionality, file validation, and clear functionality.
 */
function FileUpload({ selectedFile, setSelectedFile }) {
  const fileInputRef = useRef(null);

  /**
   * Handles file selection from input or drag-and-drop
   */
  const handleFileSelect = (file) => {
    if (file && isValidExcelFile(file)) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid Excel file (.xlsx)');
    }
  };

  /**
   * Validates if the selected file is an Excel file
   */
  const isValidExcelFile = (file) => {
    const validTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    return validTypes.includes(file.type) || file.name.endsWith('.xlsx');
  };

  /**
   * Handles drag over event
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  /**
   * Handles drag leave event
   */
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
  };

  /**
   * Handles file drop event
   */
  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  /**
   * Triggers file input click
   */
  const handleClick = () => {
    if (!selectedFile) {
      fileInputRef.current.click();
    }
  };

  /**
   * Handles file input change
   */
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  /**
   * Clears the selected file and resets file input
   */
  const handleClearFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    // Reset the file input value to allow re-selecting the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Formats file size for display
   */
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="file-upload-section">
      <div className="upload-header">
        <h2>Excel File Upload</h2>
        {selectedFile && (
          <button
            type="button"
            className="clear-file-button"
            onClick={handleClearFile}
            title="Clear selected file"
          >
            Clear File
          </button>
        )}
      </div>

      <p className="upload-description">
        Upload your Excel file containing contact information with columns: Name, Email Id, and Role
      </p>

      {/* File Upload Area */}
      <div
        className={`file-upload-area ${selectedFile ? 'has-file' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />

        {selectedFile ? (
          <div className="file-info">
            <div className="file-icon">📄</div>
            <div className="file-details">
              <div className="file-name">{selectedFile.name}</div>
              <div className="file-size">{formatFileSize(selectedFile.size)}</div>
            </div>
            <button
              className="remove-file"
              onClick={handleClearFile}
              title="Remove file"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="upload-placeholder">
            <div className="upload-icon">📁</div>
            <p>Click to browse or drag and drop your Excel file here</p>
            <small>Supported formats: .xlsx (max 10MB)</small>
          </div>
        )}
      </div>

      {/* Excel Format Example */}
      <div className="excel-format-guide">
        <h3>Expected Excel Format:</h3>
        <div className="format-table">
          <div className="table-header">
            <div className="table-cell">Name</div>
            <div className="table-cell">Email Id</div>
            <div className="table-cell">Role</div>
          </div>
          <div className="table-row">
            <div className="table-cell">John Doe</div>
            <div className="table-cell">john.doe@company.com</div>
            <div className="table-cell">FSE</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Jane Smith</div>
            <div className="table-cell">jane.smith@firm.com</div>
            <div className="table-cell">Backend</div>
          </div>
        </div>
        <small>
          <strong>Note:</strong> Name is optional, but Email Id and Role are required.
          The first row should contain headers. Role names must match your template/resume files.
        </small>
      </div>
    </div>
  );
}

export default FileUpload;