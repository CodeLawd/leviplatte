interface InputProps {
  label?: string
  type: string
  placeholder: string
  color?: string
}

const InputBox = ({ label, type, placeholder = '', color = "black" }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name="email"
          id="email"
          className={`block w-full rounded-md border border-gray-300 bg-transparent p-3 text-${color} focus:border-leviplatte focus:ring-leviplatte sm:text-sm`}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default InputBox
