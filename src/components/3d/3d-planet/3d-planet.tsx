import './3d-planet.css';

export default function Planet3D() {
  return (
    <div className="transform-3d perspective-normal ml-10">
      <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center translate-z-[20px]" />
      <div className="w-2 h-2 rounded-full bg-red-500 red-ball absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="w-2 h-2 rounded-full bg-blue-500 blue-ball absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="w-2 h-2 rounded-full bg-green-500 green-ball absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
