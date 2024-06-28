const ButtonGreen = ({ children }) => {
  return (
    <button className="pl-9 pr-9 pt-2 pb-2 bg-green-custom border-0.25 border-green-custom text-black font-bold hover:bg-white duration-300 transition-all rounded-full">
      {children}
    </button>
  );
};
export default ButtonGreen;
