interface Form {
  placeholder: string;
  value: string;
  width: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, width, type, handleChange }: Form) => {
  return (
    <div className={`relative ${width} rounded-[8px]`}>
      <input
        className="py-2 w-full px-4 border border-darkolivegreen-100 font-[400] rounded-[4px] text-[16px] outline-none focus:shadow-2xl"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
