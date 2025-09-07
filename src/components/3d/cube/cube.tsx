import './cube.css';

export default function Cube() {
  return (
    <div className="w-17 mt-2">
      <div className="transform-3d perspective-distant ml-8 relative cube-3d">
        <div className="bg-red-200 w-10 h-10 -translate-z-5 absolute" />
        <div className="bg-blue-200 w-10 h-10 translate-z-5 absolute" />
        <div className="bg-green-200 w-10 h-10 rotate-y-90 translate-x-5 absolute" />
        <div className="bg-orange-200 w-10 h-10 rotate-y-90 -translate-x-5 absolute" />
        <div className="bg-fuchsia-200 w-10 h-10 rotate-x-90 translate-y-5 absolute" />
        <div className="bg-gray-200 w-10 h-10 rotate-x-90 -translate-y-5 absolute" />
      </div>
    </div>
  );
}
