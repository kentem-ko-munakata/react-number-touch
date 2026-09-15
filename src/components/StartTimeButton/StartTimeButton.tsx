interface StartTimeButtonProps {
  onStartTime: () => void;
}

export function StartTimeButton({ onStartTime }: StartTimeButtonProps) {
  return (
    <button className='startCountButton' onClick={onStartTime}>
      START
    </button>
  );
}
