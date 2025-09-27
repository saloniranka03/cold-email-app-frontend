// frontend/src/components/TemplateGuide.js
import React from 'react';

/**
 * Template guide component showing how to create properly formatted email templates.
 * Updated to reflect new placeholder format and flexible file naming.
 */
function TemplateGuide() {
  const examples = {
    modern: {
      title: "Modern Template Example",
      template: `Hello {NAME},

Hope you are doing well.

I am writing to express my interest in **{POSITION}** opportunities.

With over 8.5 years of experience in Java development and a newly acquired H4‑EAD work permit.

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

<p>With over 8.5 years of experience in Java development and a newly acquired H4‑EAD work permit.</p>

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

      <div className="guide-section">
        <h3>🖊 Template Syntax</h3>
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
          <h4>🔄 Note</h4>
          <p>The system automatically converts role codes to full names (e.g., FSE → Full Stack Engineer).</p>
        </div>
      </div>

      <div className="guide-section">
        <h3>🗂 Template File Naming</h3>
        <div className="naming-flexibility">
          <h4>✨ Flexible Template Naming</h4>
          <p>Your template files can be named flexibly as long as they contain the role name:</p>

          <div className="naming-examples">
            <div className="naming-column">
              <h5>For Role "FSE":</h5>
              <ul>
                <li><code>FSE.txt</code> ✅</li>
                <li><code>fse.txt</code> ✅</li>
                <li><code>template_FSE.txt</code> ✅</li>
                <li><code>FSE_email_template.txt</code> ✅</li>
                <li><code>fullstack-template.txt</code> ❌</li>
              </ul>
            </div>

            <div className="naming-column">
              <h5>For Role "Backend":</h5>
              <ul>
                <li><code>Backend.txt</code> ✅</li>
                <li><code>backend.txt</code> ✅</li>
                <li><code>backend_dev.txt</code> ✅</li>
                <li><code>my-backend-template.txt</code> ✅</li>
                <li><code>server_template.txt</code> ❌</li>
              </ul>
            </div>
          </div>

          <div className="naming-rules">
            <h5>📋 Rules:</h5>
            <ul>
              <li>File must be <code>.txt</code> format</li>
              <li>Filename must contain the exact role name from your Excel file</li>
              <li>Case doesn't matter (FSE, fse, Fse all work)</li>
              <li>Additional text in filename is allowed</li>
            </ul>
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
              <li>Use <code>{'{NAME}'}</code> to refer to Receipient </li>
              <li>Reference the specific role with <code>{'{POSITION}'}</code> </li>
              <li>Customize content for each role type</li>
            </ul>
          </div>

          <div className="practice-item">
            <h4>📝 Length & Structure</h4>
            <ul>
              <li>Keep emails concise (200-300 words)</li>
              <li>Use bullet points for key qualifications</li>
            </ul>
          </div>

          <div className="practice-item">
            <h4>🗂 File Organization</h4>
            <ul>
              <li>Use descriptive filenames that include the role name</li>
              <li>Create separate templates for different roles</li>
              <li>Keep templates in a consistent folder structure</li>
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

      <div className="guide-section">
        <h3>🔎 Resume Attachment Info</h3>
        <div className="attachment-info">
          <div className="attachment-section">
            <h4>🗂 How Resume Files Are Found:</h4>
            <ul>
              <li>System searches for <code>.pdf</code> or <code>.docx</code> files containing the role name</li>
              <li>Case-insensitive matching (FSE, fse, Fse all work)</li>
              <li>Examples: <code>resume_FSE.pdf</code>, <code>John_fse.docx</code>, <code>my_FSE_cv.pdf</code></li>
            </ul>
          </div>

          <div className="attachment-section">
            <h4>📧 How Resume Files Are Attached:</h4>
            <ul>
              <li>Always renamed to: <code>Full_Name_Role.extension</code></li>
              <li>Based on your Full Name from the UI form</li>
              <li>Example: UI name "john smith" + role "FSE" → attached as <code>John_Smith_FSE.pdf</code></li>
            </ul>
          </div>

          <div className="attachment-example">
            <h4>📋 Example Workflow:</h4>
            <div className="workflow-steps">
              <div className="workflow-step">
                <strong>1. You have file:</strong> <code>my_resume_fse.pdf</code>
              </div>
              <div className="workflow-step">
                <strong>2. UI Full Name:</strong> "saloni ranka"
              </div>
              <div className="workflow-step">
                <strong>3. Excel Role:</strong> "FSE"
              </div>
              <div className="workflow-step">
                <strong>4. Email attachment:</strong> <code>Saloni_Ranka_FSE.pdf</code>
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
              <strong>Missing Role Name in Template File:</strong> File named <code>template.txt</code> instead of <code>FSE.txt</code> or <code>fse_template.txt</code>
            </div>
          </div>
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Mismatched Role Names:</strong> Excel has "FSE" but template is named <code>FullStack.txt</code>
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
          <div className="mistake-item">
            <span className="mistake-icon">❌</span>
            <div>
              <strong>Wrong File Extensions:</strong> Templates must be <code>.txt</code>, resumes must be <code>.pdf</code> or <code>.docx</code>
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
            <h4>File Naming:</h4>
            <code>Templates: role_name.txt | Resumes: any_name_with_role.pdf</code>
          </div>
          <div className="ref-section">
            <h4>Attachment Format:</h4>
            <code>Full_Name_Role.extension</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateGuide;
