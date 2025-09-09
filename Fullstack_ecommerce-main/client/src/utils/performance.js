// Performance monitoring utility
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`⏱️ ${name} took ${(end - start).toFixed(2)}ms`);
  
  // Send to analytics if available
  if (window.gtag) {
    window.gtag('event', 'performance', {
      event_category: 'timing',
      event_label: name,
      value: Math.round(end - start)
    });
  }
  
  return result;
};

export const measureAsyncPerformance = async (name, fn) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  console.log(`⏱️ ${name} took ${(end - start).toFixed(2)}ms`);
  
  // Send to analytics if available
  if (window.gtag) {
    window.gtag('event', 'performance', {
      event_category: 'timing',
      event_label: name,
      value: Math.round(end - start)
    });
  }
  
  return result;
};

// Monitor API response times
export const createApiMonitor = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    config.metadata = { startTime: performance.now() };
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      const endTime = performance.now();
      const duration = endTime - response.config.metadata.startTime;
      
      console.log(`🌐 API ${response.config.url} took ${duration.toFixed(2)}ms`);
      
      // Send to analytics if available
      if (window.gtag) {
        window.gtag('event', 'api_performance', {
          event_category: 'api',
          event_label: response.config.url,
          value: Math.round(duration)
        });
      }
      
      return response;
    },
    (error) => {
      const endTime = performance.now();
      const duration = endTime - error.config.metadata.startTime;
      
      console.error(`❌ API ${error.config.url} failed after ${duration.toFixed(2)}ms`);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
