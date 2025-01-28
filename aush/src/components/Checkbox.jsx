export default function Checkbox({ label, name, onChange }) {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" name={name} onChange={onChange} className="h-4 w-4 text-green-600" />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}
