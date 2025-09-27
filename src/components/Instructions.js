// frontend/src/components/Instructions.js
import React from 'react';

/**
 * Instructions component providing comprehensive usage guide.
 * Updated to reflect flexible file naming and standardized attachment conventions.
 */
function Instructions() {
  return (
    <div className="instructions">
      <h2>How to Use Cold Email Automation</h2>

      <div className="instruction-section">
        <h3>🚀 Quick Start</h3>
        <ol className="numbered-list">
          <li><strong>Prepare your templates folder</strong> with email templates and resume files</li>
          <li><strong>Set up Gmail API</strong> credentials (see setup section below)</li>
          <li><strong>Fill in your information</strong> in the Application Form tab</li>
          <li><strong>Upload your Excel file</strong> with contact details</li>
          <li><strong>Click "Generate Email Drafts"</strong> to create personalized emails</li>
        </ol>
      </div>

      <div className="instruction-section">
        <h3>📁 Folder Structure Setup</h3>
        <div className="code-block">
          <pre>{`/your-templates-folder/
├── FSE.txt                    (Email template for FSE role)
├── backend_template.txt       (Email template for Backend role)
├── ML.txt                     (Email template for ML role)
├── resume_FSE.pdf            (Resume for FSE applications)
├── Saloni_Backend.pdf        (Resume for Backend applications)
├── my_ML_resume.docx         (Resume for ML applications)
└── ... (more role-specific files)`}</pre>
        </div>

        <div className="requirements">
          <h4>✨ Flexible File Naming (New!):</h4>
          <div className="naming-section">
            <h5>🗂 Email Templates (.txt files):</h5>
            <p>The system will find template files containing your role name (case-insensitive):</p>
            <ul>
              <li><code>FSE.txt</code> (exact match)</li>
              <li><code>fse.txt</code> (case-insensitive)</li>
              <li><code>template_FSE.txt</code> (with prefix)</li>
              <li><code>FSE_template.txt</code> (with suffix)</li>
              <li><code>backend-template.txt</code> (with separators)</li>
            </ul>
          </div>

          <div className="naming-section">
            <h5>📄 Resume Files (.pdf or .docx):</h5>
            <p><strong>Finding:</strong> System finds any resume file containing the role name:</p>
            <ul>
              <li><code>resume_FSE.pdf</code></li>
              <li><code>John_FSE.pdf</code></li>
              <li><code>fse_resume.docx</code></li>
              <li><code>my_FSE_cv.pdf</code></li>
              <li>Any file with the role name in it</li>
            </ul>

            <p><strong>Email Attachment:</strong> Always renamed to standard format:</p>
            <div className="attachment-format">
              <code>Full_Name_From_UI_Role.extension</code>
            </div>
            <div className="attachment-examples">
              <strong>Examples:</strong>
              <ul>
                <li>UI Name: "john smith" + Role: "FSE" → Attached as: <code>John_Smith_FSE.pdf</code></li>
                <li>UI Name: "saloni ranka" + Role: "Backend" → Attached as: <code>Saloni_Ranka_Backend.pdf</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="instruction-section">
        <h3>📊 Excel File Format</h3>
        <p>Your Excel file must contain exactly 3 columns with the following headers:</p>

        <div className="table-container">
          <table className="excel-format-table">
            <thead>
              <tr>
                <th>Column</th>
                <th>Required</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Optional</td>
                <td>Recipient's name for personalized greeting</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>Required</td>
                <td>Recipient's email address</td>
                <td>john.doe@company.com</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>Required</td>
                <td>Job role (matches with template/resume files)</td>
                <td>FSE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="excel-note">
          <h4>📋 Important Notes:</h4>
          <ul>
            <li>Role names must match the role names in your template and resume filenames</li>
            <li>Case doesn't matter - "FSE", "fse", or "Fse" will all work</li>
            <li>The system will find files containing these role names</li>
          </ul>
        </div>
      </div>


      <div className="instruction-section">
        <h3>🔍 Troubleshooting</h3>
        <div className="troubleshooting">
          <h4>Common Issues:</h4>
          <div className="issue">
            <strong>Gmail API Authentication Failed</strong>
            <ul>
              <li>Verify if you have Authenticated yourself under Gmail properly</li>
            </ul>
          </div>

          <div className="issue">
            <strong>Template Not Found</strong>
            <ul>
              <li>Check that template file contains the role name (case doesn't matter)</li>
              <li>Verify folder path is correct</li>
              <li>Ensure template file exists for each role in Excel</li>
              <li>Example: For role "FSE", files like FSE.txt, fse.txt, or template_FSE.txt will work</li>
            </ul>
          </div>

          <div className="issue">
            <strong>Resume Not Found</strong>
            <ul>
              <li>Check that resume file contains the role name anywhere in filename</li>
              <li>Verify resume exists for each role (case doesn't matter)</li>
              <li>Check file extensions (.pdf or .docx only)</li>
              <li>Example: For role "FSE", files like resume_fse.pdf, John_FSE.docx, or my_fse_cv.pdf will work</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="instruction-section">
        <h3>💡 Best Practices</h3>
        <ul className="best-practices">
          <li><strong>Use descriptive filenames</strong> that include role names for easy identification</li>
          <li><strong>Test with small batches</strong> first (1-2 contacts) to verify setup</li>
          <li><strong>Review generated drafts</strong> before sending to ensure quality</li>
          <li><strong>Keep templates updated</strong> with current skills and experience</li>
          <li><strong>Use meaningful role names</strong> that match across Excel, templates, and resumes</li>
          <li><strong>Backup your templates</strong> and resumes regularly</li>
          <li><strong>Check attachment names</strong> in drafts emails - they'll follow the Full_Name_Role format</li>
        </ul>
      </div>

    </div>
  );
}

export default Instructions;