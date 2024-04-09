import React from "react";
const ToastPopup = ({ text , showToast, handleClose, toastcolor}) => {

  return (
    <>
      {showToast && (
        <div
          className={`max-w-xs ${toastcolor} text-sm text-white rounded-xl shadow-lg mt-5`}
          role="alert"
        >
          <div className="flex p-4">
            {text}
            <div className="ms-auto">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastPopup;
