import { formatTime } from "@components/utils";

const Logger = ({ logs }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full overflow-x-auto'>
        <h1 className='text-4xl font-bold text-center mt-8 mb-4'>Logs</h1>

        <table className='w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th
                scope='col'
                className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Name
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Start Time
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                End Time
              </th>
              <th
                scope='col'
                className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Total Time Spoken
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {logs.map((log, index) => (
              <tr key={index}>
                <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                  {log.name}
                </td>
                <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                  {formatTime(log.startTime)}
                </td>
                <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                  {formatTime(log.endTime)}
                </td>
                <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                  {formatTime(log.endTime - log.startTime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logger;
