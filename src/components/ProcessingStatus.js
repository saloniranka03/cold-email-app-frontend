/**
* Processing status component displaying results of email generation.
* Enhanced processing status component that displays detailed error information
* with actionable guidance for users
* Shows success/error counts and detailed feedback.
* Enhanced ProcessingStatus.js with better error handling
* Enhanced processing status component that displays grouped error information
* with actionable guidance for users
* Shows each missing template/resume only once per role with all affected emails
* Enhanced ProcessingStatus.js with clearer attachment naming documentation
* Updated with fixed navigation and reordered overall status
*/
import React from 'react';

/**
 * Enhanced processing status component that displays grouped error information
 * Shows each missing template/resume only once per role with all affected emails
 * Overall status now appears right after status summary
 */
function ProcessingStatus({ result, onNavigateToTab }) {
  if (!result) {
    return (
      <div className="processing-status">
        <div className="status-placeholder">
          <h2>No Processing Results</h2>
          <p>Process some emails first to see results here.</p>
        </div>
      </div>
    );
  }

  const hasErrors = result.errorCount > 0;
  const hasWarnings = result.warnings && result.warnings.length > 0;
  const hasSuccess = result.successCount > 0;
  const hasMissingTemplates = result.missingTemplates && result.missingTemplates.length > 0;
  const hasMissingResumes = result.missingResumes && result.missingResumes.length > 0;

  return (
    <div className="processing-status">
      <h2>Processing Results</h2>

      {/* Summary Cards */}
      <div className="status-summary">
        <div className="summary-card total">
          <div className="summary-icon">📊</div>
          <div className="summary-content">
            <div className="summary-number">{result.totalProcessed}</div>
            <div className="summary-label">Total Processed</div>
          </div>
        </div>

        <div className={`summary-card success ${hasSuccess ? 'highlight' : ''}`}>
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <div className="summary-number">{result.successCount}</div>
            <div className="summary-label">Successful</div>
          </div>
        </div>

        <div className={`summary-card errors ${hasErrors ? 'highlight' : ''}`}>
          <div className="summary-icon">❌</div>
          <div className="summary-content">
            <div className="summary-number">{result.errorCount}</div>
            <div className="summary-label">Errors</div>
          </div>
        </div>

        {hasWarnings && (
          <div className="summary-card warnings highlight">
            <div className="summary-icon">⚠️</div>
            <div className="summary-content">
              <div className="summary-number">{result.warnings.length}</div>
              <div className="summary-label">Warnings</div>
            </div>
          </div>
        )}
      </div>

      {/* Overall Status - Moved here, right after summary */}
      <div className="status-section overall-status">
        <div className={`status-indicator ${hasErrors ? 'error' : hasWarnings ? 'warning' : 'success'}`}>
          {hasErrors ? (
            <div>
              <span className="status-icon">❌</span>
              <span>Processing completed with errors</span>
            </div>
          ) : hasWarnings ? (
            <div>
              <span className="status-icon">⚠️</span>
              <span>Processing completed with warnings</span>
            </div>
          ) : (
            <div>
              <span className="status-icon">✅</span>
              <span>Processing completed successfully</span>
            </div>
          )}
        </div>
      </div>

      {/* Success Section */}
      {hasSuccess && (
        <div className="status-section success-section">
          <h3>🎉 Success!</h3>
          <p>
            {result.successCount} email draft{result.successCount !== 1 ? 's' : ''}
            {result.successCount === 1 ? ' has' : ' have'} been created in your Gmail drafts folder.
          </p>
          <div className="next-steps">
            <h4>Next Steps:</h4>
            <ol>
              <li>Open Gmail and go to your Drafts folder</li>
              <li>Review each generated email draft</li>
              <li>Make any necessary adjustments</li>
              <li>Send the emails when ready</li>
            </ol>
          </div>
          <div className="attachment-info">
            <h4>🔎 Attachment Info:</h4>
            <p>Resume files are automatically renamed to follow the format: <code>Full_Name_Role.extension</code></p>
            <p>Example: If your full name is "John Smith" and role is "FSE", the attachment will be named <code>John_Smith_FSE.pdf</code></p>
          </div>
        </div>
      )}

      {/* Missing Templates Section - Grouped by Role */}
      {hasMissingTemplates && (
        <MissingTemplatesSection 
          missingTemplates={result.missingTemplates} 
          onNavigateToTab={onNavigateToTab}
        />
      )}

      {/* Missing Resumes Section - Grouped by Role */}
      {hasMissingResumes && (
        <MissingResumesSection missingResumes={result.missingResumes} />
      )}

      {/* General Errors */}
      {hasErrors && !hasMissingTemplates && !hasMissingResumes && (
        <div className="status-section errors-section">
          <h3>❌ Errors</h3>
          <div className="message-list">
            {result.errors.map((error, index) => (
              <div key={index} className="message-item error">
                <span className="message-icon">❌</span>
                <span className="message-text">{error}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Warnings */}
      {hasWarnings && (
        <div className="status-section warnings-section">
          <h3>⚠️ Warnings</h3>
          <div className="message-list">
            {result.warnings.map((warning, index) => (
              <div key={index} className="message-item warning">
                <span className="message-icon">⚠️</span>
                <span className="message-text">{warning}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Help Text */}
      {result.helpText && (
        <div className="status-section help-section">
          <h3>💡 How to Fix</h3>
          <p>{result.helpText}</p>
          <div className="help-actions">
            <button 
              onClick={() => onNavigateToTab && onNavigateToTab('templates')} 
              className="help-button"
            >
              View Template Guide
            </button>
            <button 
              onClick={() => onNavigateToTab && onNavigateToTab('instructions')} 
              className="help-button"
            >
              View Setup Instructions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Component for displaying missing template errors grouped by role with affected emails
 */
function MissingTemplatesSection({ missingTemplates, onNavigateToTab }) {
  return (
    <div className="status-section missing-templates-section">
      <h3>📄 Missing Email Templates</h3>
      <p className="section-description">
        The following email template files are missing from your templates folder:
      </p>

      <div className="missing-items-list">
        {missingTemplates.map((template, index) => (
          <div key={index} className="missing-item">
            <div className="missing-item-header">
              <span className="missing-icon">📄</span>
              <span className="missing-name">{template.role}.txt</span>
              <span className="missing-status">Missing</span>
              <span className="affected-count">
                {template.affectedEmails?.length || 0} email{(template.affectedEmails?.length || 0) !== 1 ? 's' : ''} affected
              </span>
            </div>
            <div className="missing-item-details">
              <div className="missing-path">
                <strong>Expected location:</strong> {template.expectedPath}
              </div>
              <div className="missing-suggestion">
                <strong>How to fix:</strong> {template.suggestion}
              </div>
              {template.affectedEmails && template.affectedEmails.length > 0 && (
                <div className="affected-emails">
                  <strong>Affected email addresses:</strong>
                  <div className="email-list">
                    {template.affectedEmails.map((email, emailIndex) => (
                      <span key={emailIndex} className="email-tag">
                        {email}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="template-example">
        <h4>📋 Example Template Content:</h4>
        <div className="example-code">
          <pre>{`Hello {NAME},

I am writing to express my interest in **{POSITION}** opportunities.

**A bit about what I bring:**
- Extensive experience in software development
- Strong problem-solving skills
- Excellent communication abilities

Best regards,
{USER_NAME}
{PHONE}
{LINKEDIN}`}</pre>
        </div>
      </div>

      <div className="flexible-naming">
        <h4>✨ Flexible Template Naming:</h4>
        <p>Template files can be named flexibly. The system will find files containing your role name:</p>
        <ul>
          <li><code>FSE.txt</code> (exact match)</li>
          <li><code>fse.txt</code> (case-insensitive)</li>
          <li><code>template_FSE.txt</code> (with prefix)</li>
          <li><code>FSE_template.txt</code> (with suffix)</li>
        </ul>
      </div>

      <div className="action-buttons">
        <button 
          className="primary-button" 
          onClick={() => onNavigateToTab && onNavigateToTab('templates')}
        >
          View Template Guide
        </button>
        <button className="secondary-button" onClick={() => copyTemplateExample()}>
          Copy Example Template
        </button>
      </div>
    </div>
  );
}

/**
 * Component for displaying missing resume errors grouped by role with affected emails
 */
function MissingResumesSection({ missingResumes }) {
  return (
    <div className="status-section missing-resumes-section">
      <h3>🔎 Missing Resume Files</h3>
      <p className="section-description">
        The following resume files are missing from your templates folder:
      </p>

      <div className="missing-items-list">
        {missingResumes.map((resume, index) => (
          <div key={index} className="missing-item">
            <div className="missing-item-header">
              <span className="missing-icon">📄</span>
              <span className="missing-name">{resume.role} Resume</span>
              <span className="missing-status">Missing</span>
              <span className="affected-count">
                {resume.affectedEmails?.length || 0} email{(resume.affectedEmails?.length || 0) !== 1 ? 's' : ''} affected
              </span>
            </div>
            <div className="missing-item-details">
              <div className="missing-path">
                <strong>Expected location:</strong> {resume.expectedPath}
              </div>
              <div className="missing-suggestion">
                <strong>How to fix:</strong> {resume.suggestion}
              </div>
              {resume.affectedEmails && resume.affectedEmails.length > 0 && (
                <div className="affected-emails">
                  <strong>Affected email addresses:</strong>
                  <div className="email-list">
                    {resume.affectedEmails.map((email, emailIndex) => (
                      <span key={emailIndex} className="email-tag">
                        {email}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="resume-naming-guide">
        <h4>📋 Resume File Requirements:</h4>

        <div className="naming-sections">
          <div className="flexible-finding">
            <h5>✨ Flexible File Finding:</h5>
            <p>The system will find resume files with various naming patterns (case-insensitive):</p>
            <ul>
              <li><code>resume_FSE.pdf</code></li>
              <li><code>Saloni_Ranka_FSE.pdf</code></li>
              <li><code>fse_resume.docx</code></li>
              <li><code>my_FSE_cv.pdf</code></li>
              <li>Any file containing "FSE" in the name</li>
            </ul>
          </div>

          <div className="attachment-naming">
            <h5>📧 Email Attachment Names:</h5>
            <p><strong>Important:</strong> Regardless of your file's actual name, it will be attached to emails using this standard format:</p>
            <div className="naming-formula">
              <code>Full_Name_From_UI_Role.extension</code>
            </div>
            <div className="naming-examples">
              <strong>Examples:</strong>
              <ul>
                <li>UI Full Name: "saloni ranka", Role: "FSE" → Attachment: <code>Saloni_Ranka_FSE.pdf</code></li>
                <li>UI Full Name: "john doe smith", Role: "Backend" → Attachment: <code>John_Doe_Smith_Backend.pdf</code></li>
                <li>UI Full Name: "alex", Role: "ML" → Attachment: <code>Alex_ML.docx</code></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="supported-formats">
          <h5>📄 Supported Formats:</h5>
          <ul>
            <li><code>.pdf</code> files (preferred)</li>
            <li><code>.docx</code> files</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Helper function to copy template example to clipboard
 */
function copyTemplateExample() {
  const example = `Hello {NAME},

I am writing to express my interest in **{POSITION}** opportunities.

**A bit about what I bring:**
- Extensive experience in software development
- Strong problem-solving skills
- Excellent communication abilities

I've attached my resume for your review.

Best regards,
{USER_NAME}
{PHONE}
{LINKEDIN}`;

  navigator.clipboard.writeText(example).then(() => {
    alert('Template example copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy template example:', err);
  });
}

export default ProcessingStatus;