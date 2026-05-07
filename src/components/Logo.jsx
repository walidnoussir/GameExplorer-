import { Gamepad2 } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <Gamepad2 className="text-blue-500 text-shadow-blue-700 text-shadow-xl lg:size-10" />
      <h1 className="text-white font-bold">GameExplorer</h1>
    </div>
  );
}

export default Logo;
