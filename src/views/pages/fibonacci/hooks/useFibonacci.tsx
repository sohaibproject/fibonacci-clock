import { useEffect, useState } from 'react';
import { fibonacciNumbers } from '../helper';
import { SquareColor } from '../type';

const useFibonacci = () => {
  const [displayColors, setDisplayColors] = useState<SquareColor[]>(['white', 'white', 'white', 'white', 'white']);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to get the Fibonacci decomposition for a number
  const getFibonacciDecomposition = (number: number): boolean[] => {
    let result = [false, false, false, false, false];
    for (let i = fibonacciNumbers.length - 1; i >= 0; i--) {
      if (number >= fibonacciNumbers[i]) {
        result[i] = true;
        number -= fibonacciNumbers[i];
      }
    }
    return result;
  };

  // Function to update colors based on time
  const updateClockColors = (time: Date) => {
    const hours = time.getHours() % 12; // Convert to 12-hour format
    const minutes = Math.floor(time.getMinutes() / 5); // Divide minutes by 5 to map onto Fibonacci decomposition

    // Get the Fibonacci decomposition for both hours and minutes
    const hourDecomposition = getFibonacciDecomposition(hours);
    const minuteDecomposition = getFibonacciDecomposition(minutes);

    // Initialize all colors to white
    const newColors: SquareColor[] = ['white', 'white', 'white', 'white', 'white'];

    // Set colors for each Fibonacci square
    for (let i = 0; i < fibonacciNumbers.length; i++) {
      if (hourDecomposition[i] && minuteDecomposition[i]) {
        newColors[i] = 'blue'; // Both hours and minutes use this Fibonacci number
      } else if (hourDecomposition[i]) {
        newColors[i] = 'red'; // Only hours use this Fibonacci number
      } else if (minuteDecomposition[i]) {
        newColors[i] = 'green'; // Only minutes use this Fibonacci number
      }
    }

    // Update the state with the new colors
    setDisplayColors(newColors);
  };

  // Call the update function whenever the time changes
  useEffect(() => {
    updateClockColors(currentTime);
  }, [currentTime]);

  // Increment and decrement time manually by 5 minutes
  const incrementTime = () => {
    const newTime = new Date(currentTime.getTime() + 5 * 60 * 1000);
    setCurrentTime(newTime);
  };

  const decrementTime = () => {
    const newTime = new Date(currentTime.getTime() - 5 * 60 * 1000);
    setCurrentTime(newTime);
  };

  const { hours, minutes } = {
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
  };

  return { hours, minutes, incrementTime, decrementTime, displayColors };
};

export default useFibonacci;
