import { ClickHandler } from '@/app/lib/definitions';

export default function TodoButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: ClickHandler;
}) {
  return (
    <button
      className='border-2 border-slate-500 p-1.5 rounded m-1 hover:bg-green-700 hover:text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
