export default function Input({ label, name, type = "text", placeholder, onChange }) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded-lg w-full"
      />
    </div>
  );
}
