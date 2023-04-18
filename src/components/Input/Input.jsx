
export function Input({ placeholder, className = '', type= 'text', name = '' }) {
  return (
    <div
      className={`flex w-[260px] items-center rounded-md
      border-black border-opacity-40 xl:w-[328px] ${className}`}
    >
      <div className="relative">
        <input
          name={name}
          type={type}
          className={`peer w-[260px] rounded-xl border p-[0.6rem] outline-none
          placeholder:text-transparent xl:w-[328px]`}
          id={placeholder}
          placeholder={placeholder}
        />
        <label
          htmlFor={placeholder}
          className={`absolute -top-3 left-0 ml-4 block cursor-text rounded-xl bg-white text-sm
          text-gray-600 transition-all peer-placeholder-shown:top-2
          peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400  `}
        >
          {placeholder}
        </label>
      </div>
    </div>
  )
}
