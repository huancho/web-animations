import './helix.css';

export default function Helix() {
  return (
    <div className="w-17 h-10 ml-7 mt-2">
      <div className="h-10 flex items-center relative transform-3d perspective-distant -rotate-y-[45deg] helix">
        <div className="bg-gradient-to-b from-foreground via-gray-400 to-foreground w-10 h-15 absolute rounded-md rotate-x-45" />
        <div className="bg-gradient-to-b from-foreground via-gray-400 to-foreground w-10 h-15 absolute rounded-md rotate-x-90 " />
        <div className="bg-gradient-to-b from-foreground via-gray-400 to-foreground w-10 h-15 absolute rounded-md rotate-x-135" />
        <div className="bg-gradient-to-b from-foreground via-gray-400 to-foreground w-10 h-15 absolute rounded-md rotate-x-180" />
      </div>
    </div>
  );
}
