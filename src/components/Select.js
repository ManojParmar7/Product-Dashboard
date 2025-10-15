export default function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  className = "",
}) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        value={value || ""}
        onChange={onChange}
        className={`
          border border-gray-300 rounded-md 
          text-sm text-gray-700
          px-3 py-2
          h-[40px]   
          focus:outline-none focus:ring-1 focus:ring-blue-500 
          appearance-none bg-white
        `}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
