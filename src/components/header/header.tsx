import './header.css';

export default function Header() {
  const TEXT = 'Web Animations';
  return (
    <header className="py-6">
      <h1 className="header-text overflow-hidden text-3xl text-center font-semibold tracking-tighter">
        {TEXT.split('').map((char, index) => {
          return (
            <span
              key={index}
              style={{ '--index': index } as React.CSSProperties}
            >
              {char}
            </span>
          );
        })}
      </h1>
    </header>
  );
}
