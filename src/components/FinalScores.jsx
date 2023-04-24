import { formatTime } from "@components/utils";
import { useState, useEffect } from "react";

const FinalScores = ({ scores = [] }) => {
  // Create a map to store the total time spoken by each participant
  const [finalScores, setFinalScores] = useState([]);

  useEffect(() => {
    // Calculate the total time spoken for each participant
    const totalTimeSpokenMap = new Map();
    scores?.forEach((score) => {
      const { name, endTime, startTime } = score;
      const totalTimeSpoken = endTime - startTime;
      if (totalTimeSpokenMap.has(name)) {
        totalTimeSpokenMap.set(
          name,
          totalTimeSpokenMap.get(name) + totalTimeSpoken
        );
      } else {
        totalTimeSpokenMap.set(name, totalTimeSpoken);
      }
    });

    // Convert the map to an array of { name, totalTimeSpoken } objects and sort in descending order of total time spoken
    const sortedFinalScores = Array.from(
      totalTimeSpokenMap,
      ([name, totalTimeSpoken]) => ({ name, totalTimeSpoken })
    ).sort((a, b) => b.totalTimeSpoken - a.totalTimeSpoken);

    setFinalScores(sortedFinalScores);
  }, [scores]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Name
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Total Time Spoken
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {finalScores.map((score, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                {score.name}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {formatTime(score.totalTimeSpoken)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalScores;
