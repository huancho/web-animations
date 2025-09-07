import Image from 'next/image';
import './ying-yang.css';

export default function YingYang() {
  return (
    <div className="ml-6 relative">
      <div className="ying-yang">
        <div className="yin-yang-side bg-foreground" />
      </div>
      <div className="ying-yang">
        <div className="ying outer front bg-foreground">
          <Image src="/yy.svg" alt="Ying Yang icon" width={150} height={150} />
        </div>
        <div className="ying inner front bg-foreground" />
        <div className="ying outer back bg-foreground">
          <Image src="/yy.svg" alt="Ying Yang icon" width={150} height={150} />
        </div>
        <div className="ying inner back bg-foreground" />
      </div>
    </div>
  );
}
