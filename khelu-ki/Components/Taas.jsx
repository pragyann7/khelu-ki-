import React, { useState } from "react";

const Taas = () => {
    const [result, setResult] = useState("");

    // Define your word list
    const options = ["Play", "Not Play", "Maybe Play", "Try Later"]; // You can expand this list

    const handleClick = () => {
        // Pick a random word from the list
        const randomIndex = Math.floor(Math.random() * options.length);
        setResult(options[randomIndex]);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center flex-grow">
                <p className="mb-10 text-2xl font-semibold">{result || "Result Screen"}</p>

                <button
                    className="py-2 px-7 bg-black text-white rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                    onClick={handleClick}
                >
                    Get Suggestion
                </button>
            </div>
        </div>
    );
};

export default Taas;
