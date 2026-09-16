import { memo } from 'react';
import './StartTimeButton.css';

interface StartTimeButtonProps {
  onStartTime: () => void;
}

export const StartTimeButton = memo(function StartTimeButton({ onStartTime }: StartTimeButtonProps) {
  return (
    <button className='startTimeButton' onClick={onStartTime}>
      START
    </button>
  );
});
