import { formatTime } from "@components/utils";

const Logger = ({ logs }) => {
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
              Start Time
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              End Time
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
          {logs.map((log, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                {log.name}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {formatTime(log.startTime)}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {formatTime(log.endTime)}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {formatTime(log.endTime - log.startTime)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logger;
