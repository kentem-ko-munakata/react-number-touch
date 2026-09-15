import './Header.css';

interface HeaderProps {
  timer: number;
}

export function Header({ timer }: HeaderProps) {
  return (
    <div className='header'>
      <p className='timer'>{(timer / 100).toFixed(2)}</p>
    </div>
  );
}
