import logo from "../assets/logo.png";
function Navigation() {
  return (
    <>
      <div className="flex justify-between items-center px-36 py-8 bg-[#F3FCFA]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="max-sm:hidden flex gap-12  items-center py-2">
          <div className="font-medium">Home</div>
          <div className="font-medium">About</div>
          <div className="font-medium">Features</div>
          <div className="font-medium">Pricing</div>
          <div className="font-medium">Contact</div>
          <div className="font-medium">FAQs</div>
        </div>
        <div className="flex lg:gap-12">
          <div className="font-semibold py-2 ">Sign In</div>
          <div className="bg-[#40BFB9] text-white font-semibold px-4 py-2 rounded-md">
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
