const Header = () => {
  return (
    <>
      <div className="fixed inset-x-0 flex items-center justify-between py-[35px] px-[150px] font-poppins">
        <div>Logo</div>
        <div className="grid grid-cols-2 gap-[10px] text-center">
          <button className="border-2 border-gray-600 rounded-xl py-2 px-3.5 font-medium text-[13px] text-[#E1E1E1]">
            About Me
          </button>
          <button className="bg-white rounded-xl py-2 px-3.5 font-medium text-[13px] text-black">
            Contact
          </button>
        </div> 
      </div>
    </>

  )
}

export default Header;