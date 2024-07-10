import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-[#F3FCFA] px-36 py-14 flex justify-between">
        <div className="w-2/7">
          <div className="text-2xl font-semibold">
            Skyfall - Software & SaaS Landing Page
          </div>
          <div className="pt-4 text-gray-500">
            Dive into a world of innovation where sky's the limit. Whether
            you're a
          </div>
          <div className=" text-gray-500">
            startup seeking streamlined tools or an enterprise aiming for
            scalable
          </div>
          <div className="pb-4 text-gray-500">
            solutions, Skyfall has you covered.
          </div>
          <div className="flex justify-between text-2xl py-4 w-1/2">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <BsWhatsapp />
            </div>
          </div>
        </div>
        <div className="w-1/7">
          <div className="text-lg font-semibold">Company</div>
          <div className="pt-4  text-gray-500">About us</div>
          <div className="py-2 text-gray-500">Our team</div>
          <div className=" text-gray-500">Careers</div>
          <div className="py-2 text-gray-500">Blog</div>
          <div className=" text-gray-500">Contact us</div>
        </div>
        <div className="w-1/7">
          <div className="text-lg font-semibold">Products</div>
          <div className="pt-4  text-gray-500">SaaS Solutions</div>
          <div className="py-2 text-gray-500">Custom Software</div>
          <div className=" text-gray-500">Analytics Tools</div>
          <div className="py-2 text-gray-500">Mobile Apps</div>
          <div className=" text-gray-500">Web Development</div>
        </div>
        <div className="w-1/7">
          <div className="text-lg font-semibold">Support</div>
          <div className="pt-4  text-gray-500">FAQs</div>
          <div className="py-2 text-gray-500">Documentation</div>
          <div className=" text-gray-500">Contact Support</div>
          <div className="py-2 text-gray-500">Community Forum</div>
          <div className=" text-gray-500">Service Status</div>
        </div>
        <div className="w-1/7">
          <div className="text-lg font-semibold">Support</div>
          <div className="pt-4  text-gray-500">Case Studies</div>
          <div className="py-2 text-gray-500">Whitepapers</div>
          <div className=" text-gray-500">Webinars</div>
          <div className="py-2 text-gray-500">Ebooks</div>
          <div className=" text-gray-500">Tutorials</div>
        </div>
      </div>
    </>
  );
}
export default Footer;
