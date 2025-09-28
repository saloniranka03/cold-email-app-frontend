import React from 'react';

/**
 * Updated template guide component documenting both folder path and file upload methods.
 * Includes flexible file matching documentation and dual method support.
 */
function TemplateGuide() {
  const examples = {
    modern: {
      title: "Modern Template Example",
      template: `Hello {NAME},

Hope you are doing well.

I am writing to express my interest in **{POSITION}** opportunities.

With over 8.5 years of experience in Java development and a newly acquired H4–EAD work permit.

**A bit about what I bring:**
- Extensive experience in Java-based backend development
- Strong collaboration skills and adaptability
- Experience with Spring Boot, Hibernate, JPA

I've attached my resume for your review.

Thank you for considering my application—I'm excited about the potential to contribute and collaborate.

Please feel free to reach out via email or phone if you'd like to connect further.

Best regards,
{USER_NAME}
{PHONE}
{LINKEDIN}`,
      output: `<p>Hello John Doe,</p>

<p>Hope you are doing well.</p>

<p>I am writing to express my interest in <b>Full Stack Engineer</b> opportunities.</p>

<p>With over 8.5 years of experience in Java development and a newly acquired H4–EAD work permit.</p>

<p><b>A bit about what I bring:</b></p>
<ul>
<li>Extensive experience in Java-based backend development</li>
<li>Strong collaboration skills and adaptability</li>
<li>Experience with Spring Boot, Hibernate, JPA</li>
</ul>

<p>I've attached my resume for your review.</p>

<p>Thank you for considering my application—I'm excited about the potential to contribute and collaborate.</p>

<p>Please feel free to reach out via email or phone if you'd like to connect further.</p>

<p>Best regards,<br/>
Job Applicant<br/>
1-234-568-890<br/>
<a href="https://www.linkedin.com/in/saloniranka/">https://www.linkedin.com/in/saloniranka/</a></p>`
    }
  };

  return (
    <div className="template-guide">
      <h2>Email Template Creation Guide</h2>
      
      {/* NEW: Processing Methods Overview */}
      <div className="guide-section">
        <h3>🔄 Choose Your Processing Method</h3>
        <div className="processing-methods">
          <div className="method-card folder-method">
            <h4>📁 Folder Path Method</h4>
            <p><strong>Best for:</strong> Users with organized local folders</p>
            <ul>
              <li>Point to existing templates folder on your computer</li>
              <li>Templates and resumes stored locally</li>
              <li>Quick processing for regular users</li>
            </ul>
            <div className="method-example">
              <strong>Usage:</strong> Enter folder path like "/Users/username/Desktop/JobEmailerFiles"
            </div>
          </div>

          <div className="method-card upload-method">
            <h4>📤 File Upload Method</h4>
            <p><strong>Best for:</strong> Cloud users and flexible file organization</p>
            <ul>
              <li>Browse and upload individual files</li>
              <li>Works on any computer/device</li>
              <li>No local folder structure needed</li>
            </ul>
            <div className="method-example">
              <strong>Usage:</strong> Select template (.txt) and resume (.pdf/.docx) files individually
            </div>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>📖 Template Syntax</h3>
        <div className="syntax-grid">
          <div className="syntax-item">
            <h4>Text Formatting</h4>
            <div className="syntax-example">
              <code>**Bold Text**</code>
              <span className="arrow">→</span>
              <span><b>Bold Text</b></span>
            </div>
          </div>

          <div className="syntax-item">
            <h4>Bullet Points</h4>
            <div className="syntax-example">
              <code>- Item 1<br/>- Item 2</code>
              <span className="arrow">→</span>
              <div>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="syntax-item">
            <h4>Links</h4>
            <div className="syntax-example">
              <code>[Link Text](https://url.com)</code>
              <span className="arrow">→</span>
              <span><a href="#" onClick={(e) => e.preventDefault()}>Link Text</a></span>
            </div>
          </div>

          <div className="syntax-item">
            <h4>Line Breaks</h4>
            <div className="syntax-example">
              <code>Line 1<br/><br/>Line 2</code>
              <span className="arrow">→</span>
              <span>Line 1<br/><br/>Line 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>🔤 Available Placeholders</h3>
        <div className="placeholder-formats">
          <div className="format-section modern-format">
            <h4>✨ Modern Format (Recommended)</h4>
            <div className="placeholder-grid">
              <div className="placeholder-item">
                <code>{'{NAME}'}</code>
                <span>Recipient's name from Excel (optional)</span>
              </div>
              <div className="placeholder-item">
                <code>{'{POSITION}'}</code>
                <span>Full job role name (FSE → Full Stack Engineer)</span>
              </div>
              <div className="placeholder-item">
                <code>{'{USER_NAME}'}</code>
                <span>Your full name from form</span>
              </div>
              <div className="placeholder-item">
                <code>{'{PHONE}'}</code>
                <span>Your phone number from form</span>
              </div>
              <div className="placeholder-item">
                <code>{'{LINKEDIN}'}</code>
                <span>Your LinkedIn URL (if provided)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="compatibility-note">
          <h4>📄 Note</h4>
          <p>The system automatically converts role codes to full names (e.g., FSE → Full Stack Engineer).</p>
        </div>
      </div>

      {/* ENHANCED: Flexible File Naming Section */}
      <div className="guide-section">
        <h3>🗂 Template File Naming (Flexible Matching)</h3>
        <div className="naming-flexibility">
          <h4>🎯 Super Flexible Template Naming</h4>
          <p>Template files just need to <strong>contain the role name somewhere in the filename</strong> (case doesn't matter):</p>

          <div className="naming-examples">
            <div className="naming-column">
              <h5>For Role "FSE":</h5>
              <ul>
                <li><code>FSE.txt</code> ✅</li>
                <li><code>fse.txt</code> ✅</li>
                <li><code>hello_fse.txt</code> ✅</li>
                <li><code>xxxfsexxx.txt</code> ✅</li>
                <li><code>MyFSETemplate.txt</code> ✅</li>
                <li><code>template_FSE_final.txt</code> ✅</li>
                <li><code>backend.txt</code> ❌</li>
              </ul>
            </div>

            <div className="naming-column">
              <h5>For Role "Backend":</h5>
              <ul>
                <li><code>Backend.txt</code> ✅</li>
                <li><code>backend.txt</code> ✅</li>
                <li><code>my_backend_template.txt</code> ✅</li>
                <li><code>xxxbackendxxx.txt</code> ✅</li>
                <li><code>BackendDeveloper.txt</code> ✅</li>
                <li><code>server_backend_v2.txt</code> ✅</li>
                <li><code>frontend.txt</code> ❌</li>
              </ul>
            </div>
          </div>

          <div className="matching-rules">
            <h5>📋 Flexible Matching Rules:</h5>
            <div className="rules-grid">
              <div className="rule-item">
                <span className="rule-icon">✅</span>
                <div>
                  <strong>Case Insensitive:</strong>
                  <p>"FSE", "fse", "Fse" all work the same</p>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-icon">✅</span>
                <div>
                  <strong>Partial Matching:</strong>
                  <p>Role name can appear anywhere in filename</p>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-icon">✅</span>
                <div>
                  <strong>Extra Text Allowed:</strong>
                  <p>Add prefixes, suffixes, numbers, anything</p>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-icon">⚠️</span>
                <div>
                  <strong>Must Be .txt File:</strong>
                  <p>Only .txt files are processed as templates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>💡 Template Examples</h3>
        <div className="example-content">
          <h4>{examples['modern'].title}</h4>

          <div className="example-comparison">
            <div className="template-input">
              <h5>Template File Content:</h5>
              <pre className="code-block">{examples['modern'].template}</pre>
              <div className="copy-button-container">
                <button
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText(examples['modern'].template);
                    alert('Template copied to clipboard!');
                  }}
                >
                  📋 Copy Template
                </button>
              </div>

              <div className="template-output">
                <h5>Rendered Output:</h5>
                <div
                  className="output-preview"
                  dangerouslySetInnerHTML={{ __html: examples['modern'].output }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>✅ Template Best Practices</h3>
        <div className="best-practices">
          <div className="practice-item">
            <h4>🎯 Personalization</h4>
            <ul>
              <li>Use <code>{'{NAME}'}</code> to refer to recipient</li>
              <li>Reference the specific role with <code>{'{POSITION}'}</code></li>
              <li>Customize content for each role type</li>
            </ul>
          </div>

          <div className="practice-item">
            <h4>📏 Length & Structure</h4>
            <ul>
              <li>Keep emails concise (200-300 words)</li>
              <li>Use bullet points for key qualifications</li>
            </ul>
          </div>

          <div className="practice-item">
            <h4>🗂 File Organization</h4>
            <ul>
              <li>Include role names in filenames for easy matching</li>
              <li>Create separate templates for different roles</li>
              <li>Use descriptive filenames that you can easily identify</li>
            </ul>
          </div>

          <div className="practice-item">
            <h4>🔗 Links & Contact</h4>
            <ul>
              <li>Include portfolio or relevant project links</li>
              <li>Use <code>{'{USER_NAME}'}</code>, <code>{'{PHONE}'}</code>, and <code>{'{LINKEDIN}'}</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ENHANCED: Resume Attachment Section */}
      <div className="guide-section">
        <h3>📎 Resume Attachment Info</h3>
        <div className="attachment-info">
          <div className="attachment-section">
            <h4>🔍 How Resume Files Are Found (Super Flexible):</h4>
            <div className="resume-finding">
              <p>Like templates, resume files just need to <strong>contain the role name anywhere in the filename</strong>:</p>
              <div className="resume-examples">
                <div className="resume-example-group">
                  <strong>For role "FSE":</strong>
                  <ul>
                    <li><code>john_fse_resume.pdf</code> ✅</li>
                    <li><code>xxxSaloFSE.docx</code> ✅</li>
                    <li><code>fsexxx.docx</code> ✅</li>
                    <li><code>My_FSE_CV.pdf</code> ✅</li>
                    <li><code>resume_FSE_2024.pdf</code> ✅</li>
                  </ul>
                </div>
                <div className="resume-rules">
                  <strong>Requirements:</strong>
                  <ul>
                    <li>Must be .pdf or .docx format</li>
                    <li>Must contain role name (case-insensitive)</li>
                    <li>Can have any additional text in filename</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="attachment-section">
            <h4>📧 How Resume Files Are Attached:</h4>
            <div className="attachment-naming">
              <p><strong>Standardized Attachment Names:</strong> Regardless of your file's actual name, it will always be attached to emails using this format:</p>
              <div className="naming-formula">
                <code>Full_Name_Role.extension</code>
              </div>
              <div className="attachment-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>UI name: "saloni ranka" + role: "FSE" → attached as: <code>Saloni_Ranka_FSE.pdf</code></li>
                  <li>UI name: "john smith" + role: "Backend" → attached as: <code>John_Smith_Backend.pdf</code></li>
                  <li>Your file: "xxxfsexxx.docx" → attached as: <code>Your_Name_FSE.docx</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="attachment-workflow">
            <h4>📋 Complete Workflow Example:</h4>
            <div className="workflow-steps">
              <div className="workflow-step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <strong>Your file:</strong> <code>my_awesome_fse_resume_v3.pdf</code>
                </div>
              </div>
              <div className="workflow-step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <strong>UI Full Name:</strong> "saloni ranka"
                </div>
              </div>
              <div className="workflow-step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <strong>Excel Role:</strong> "FSE"
                </div>
              </div>
              <div className="workflow-step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <strong>Email attachment:</strong> <code>Saloni_Ranka_FSE.pdf</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>⚠️ Common Mistakes to Avoid</h3>
        <div className="mistakes">
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Role Name Not in Filename:</strong> For role "FSE", file named <code>template.txt</code> won't match. Use <code>fse_template.txt</code> or <code>my_FSE_email.txt</code>
            </div>
          </div>
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Wrong File Extensions:</strong> Templates must be <code>.txt</code>, resumes must be <code>.pdf</code> or <code>.docx</code>
            </div>
          </div>
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Mismatched Role Names:</strong> Excel has "FSE" but no files contain "fse" in the name
            </div>
          </div>
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Using HTML Tags:</strong> Use <code>**bold**</code> instead of <code>&lt;b&gt;bold&lt;/b&gt;</code>
            </div>
          </div>
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Static Content:</strong> Using hardcoded names instead of placeholders like <code>{'{USER_NAME}'}</code>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>🎯 Quick Reference</h3>
        <div className="quick-reference">
          <div className="ref-section">
            <h4>Template Placeholders:</h4>
            <code>{'{NAME}, {POSITION}, {USER_NAME}, {PHONE}, {LINKEDIN}'}</code>
          </div>
          <div className="ref-section">
            <h4>Flexible File Naming:</h4>
            <code>Templates: role_anywhere_in_name.txt | Resumes: role_anywhere_in_name.pdf/.docx</code>
          </div>
          <div className="ref-section">
            <h4>Standard Attachment Format:</h4>
            <code>Full_Name_Role.extension</code>
          </div>
          <div className="ref-section">
            <h4>Processing Methods:</h4>
            <code>Folder Path (local) | File Upload (cloud-friendly)</code>
          </div>
        </div>
      </div>

      <style jsx>{`
        .template-guide {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .guide-section {
          margin-bottom: 40px;
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .guide-section h3 {
          color: #1e40af;
          margin: 0 0 20px 0;
          font-size: 20px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 10px;
        }

        .processing-methods {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 15px;
        }

        .method-card {
          padding: 20px;
          border-radius: 8px;
          border: 2px solid #e5e7eb;
        }

        .folder-method {
          background: #f0f9ff;
          border-color: #3b82f6;
        }

        .upload-method {
          background: #f0fdf4;
          border-color: #22c55e;
        }

        .method-card h4 {
          margin: 0 0 10px 0;
          color: #374151;
          font-size: 16px;
        }

        .method-card p {
          margin: 0 0 12px 0;
          color: #6b7280;
          font-size: 14px;
        }

        .method-card ul {
          margin: 0 0 12px 0;
          padding-left: 20px;
          color: #374151;
          font-size: 14px;
        }

        .method-card li {
          margin-bottom: 4px;
        }

        .method-example {
          background: white;
          padding: 10px;
          border-radius: 4px;
          font-size: 13px;
          color: #374151;
        }

        .syntax-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 15px;
        }

        .syntax-item {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .syntax-item h4 {
          margin: 0 0 10px 0;
          color: #334155;
          font-size: 14px;
        }

        .syntax-example {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }

        .syntax-example code {
          background: #334155;
          color: #f1f5f9;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .arrow {
          color: #3b82f6;
          font-weight: bold;
        }

        .placeholder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .placeholder-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }

        .placeholder-item code {
          background: #1e40af;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-weight: 600;
          min-width: 120px;
          text-align: center;
        }

        .placeholder-item span {
          color: #475569;
          font-size: 14px;
        }

        .naming-examples {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin: 20px 0;
        }

        .naming-column h5 {
          color: #059669;
          margin: 0 0 12px 0;
          font-size: 15px;
        }

        .naming-column ul {
          margin: 0;
          padding-left: 20px;
        }

        .naming-column li {
          margin-bottom: 6px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
        }

        .matching-rules {
          margin-top: 25px;
        }

        .matching-rules h5 {
          color: #7c3aed;
          margin: 0 0 15px 0;
        }

        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .rule-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          background: #fef7ff;
          border-radius: 8px;
          border: 1px solid #e9d5ff;
        }

        .rule-icon {
          font-size: 20px;
          margin-top: 2px;
        }

        .rule-item strong {
          color: #7c3aed;
          font-size: 14px;
          display: block;
          margin-bottom: 4px;
        }

        .rule-item p {
          color: #6b7280;
          font-size: 13px;
          margin: 0;
        }

        .example-comparison {
          margin-top: 20px;
        }

        .template-input h5 {
          color: #374151;
          margin: 0 0 10px 0;
        }

        .code-block {
          background: #1e293b;
          color: #e2e8f0;
          padding: 20px;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
          line-height: 1.6;
          white-space: pre-wrap;
          overflow-x: auto;
        }

        .copy-button-container {
          text-align: right;
          margin: 10px 0;
        }

        .copy-button {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          transition: background-color 0.2s;
        }

        .copy-button:hover {
          background: #2563eb;
        }

        .template-output {
          margin-top: 20px;
        }

        .output-preview {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          line-height: 1.6;
        }

        .best-practices {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 15px;
        }

        .practice-item {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #bbf7d0;
        }

        .practice-item h4 {
          color: #059669;
          margin: 0 0 12px 0;
          font-size: 15px;
        }

        .practice-item ul {
          margin: 0;
          padding-left: 20px;
          color: #374151;
        }

        .practice-item li {
          margin-bottom: 6px;
          font-size: 14px;
        }

        .attachment-info {
          margin-top: 15px;
        }

        .attachment-section {
          margin-bottom: 25px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .attachment-section h4 {
          color: #1e40af;
          margin: 0 0 15px 0;
          font-size: 16px;
        }

        .resume-finding p {
          color: #374151;
          margin-bottom: 15px;
        }

        .resume-examples {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .resume-example-group strong {
          color: #059669;
          display: block;
          margin-bottom: 8px;
        }

        .resume-example-group ul {
          margin: 0;
          padding-left: 20px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
        }

        .resume-rules strong {
          color: #dc2626;
          display: block;
          margin-bottom: 8px;
        }

        .resume-rules ul {
          margin: 0;
          padding-left: 20px;
          color: #374151;
          font-size: 14px;
        }

        .naming-formula {
          text-align: center;
          margin: 15px 0;
        }

        .naming-formula code {
          background: #1e40af;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .attachment-examples ul {
          margin: 10px 0;
          padding-left: 20px;
        }

        .attachment-examples li {
          margin-bottom: 8px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
          color: #374151;
        }

        .workflow-steps {
          margin-top: 15px;
        }

        .workflow-step {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 12px;
          padding: 12px;
          background: white;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .step-number {
          background: #3b82f6;
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
        }

        .step-content {
          color: #374151;
          font-size: 14px;
        }

        .step-content strong {
          color: #1e40af;
        }

        .step-content code {
          background: #f1f5f9;
          color: #475569;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .mistakes {
          margin-top: 15px;
        }

        .mistake-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          padding: 15px;
          background: #fef2f2;
          border-radius: 8px;
          border: 1px solid #fecaca;
        }

        .mistake-icon {
          font-size: 20px;
          margin-top: 2px;
        }

        .mistake-item div {
          color: #374151;
          font-size: 14px;
        }

        .mistake-item strong {
          color: #dc2626;
          display: block;
          margin-bottom: 4px;
        }

        .quick-reference {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        .ref-section {
          padding: 15px;
          background: #eff6ff;
          border-radius: 8px;
          border: 1px solid #bfdbfe;
        }

        .ref-section h4 {
          color: #1e40af;
          margin: 0 0 8px 0;
          font-size: 14px;
        }

        .ref-section code {
          background: #1e293b;
          color: #e2e8f0;
          padding: 8px 12px;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
          display: block;
          word-break: break-all;
        }

        @media (max-width: 768px) {
          .processing-methods {
            grid-template-columns: 1fr;
          }

          .naming-examples {
            grid-template-columns: 1fr;
          }

          .resume-examples {
            grid-template-columns: 1fr;
          }

          .syntax-grid {
            grid-template-columns: 1fr;
          }

          .placeholder-grid {
            grid-template-columns: 1fr;
          }

          .best-practices {
            grid-template-columns: 1fr;
          }

          .rules-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default TemplateGuide;