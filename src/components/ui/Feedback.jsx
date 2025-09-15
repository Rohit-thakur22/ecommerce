import React from "react";

const Feedback = () => {
  return (
    <div className="w-full border border-gray-200 py-4 mt-4 flex items-center justify-start gap-2 px-10">
      <div className="text-sm text-gray-600 pl-10">
        DID YOU FIND INFORMATION ON THIS PAGE USEFUL?
      </div>
      <button
        type="button"
        aria-label="Yes"
        className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl"
      >
        <span role="img" aria-hidden="true">
          👍
        </span>
      </button>
      <button
        type="button"
        aria-label="No"
        className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xl"
      >
        <span role="img" aria-hidden="true">
          👎
        </span>
      </button>
    </div>
  );
};

export default Feedback;
