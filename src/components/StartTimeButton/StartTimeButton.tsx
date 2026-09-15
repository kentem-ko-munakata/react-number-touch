import './StartTimeButton.css';

interface StartTimeButtonProps {
  onStartTime: () => void;
}

export function StartTimeButton({ onStartTime }: StartTimeButtonProps) {
  return (
    <button className='startTimeButton' onClick={onStartTime}>
      START
    </button>
  );
}
