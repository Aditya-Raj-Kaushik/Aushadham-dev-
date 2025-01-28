export function ProgressBar({ step }) {
    return (
      <div className="relative flex items-center mb-8">
        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-2 bg-green-600 transition-all duration-300" style={{ width: step === 1 ? "10%" : "50%" }}></div>
        </div>
        <div className="absolute inset-0 flex justify-between px-4">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${step === 1 ? 'bg-green-600' : 'bg-gray-500'}`}>1</div>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${step === 2 ? 'bg-green-600' : 'bg-gray-500'}`}>2</div>
        </div>
      </div>
    );
  }
  