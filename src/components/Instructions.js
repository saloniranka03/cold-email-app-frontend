import React from 'react';

/**
 * Updated instructions component documenting both folder path and file upload methods.
 * Includes flexible file matching documentation and comprehensive troubleshooting.
 */
function Instructions() {
  return (
    <div className="instructions">
      <h2>How to Use Cold Email Automation</h2>

      <div className="instruction-section">
        <h3>🚀 Quick Start</h3>
        <ol className="numbered-list">
          <li><strong>Choose your processing method</strong> - Folder path or file upload</li>
          <li><strong>Set up Gmail API</strong> credentials (automatic via Google login)</li>
          <li><strong>Fill in your information</strong> in the Application Form</li>
          <li><strong>Upload your Excel file</strong> with contact details</li>
          <li><strong>Provide templates and resumes</strong> via folder path OR file upload</li>
          <li><strong>Click "Generate Email Drafts"</strong> to create personalized emails</li>
        </ol>
      </div>

      <div className="instruction-section">
        <h3>📄 Choose Your Processing Method</h3>

        <div className="methods-comparison">
          <div className="method-card">
            <h4>📁 Folder Path Method</h4>
            <p><strong>Best for:</strong> Users with organized local folders</p>

            <div className="method-details">
              <h5>How it works:</h5>
              <ul>
                <li>Keep templates and resumes in a single folder on your computer</li>
                <li>Enter the full folder path in the form</li>
                <li>System finds files by role name matching</li>
              </ul>

              <h5>Folder Structure Example:</h5>
              <div className="code-block">
                <pre>{`/your-templates-folder/
├── FSE.txt                    (Email template for FSE role)
├── hello_backend.txt          (Email template for Backend role)
├── ML_template.txt            (Email template for ML role)
├── resume_FSE.pdf            (Resume for FSE applications)
├── john_backend_cv.docx      (Resume for Backend applications)
├── my_ML_resume.pdf          (Resume for ML applications)
└── ... (more role-specific files)`}</pre>
              </div>
            </div>
          </div>

          <div className="method-card">
            <h4>📤 File Upload Method</h4>
            <p><strong>Best for:</strong> Cloud users and flexible file organization</p>

            <div className="method-details">
              <h5>How it works:</h5>
              <ul>
                <li>Browse and select individual template and resume files</li>
                <li>Upload files directly through the web interface</li>
                <li>Works on any device without local folder requirements</li>
              </ul>

              <h5>File Selection Process:</h5>
              <div className="upload-steps">
                <ol>
                  <li>Select "File Upload Method" in the form</li>
                  <li>Browse for template files (.txt format)</li>
                  <li>Browse for resume files (.pdf, .docx format)</li>
                  <li>Files are temporarily processed and then cleaned up</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="instruction-section">
        <h3>🎯 Flexible File Matching (Both Methods)</h3>

        <div className="matching-explanation">
          <div className="matching-principle">
            <h4>Super Flexible Matching System:</h4>
            <p>Files just need to <strong>contain the role name anywhere in the filename</strong> (case doesn't matter)!</p>
          </div>

          <div className="matching-examples">
            <div className="example-group">
              <h5>✨ Template Files (.txt only):</h5>
              <div className="file-examples">
                <div className="role-example">
                  <strong>For role "FSE":</strong>
                  <ul>
                    <li><code>FSE.txt</code> ✅</li>
                    <li><code>hello_fse.txt</code> ✅</li>
                    <li><code>xxxfsexxx.txt</code> ✅</li>
                    <li><code>MyFSETemplate.txt</code> ✅</li>
                    <li><code>template_FSE_final.txt</code> ✅</li>
                    <li><code>backend.txt</code> ❌ (doesn't contain "fse")</li>
                  </ul>
                </div>

                <div className="role-example">
                  <strong>For role "Backend":</strong>
                  <ul>
                    <li><code>Backend.txt</code> ✅</li>
                    <li><code>my_backend_template.txt</code> ✅</li>
                    <li><code>xxxbackendxxx.txt</code> ✅</li>
                    <li><code>server_backend_v2.txt</code> ✅</li>
                    <li><code>fse.txt</code> ❌ (doesn't contain "backend")</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="example-group">
              <h5>📄 Resume Files (.pdf, .docx only):</h5>
              <div className="file-examples">
                <div className="role-example">
                  <strong>For role "FSE":</strong>
                  <ul>
                    <li><code>john_fse_resume.pdf</code> ✅</li>
                    <li><code>xxxSaloFSE.docx</code> ✅</li>
                    <li><code>fsexxx.pdf</code> ✅</li>
                    <li><code>My_FSE_CV_2024.docx</code> ✅</li>
                    <li><code>backend_resume.pdf</code> ❌ (doesn't contain "fse")</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="matching-rules">
            <h5>📋 Matching Rules:</h5>
            <div className="rules-grid">
              <div className="rule">
                <span className="rule-icon">✅</span>
                <strong>Case Insensitive:</strong> "FSE", "fse", "Fse" all work
              </div>
              <div className="rule">
                <span className="rule-icon">✅</span>
                <strong>Partial Matching:</strong> Role can appear anywhere in filename
              </div>
              <div className="rule">
                <span className="rule-icon">✅</span>
                <strong>Extra Text OK:</strong> Add prefixes, suffixes, numbers, versions
              </div>
              <div className="rule">
                <span className="rule-icon">⚠️</span>
                <strong>File Extensions:</strong> Templates must be .txt, resumes must be .pdf/.docx
              </div>
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
            <li>Role names must be contained in your template and resume filenames</li>
            <li>Case doesn't matter - "FSE", "fse", or "Fse" will all work</li>
            <li>The system will find files containing these role names anywhere in filename</li>
            <li>First row should contain headers exactly as shown above</li>
          </ul>
        </div>
      </div>

      <div className="instruction-section">
        <h3>📧 Email Attachment Naming</h3>

        <div className="attachment-explanation">
          <h4>🏷️ Standardized Attachment Names:</h4>
          <p>Regardless of your file's actual name, resume files are always attached to emails using this standardized format:</p>

          <div className="naming-formula">
            <code>Full_Name_Role.extension</code>
          </div>

          <div className="naming-examples">
            <h5>Examples:</h5>
            <div className="example-list">
              <div className="naming-example">
                <strong>Your file:</strong> <code>my_awesome_fse_resume_v3.pdf</code><br/>
                <strong>UI Full Name:</strong> "saloni ranka"<br/>
                <strong>Excel Role:</strong> "FSE"<br/>
                <strong>Email attachment:</strong> <code>Saloni_Ranka_FSE.pdf</code>
              </div>

              <div className="naming-example">
                <strong>Your file:</strong> <code>xxxbackendxxx.docx</code><br/>
                <strong>UI Full Name:</strong> "john smith"<br/>
                <strong>Excel Role:</strong> "Backend"<br/>
                <strong>Email attachment:</strong> <code>John_Smith_Backend.docx</code>
              </div>
            </div>
          </div>

          <div className="naming-benefits">
            <h5>Why Standardized Names?</h5>
            <ul>
              <li>Professional appearance in email attachments</li>
              <li>Clear identification of applicant and role</li>
              <li>Consistent naming regardless of your file organization</li>
              <li>Employers can easily organize received resumes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="instruction-section">
        <h3>🔧 Troubleshooting</h3>

        <div className="troubleshooting">
          <div className="issue-category">
            <h4>Authentication Issues:</h4>
            <div className="issue">
              <strong>Gmail API Authentication Failed</strong>
              <ul>
                <li>Click "Sign in with Google" button and complete OAuth flow</li>
                <li>Ensure you're using the same Google account for Gmail</li>
                <li>Try logging out and logging back in</li>
                <li>Check if your browser blocks popups</li>
              </ul>
            </div>
          </div>

          <div className="issue-category">
            <h4>File Finding Issues:</h4>

            <div className="issue">
              <strong>Template Not Found</strong>
              <ul>
                <li><strong>Folder Path Method:</strong> Check folder path is correct and accessible</li>
                <li><strong>File Upload Method:</strong> Ensure you uploaded .txt files</li>
                <li>Verify template filename contains the role name (case doesn't matter)</li>
                <li>Example: For role "FSE", files like <code>FSE.txt</code>, <code>hello_fse.txt</code>, or <code>xxxFSExxx.txt</code> will work</li>
                <li>Only .txt files are processed as templates</li>
              </ul>
            </div>

            <div className="issue">
              <strong>Resume Not Found</strong>
              <ul>
                <li><strong>Folder Path Method:</strong> Check folder contains resume files for each role</li>
                <li><strong>File Upload Method:</strong> Ensure you uploaded .pdf or .docx files</li>
                <li>Verify resume filename contains the role name anywhere in the name</li>
                <li>Example: For role "FSE", files like <code>resume_fse.pdf</code>, <code>John_FSE.docx</code>, or <code>xxxfsexxx.pdf</code> will work</li>
                <li>Only .pdf and .docx files are processed as resumes</li>
              </ul>
            </div>

            <div className="issue">
              <strong>Role Mismatch</strong>
              <ul>
                <li>Check Excel role names match what's in your filenames</li>
                <li>Role matching is case-insensitive and partial</li>
                <li>If Excel has "Full Stack Engineer", but files contain "FSE", use "FSE" in Excel</li>
                <li>Ensure each unique role in Excel has corresponding template and resume files</li>
              </ul>
            </div>
          </div>

          <div className="issue-category">
            <h4>File Upload Issues:</h4>
            <div className="issue">
              <strong>File Upload Fails</strong>
              <ul>
                <li>Check file sizes - templates should be under 1MB, resumes under 10MB</li>
                <li>Ensure stable internet connection</li>
                <li>Try uploading files one at a time if bulk upload fails</li>
                <li>Verify file formats: only .txt for templates, .pdf/.docx for resumes</li>
              </ul>
            </div>
          </div>

          <div className="issue-category">
            <h4>Processing Issues:</h4>
            <div className="issue">
              <strong>Excel File Errors</strong>
              <ul>
                <li>Ensure Excel file is .xlsx format (not .xls or .csv)</li>
                <li>Check that first row contains headers: Name, Email Id, Role</li>
                <li>Verify Email Id and Role columns have data for each row</li>
                <li>Remove any empty rows at the end of the Excel file</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="instruction-section">
        <h3>💡 Best Practices</h3>

        <div className="best-practices-grid">
          <div className="practice-category">
            <h4>📁 File Organization</h4>
            <ul>
              <li><strong>Use descriptive filenames</strong> that include role names</li>
              <li><strong>Keep consistent naming</strong> across templates and resumes</li>
              <li><strong>Organize by role</strong> for easy identification</li>
              <li><strong>Version your files</strong> (e.g., fse_template_v2.txt)</li>
            </ul>
          </div>

          <div className="practice-category">
            <h4>🧪 Testing</h4>
            <ul>
              <li><strong>Test with small batches</strong> first (1-2 contacts)</li>
              <li><strong>Verify file matching</strong> with different role names</li>
              <li><strong>Check attachment names</strong> in generated drafts</li>
              <li><strong>Review email content</strong> before sending</li>
            </ul>
          </div>

          <div className="practice-category">
            <h4>📝 Content Quality</h4>
            <ul>
              <li><strong>Keep templates updated</strong> with current skills and experience</li>
              <li><strong>Customize per role</strong> using role-specific templates</li>
              <li><strong>Use meaningful placeholders</strong> like {"{NAME}"}, {"{POSITION}"}</li>
              <li><strong>Proofread templates</strong> for grammar and clarity</li>
            </ul>
          </div>

          <div className="practice-category">
            <h4>💾 Backup & Security</h4>
            <ul>
              <li><strong>Backup your templates</strong> and resumes regularly</li>
              <li><strong>Keep templates secure</strong> with sensitive information</li>
              <li><strong>Version control</strong> important template changes</li>
              <li><strong>Review permissions</strong> for shared folders</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="instruction-section">
        <h3>🎯 Quick Reference</h3>

        <div className="quick-ref-grid">
          <div className="ref-card">
            <h4>📂 File Requirements</h4>
            <ul>
              <li><strong>Templates:</strong> .txt files containing role name</li>
              <li><strong>Resumes:</strong> .pdf or .docx files containing role name</li>
              <li><strong>Excel:</strong> .xlsx with Name, Email Id, Role columns</li>
            </ul>
          </div>

          <div className="ref-card">
            <h4>🔍 Matching Examples</h4>
            <ul>
              <li><strong>Role "FSE":</strong> fse.txt, hello_FSE.pdf ✅</li>
              <li><strong>Role "Backend":</strong> backend_template.txt ✅</li>
              <li><strong>Case insensitive:</strong> FSE = fse = Fse ✅</li>
            </ul>
          </div>

          <div className="ref-card">
            <h4>📧 Attachment Naming</h4>
            <ul>
              <li><strong>Format:</strong> Full_Name_Role.extension</li>
              <li><strong>Example:</strong> John_Smith_FSE.pdf</li>
              <li><strong>Auto-generated</strong> from UI name + Excel role</li>
            </ul>
          </div>

          <div className="ref-card">
            <h4>🚀 Processing Methods</h4>
            <ul>
              <li><strong>Folder Path:</strong> Point to local folder</li>
              <li><strong>File Upload:</strong> Browse individual files</li>
              <li><strong>Both work</strong> with flexible matching</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;