import { FibonacciSquareProps } from '../type';

const FibonacciSquare: React.FC<FibonacciSquareProps> = ({ number, color, size, position }) => {
  return (
    <div
      className={`absolute border border-black flex items-center justify-center 
          ${color === 'red' ? 'bg-red-500' : color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : 'bg-white'}`}
      style={{ width: size, height: size, top: position.top, left: position.left }}>
      <div className='text-2xl text-black'>{number}</div>
    </div>
  );
};

export default FibonacciSquare;
