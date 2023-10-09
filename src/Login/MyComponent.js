import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const checkWindowClosed = () => {
      if (typeof window.closed === 'boolean') {
        if (window.closed) {
          // Window is closed
          console.log('Window is closed');
        } else {
          // Window is not closed
          console.log('Window is not closed');
        }
      } else {
        // Handle the case where window.closed is blocked by COOP policy
        console.error('Access to window.closed is blocked by COOP policy');
        // Provide an alternative or inform the user
      }
    };

    // Call the function when the component mounts
    checkWindowClosed();
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default MyComponent;
