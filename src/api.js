// api.js

const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
      // Simulating a delay to mimic the asynchronous nature of API calls
      setTimeout(() => {
        const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
        if (date === currentDate) {
          resolve(['09:00', '10:00', '11:00']);
        } else if (date === '2024-04-02') {
          resolve(['14:00', '15:00', '16:00']);
        } else {
          reject(new Error('Invalid date'));
        }
      }, 1000);
    });
  };
  
  const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
      // Simulating a delay to mimic the asynchronous nature of API calls
      setTimeout(() => {
        if (formData) {
          resolve({ success: true });
        } else {
          reject(new Error('Form data is missing'));
        }
      }, 1000);
    });
  };
  
  export { fetchAPI, submitAPI };