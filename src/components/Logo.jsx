import { Gamepad2 } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Gamepad2
        className="text-blue-500 text-shadow-blue-700 text-shadow-xl"
        size={40}
      />
      <h1 className="text-white font-bold">GameExplorer</h1>
    </div>
  );
}

export default Logo;
