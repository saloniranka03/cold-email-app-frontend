/**
 * API service for handling backend communication.
 * Centralizes all HTTP requests and error handling.
 */

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

class ApiService {

  /**
   * Processes emails by uploading Excel file and user information
   * @param {FormData} formData - Form data containing file and user info
   * @returns {Promise<Object>} Processing results
   */
  async processEmails(formData) {
    const url = `${API_BASE_URL}/api/email/process`; // ← your controller path

      try {

            let bodyText, result;

           const response = await fetch(url, {
              method: 'POST',
              credentials: 'include',
              body: formData
        });

      // Read body as text first so we can always log it
      bodyText = await response.text();

      // Log the full raw response
      console.groupCollapsed(`[API] POST ${url}`);
      console.log('Status:', response.status, response.statusText);
      console.log('Headers:', Object.fromEntries(response.headers.entries()));
      console.log('Body (raw):', bodyText);
      console.groupEnd();

        // Try to parse JSON if content-type says so
        const ct = (response.headers.get('content-type') || '').toLowerCase();
          if (ct.includes('application/json')) {
            try {
              result = JSON.parse(bodyText);
            } catch {
              // malformed JSON
              result = { raw: bodyText };
            }
          } else {
            result = { raw: bodyText };
          }

        if (!response.ok) {
            const err = new Error(result?.message || `HTTP ${response.status}`);
            err.status = response.status;
            err.payload = result;
            throw err;
        }

        return result;
      } catch (error) {
              // If fetch failed before response existed, surface that
              console.error('[API] processEmails error:', {
                message: error.message,
                status: error.status,
                payload: error.payload,
                url
              });
              throw error;
            }
    }

  /**
   * Health check endpoint
   * @returns {Promise<string>} Health status
   */
  async healthCheck() {
       const url = `${API_BASE_URL}/api/email/health`; // ← your controller path
       try {
        const response = await fetch(url);
        let  bodyText;

        console.groupCollapsed(`[API] GET ${url}`);
        console.log('Status:', response.status, response.statusText);
        console.log('Headers:', Object.fromEntries(response.headers.entries()));
        console.log('Body (raw):', bodyText);
        console.groupEnd();

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        return await response.text();
      } catch (error) {
              console.error('[API] healthCheck error:', { message: error.message, url });
              throw error;
      }
    }
}

export default new ApiService();
