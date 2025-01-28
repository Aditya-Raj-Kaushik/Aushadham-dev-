export default function ProgressBar({ progress }) {
  return (
    <div className="relative flex items-center mb-8">
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-2 bg-green-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
