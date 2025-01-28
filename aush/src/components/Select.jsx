export default function Select({ label, name, options, onChange }) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}
      <select name={name} onChange={onChange} className="p-2 border border-gray-300 rounded-lg w-full">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
