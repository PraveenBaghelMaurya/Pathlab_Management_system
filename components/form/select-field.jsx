export function SelectField({ label, id, options, error, className = "", ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        className={`w-full px-3 py-2 bg-gray-200 border-0 rounded-md focus:ring-2 focus:ring-primary focus:outline-none ${
          error ? "ring-2 ring-red-500" : ""
        } ${className}`}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

