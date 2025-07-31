import React, { useEffect, useRef, useState } from "react";

const ValidateInput = () => {
  let inputBox = 5;
  const [inputText, setInputText] = useState(new Array(inputBox).fill("1"));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    value = value.trim();

    let newArr = [...inputText];
    newArr[index] = value.slice(-1);
    setInputText(newArr);

    value && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      !e.target.value && refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 drop-shadow-lg">
        🔐 Validate Input
      </h1>

      <div className="flex gap-4">
        {inputText.map((input, index) => (
          <input
            key={index}
            type="text"
            value={input}
            maxLength={1}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            ref={(el) => (refArr.current[index] = el)}
            className="w-14 h-14 text-center text-2xl font-bold rounded-xl 
                       border-2 border-gray-300 focus:border-purple-500 
                       focus:outline-none transition-all duration-300 
                       shadow-md bg-white hover:scale-105"
          />
        ))}
      </div>

      <p className="mt-6 text-gray-600 text-sm">
        Enter the {inputBox}-digit OTP above 👆
      </p>
    </div>
  );
};

export default ValidateInput;
