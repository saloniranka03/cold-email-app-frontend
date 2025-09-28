import React, { useRef, useState } from 'react';

/**
 * Enhanced file upload component supporting both folder path and file browsing methods.
 * Preserves existing functionality while adding new file upload capabilities.
 */
function FileUpload({ selectedFile, setSelectedFile, userInfo, setUserInfo, onSubmit, isProcessing, processingMethod, setProcessingMethod }) {
  const fileInputRef = useRef(null);
  const templateFilesRef = useRef(null);
  const resumeFilesRef = useRef(null);

  // State for file browsing method
  const [templateFiles, setTemplateFiles] = useState([]);
  const [resumeFiles, setResumeFiles] = useState([]);

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
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Handles template files selection
   */
  const handleTemplateFilesChange = (e) => {
    const files = Array.from(e.target.files).filter(file => file.name.toLowerCase().endsWith('.txt'));
    setTemplateFiles(files);
    if (files.length !== e.target.files.length) {
      alert('Only .txt files are allowed for templates. Other files were filtered out.');
    }
  };

  /**
   * Handles resume files selection
   */
  const handleResumeFilesChange = (e) => {
    const files = Array.from(e.target.files).filter(file => {
      const name = file.name.toLowerCase();
      return name.endsWith('.pdf') || name.endsWith('.docx');
    });
    setResumeFiles(files);
    if (files.length !== e.target.files.length) {
      alert('Only .pdf and .docx files are allowed for resumes. Other files were filtered out.');
    }
  };

  /**
   * Removes template file
   */
  const removeTemplateFile = (index) => {
    setTemplateFiles(prev => prev.filter((_, i) => i !== index));
  };

  /**
   * Removes resume file
   */
  const removeResumeFile = (index) => {
    setResumeFiles(prev => prev.filter((_, i) => i !== index));
  };

  /**
   * Clears all template files
   */
  const clearAllTemplateFiles = () => {
    setTemplateFiles([]);
    if (templateFilesRef.current) {
      templateFilesRef.current.value = '';
    }
  };

  /**
   * Clears all resume files
   */
  const clearAllResumeFiles = () => {
    setResumeFiles([]);
    if (resumeFilesRef.current) {
      resumeFilesRef.current.value = '';
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

  // Expose template and resume files to parent component
  React.useEffect(() => {
    if (setUserInfo) {
      setUserInfo(prev => ({
        ...prev,
        templateFiles,
        resumeFiles
      }));
    }
  }, [templateFiles, resumeFiles, setUserInfo]);

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

      {/* Excel File Upload Area */}
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

      {/* Processing Method Selection */}
      <div className="processing-method-selection">
        <h3>Choose Processing Method:</h3>
        <div className="method-options">
          <label className="method-option">
            <input
              type="radio"
              name="processingMethod"
              value="folder"
              checked={processingMethod === 'folder'}
              onChange={(e) => setProcessingMethod(e.target.value)}
            />
            <span className="method-label">
              <strong>Folder Path Method</strong>
              <small>Use existing templates folder on your computer</small>
            </span>
          </label>

          <label className="method-option">
            <input
              type="radio"
              name="processingMethod"
              value="upload"
              checked={processingMethod === 'upload'}
              onChange={(e) => setProcessingMethod(e.target.value)}
            />
            <span className="method-label">
              <strong>File Upload Method</strong>
              <small>Browse and upload individual template and resume files</small>
            </span>
          </label>
        </div>
      </div>

      {/* Conditional Content Based on Method */}
      {processingMethod === 'folder' ? (
        /* Folder Path Input */
        <div className="folder-path-section">
          <h3>Templates Folder Path:</h3>
          <input
            type="text"
            placeholder="/Users/username/Desktop/JobEmailerFiles"
            value={userInfo?.templatesFolderPath || ''}
            onChange={(e) => setUserInfo?.(prev => ({ ...prev, templatesFolderPath: e.target.value }))}
            className="folder-path-input"
          />
          <small className="field-help">
            Absolute path to folder containing your email templates and resume files
          </small>
        </div>
      ) : (
        /* File Upload Sections */
        <div className="file-upload-sections">
          {/* Template Files Upload */}
          <div className="upload-section">
            <div className="section-header">
              <h3>Template Files (.txt)</h3>
              {templateFiles.length > 0 && (
                <button
                  type="button"
                  className="clear-files-button"
                  onClick={clearAllTemplateFiles}
                >
                  Clear All ({templateFiles.length})
                </button>
              )}
            </div>

            <div className="file-browse-area">
              <input
                ref={templateFilesRef}
                type="file"
                multiple
                accept=".txt"
                onChange={handleTemplateFilesChange}
                className="file-browse-input"
              />
              <div className="browse-instructions">
                <p>Select template files (.txt) containing role names in filename</p>
                <small>Examples: "hello_fse.txt", "backend_template.txt", "ml.txt"</small>
              </div>
            </div>

            {templateFiles.length > 0 && (
              <div className="file-list">
                <h4>Selected Template Files:</h4>
                {templateFiles.map((file, index) => (
                  <div key={index} className="file-item">
                    <span className="file-icon">📄</span>
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">({formatFileSize(file.size)})</span>
                    <button
                      type="button"
                      className="remove-file-button"
                      onClick={() => removeTemplateFile(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resume Files Upload */}
          <div className="upload-section">
            <div className="section-header">
              <h3>Resume Files (.pdf, .docx)</h3>
              {resumeFiles.length > 0 && (
                <button
                  type="button"
                  className="clear-files-button"
                  onClick={clearAllResumeFiles}
                >
                  Clear All ({resumeFiles.length})
                </button>
              )}
            </div>

            <div className="file-browse-area">
              <input
                ref={resumeFilesRef}
                type="file"
                multiple
                accept=".pdf,.docx"
                onChange={handleResumeFilesChange}
                className="file-browse-input"
              />
              <div className="browse-instructions">
                <p>Select resume files (.pdf, .docx) containing role names in filename</p>
                <small>Examples: "john_fse_resume.pdf", "backend_cv.docx", "my_ml_resume.pdf"</small>
              </div>
            </div>

            {resumeFiles.length > 0 && (
              <div className="file-list">
                <h4>Selected Resume Files:</h4>
                {resumeFiles.map((file, index) => (
                  <div key={index} className="file-item">
                    <span className="file-icon">📄</span>
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">({formatFileSize(file.size)})</span>
                    <button
                      type="button"
                      className="remove-file-button"
                      onClick={() => removeResumeFile(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* File Matching Info */}
          <div className="matching-info">
            <h4>🎯 Flexible File Matching:</h4>
            <div className="matching-examples">
              <div className="matching-example">
                <strong>For role "FSE":</strong>
                <ul>
                  <li>Templates: "hello_fse.txt", "xxxfsexxx.txt", "MyFSETemplate.txt" ✅</li>
                  <li>Resumes: "john_fse_resume.pdf", "fsexxx.docx", "SaloFSE.pdf" ✅</li>
                </ul>
              </div>
              <div className="matching-note">
                <small>
                  <strong>Note:</strong> Files just need to contain the role name anywhere in the filename (case-insensitive).
                  Attached resumes will use standardized naming: "Full_Name_Role.extension"
                </small>
              </div>
            </div>
          </div>
        </div>
      )}

      {processingMethod === 'upload' && (
        <div className="upload-summary">
          <small>
            Ready to process: {templateFiles.length} template files, {resumeFiles.length} resume files
          </small>
        </div>
      )}

    </div>
  );
}

export default FileUpload;