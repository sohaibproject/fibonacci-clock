import useFibonacci from './hooks/useFibonacci';
import { fibonacciNumbers } from './helper';

const FibonacciClock: React.FC = () => {
  const { decrementTime, displayColors, hours, incrementTime, minutes } = useFibonacci();
  return (
    <div className='relative bg-black w-full h-screen flex flex-col items-center justify-center'>
      <div className='text-center text-white mb-3'>
        <h1 className='text-3xl font-bold'> Fibonacci Clock</h1>
        <p className='text-xl mt-4'>Current Time: {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`}</p>
      </div>
      <div className='relative border border-black w-[800px] h-[500px] mx-auto'>
        <div
          className={`absolute ${
            displayColors[2] === 'red' ? 'bg-red-500' : displayColors[2] === 'blue' ? 'bg-blue-500' : displayColors[2] === 'green' ? 'bg-green-500' : 'bg-white'
          } border border-black w-[200px] h-[200px] top-0 left-0 flex items-center justify-center`}>
          <div className='text-2xl text-black'>{fibonacciNumbers[2]}</div>
        </div>
        <div
          className={`absolute ${
            displayColors[0] === 'red' ? 'bg-red-500' : displayColors[0] === 'blue' ? 'bg-blue-500' : displayColors[0] === 'green' ? 'bg-green-500' : 'bg-white'
          } border border-black w-[100px] h-[100px] top-0 left-[200px] flex items-center justify-center`}>
          <div className='text-2xl text-black'>{fibonacciNumbers[0]}</div>
        </div>
        <div
          className={`absolute ${
            displayColors[1] === 'red' ? 'bg-red-500' : displayColors[1] === 'blue' ? 'bg-blue-500' : displayColors[1] === 'green' ? 'bg-green-500' : 'bg-white'
          } border border-black w-[100px] h-[100px] top-[100px] left-[200px] flex items-center justify-center`}>
          <div className='text-2xl text-black'>{fibonacciNumbers[1]}</div>
        </div>
        <div
          className={`absolute ${
            displayColors[3] === 'red' ? 'bg-red-500' : displayColors[3] === 'blue' ? 'bg-blue-500' : displayColors[3] === 'green' ? 'bg-green-500' : 'bg-white'
          } border border-black w-[300px] h-[300px] top-[200px] left-0 flex items-center justify-center`}>
          <div className='text-2xl text-black'>{fibonacciNumbers[3]}</div>
        </div>
        <div
          className={`absolute ${
            displayColors[4] === 'red' ? 'bg-red-500' : displayColors[4] === 'blue' ? 'bg-blue-500' : displayColors[4] === 'green' ? 'bg-green-500' : 'bg-white'
          } border border-black w-[500px] h-[500px] top-0 left-[300px] flex items-center justify-center`}>
          <div className='text-2xl text-black'>{fibonacciNumbers[4]}</div>
        </div>
      </div>
      <div className=' text-white'>
        <div className='mt-4'>
          <button onClick={decrementTime} className='bg-red-500 text-white px-4 py-2 rounded mr-4 hover:bg-red-600'>
            Back
          </button>
          <button onClick={incrementTime} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FibonacciClock;
