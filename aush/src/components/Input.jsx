export function Input({ label, type = "text", placeholder }) {
    return (
      <div className="flex flex-col">
        {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
    );
  }
  