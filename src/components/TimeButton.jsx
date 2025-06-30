import React, { useEffect, useState } from 'react';

function TimeButton() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function checkTime() {
      const now = new Date();
      const hour = now.getHours();
      // Allow between 14:00 (2 PM) and 15:00 (3 PM), inclusive of 14:00, exclusive of 15:00
      setIsActive(hour === 12);
    }

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className={`px-4 py-2 rounded ${
        isActive
          ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
      disabled={!isActive}
      onClick={() => isActive && alert('Button clicked!')}
    >
      Click Me
    </button>
  );
}

export default TimeButton;