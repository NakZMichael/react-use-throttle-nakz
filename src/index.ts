import { useState } from 'react';

/**
 * Return true if intervalMs milliseconds have passed since the last time it returns true.
 * Otherwise, return false.
 * */
export function useThrottle(intervalMs: number) {
  const [lastTime, setLastTime] = useState(new Date().getTime());
  const currentTime = new Date().getTime();
  if (currentTime > lastTime + intervalMs) {
    setLastTime(currentTime);
    return true;
  }
  return false;
}
export default useThrottle;
