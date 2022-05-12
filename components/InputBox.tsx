
interface InputProps  {
    label: string,
    type: string,
    placeholder: string,
}

const InputBox = ({ label, type, placeholder = ""} : InputProps) => {
    return (
      <div className="mb-4">
        <label htmlFor={label} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <input
            type={type}
            name="email"
            id="email"
            className="border p-3 focus:ring-leviplatte focus:border-leviplatte block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }

  export default InputBox