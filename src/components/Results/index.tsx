import React from "react";

interface ResultsProps {
  onRetry: () => void;
}

const Results: React.FC<ResultsProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-blue-100 min-h-screen">
      {/* First Evaluation Section */}
      <div className="bg-blue-900 text-white p-6 rounded-lg max-w-fit w-auto">
        <h2 className="text-2xl font-bold text-center">Category 1</h2>
        <p className="mt-4 font-semibold">Staff's Behavior Analysis:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Behavior Metric 1: Yes</li>
          <li>Behavior Metric 2: No</li>
          <li>Behavior Metric 3: Yes</li>
          <li>Behavior Metric 4: Yes</li>
        </ul>
        <p className="mt-4 font-semibold">Evaluation Summary:</p>
        <p><strong>Overall Score:</strong> XX%</p>
        <p><strong>Evaluation:</strong> Placeholder Evaluation</p>
        <p className="mt-2 text-sm">Additional feedback text goes here.</p>
      </div>

     
      {/* Retry Button */}
      <div className="justify-center mt-6">
        <button 
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
          onClick={onRetry}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Results;
