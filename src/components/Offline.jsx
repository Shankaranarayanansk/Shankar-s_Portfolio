import React from "react";

const Offline = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-12 h-12 mb-4"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12h2a8 8 0 0116 0h2c0-5.52-4.48-10-10-10zm0 18c-3.31 0-6-2.69-6-6H4a8 8 0 0016 0h-2c0 3.31-2.69 6-6 6z" />
      </svg>
      <h2>No Internet Connection</h2>
      <p>Please check your internet connection.</p>
    </div>
  );
};

export default Offline;
