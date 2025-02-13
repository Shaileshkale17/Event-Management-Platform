export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex space-x-2 gap-5">
        <div className="w-4 h-4 text-4xl text-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]">
          M
        </div>
        <div className="w-4 h-4 text-4xl text-gray-300 rounded-full animate-bounce [animation-delay:0.10s]">
          Y
        </div>
        <div className="w-4 h-4 text-4xl text-gray-300 rounded-full animate-bounce [animation-delay:0.20s]">
          E
        </div>
        <div className="w-4 h-4 text-4xl text-gray-300 rounded-full animate-bounce [animation-delay:0.30s]">
          V
        </div>
        <div className="w-4 h-4 text-4xl text-gray-300 rounded-full animate-bounce [animation-delay:0.40s]">
          E
        </div>
        <div className="w-4 h-4 text-4xl text-gray-300  rounded-full animate-bounce [animation-delay:0.50s]">
          N
        </div>
        <div className="w-4 h-4 text-4xl text-gray-300 rounded-full animate-bounce [animation-delay:0.60s]">
          T
        </div>
      </div>
    </div>
  );
}
