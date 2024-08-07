"use client"
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiButtonProps {
  txt: string;
}

const ConfettiButton: React.FC<ConfettiButtonProps> = (props) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 90,
    });

    // Copy email to clipboard and show copied message
    navigator.clipboard.writeText('akmahnaf@ualberta.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  }

  return (
    <div className="space-x-1 px-5 py-2 border rounded-full bg-[#003153] shadow-lg">
      <button
        onClick={handleClick}
        className="flex items-center text-gray-300 hover:text-white transition duration-100"
      >
        <span className="text-lg mr-2 text-white font-medium">{props.txt}</span>
        {copied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
      </button>
    </div>
  );
};

export default ConfettiButton;

