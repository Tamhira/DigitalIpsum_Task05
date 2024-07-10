import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import home from "./assets/home.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import { MdBackupTable } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";
import { TiMessage } from "react-icons/ti";


function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className="flex justify-between items-center px-36 bg-[#F3FCFA] py-8">
        <div className="w-2/3">
          <div className="text-[#40BFB9] text-2xl font-semibold pb-2">
            Drive Growth and Maximize Efficiency
          </div>
          <div className="text-5xl font-bold ">Transform Your Business</div>
          <div className="text-5xl font-bold py-2">with Our Dynamic Suite</div>
          <div className="text-5xl font-bold">of SaaS Offerings</div>
          <div className="text-md pt-4 text-gray-500 w-[700px]">
            With our suite of SaaS offerings, you can unleash the full potential
            of your business. Seamlessly integrate cutting-edge technology into
            your workflows to drive growth.
          </div>
          <div className="flex gap-4 mb-6 mt-8">
            <div className="bg-[#40BFB9] py-2 px-4 rounded-sm font-semibold text-white">
              Get Started
            </div>
            <div className="bg-[#160647] py-2 px-4 rounded-sm font-semibold text-white">
              Contact Us
            </div>
          </div>
          <div className="flex py-4 gap-12">
            <div>
              <div className="font-bold text-4xl text-center">129+</div>
              <div className="text-lg text-gray-500 py-1">Brand Awareness</div>
            </div>
            <div>
              <div className="font-bold text-4xl text-center">300K+</div>
              <div className="text-lg text-gray-500 py-1">
                Growth in Customer
              </div>
            </div>
            <div>
              <div className="font-bold text-4xl text-center">87%</div>
              <div className="text-lg text-gray-500 py-1">
                Brands Leveraging
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-end">
            <img src={home} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-between px-36 gap-14 py-24">
        <div>
          <div className="text-5xl flex justify-center items-center">
            <MdBackupTable />
          </div>
          <div className="text-center text-2xl font-semibold py-3">
            Custom Software Development
          </div>
          <div className="text-center">
            From concept to deployment, we offer tailor-made software solutions
            to meet your business.
          </div>
        </div>
        <div>
          <div className="text-5xl flex justify-center items-center">
            <BsGraphUpArrow />
          </div>
          <div className="text-center text-2xl font-semibold py-3">
            Cloud-Based Data Analytics
          </div>
          <div className="text-center">
            Harness the power of your data with our cloud-based analytics
            services
          </div>
        </div>
        <div>
          <div className="text-5xl flex justify-center items-center">
            <IoSettingsOutline />
          </div>
          <div className="text-center text-2xl font-semibold py-3">
            24/7 IT Support and Maintenance
          </div>
          <div className="text-center">
            Keep your business running smoothly with our comprehensive IT
            support, maintenance.
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-36 pt-8 pb-24 gap-20">
        <div className="w-1/3">
          <div className="flex justify-start">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="w-2/3">
          <div className="text-[#40BFB9] text-xl font-semibold pb-2">
            Enhance Collaboration
          </div>
          <div className="text-5xl font-bold ">
            Join the SaaS Revolution with{" "}
          </div>
          <div className="text-5xl font-bold py-2">
            Our Intuitive and Agile Platform
          </div>
          <div className="text-md pt-4 text-gray-500 w-[700px]">
            Our platform is designed with your success in mind, offering
            intuitive features and a user-friendly interface that streamline
            workflows and drive productivity. Say good bye to complex
            installations and lengthy setups.
          </div>
          <div className="flex gap-14 py-8 text-lg ">
            <div>
              <div className="flex gap-2">
                <div className="pt-1">
                  <FaRegCircleCheck />
                </div>
                <div>Influencer Selection</div>
              </div>
              <div className="flex gap-2 py-2">
                <div className="pt-1">
                  <FaRegCircleCheck />
                </div>
                <div>Campaign Management</div>
              </div>
              <div className="flex gap-2">
                <div className="pt-1">
                  <FaRegCircleCheck />
                </div>
                <div>ROI Tracking</div>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="pt-1">
                  <FaRegCircleCheck />
                </div>
                <div>Influencer Identification</div>
              </div>
              <div className="flex gap-2 py-2">
                <div className="pt-1">
                  <FaRegCircleCheck />
                </div>
                <div>Strategic Campaign Development</div>
              </div>
              <div className="flex gap-2">
                <div className="pt-1">
                  <FaRegCircleCheck />
                </div>
                <div>Content Creation Collaboration</div>
              </div>
            </div>
          </div>
          <div className="bg-[#40BFB9] py-2 px-4 rounded-sm font-semibold text-white w-[150px] text-center my-4">
            Learn More
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-36 bg-[#F3FCFA] py-20">
        <div className="w-2/3">
          <div className="flex gap-3">
            <div className=" text-[#40BFB9] text-4xl">
              <TbCircleNumber1 />
            </div>
            <div>
              <div className="font-bold text-2xl">
                Discover Our SaaS Solutions
              </div>
              <div className="w-[500px] py-2">
                Explore our range of SaaS offerings tailored to meet your
                business needs. From customizable software solutions.
              </div>
            </div>
          </div>

          <div className="flex gap-3 py-8">
            <div className=" text-[#40BFB9] text-4xl">
              <TbCircleNumber2 />
            </div>
            <div>
              <div className="font-bold text-2xl">
                Discover Our SaaS Solutions
              </div>
              <div className="w-[500px] py-2">
                Explore our range of SaaS offerings tailored to meet your
                business needs. From customizable software solutions.
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className=" text-[#40BFB9] text-4xl">
              <TbCircleNumber3 />
            </div>
            <div>
              <div className="font-bold text-2xl">
                Discover Our SaaS Solutions
              </div>
              <div className="w-[500px] py-2">
                Explore our range of SaaS offerings tailored to meet your
                business needs. From customizable software solutions.
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex justify-end">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-36 py-24 gap-24">
        <div className="w-1/3">
          <div className="flex justify-start">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="w-2/3">
          <div className="text-[#40BFB9] text-xl font-semibold pb-2">
            Unlock Efficiency and Drive Success
          </div>
          <div className="text-5xl font-bold ">
            Explore the Versatility of Our
          </div>
          <div className="text-5xl font-bold py-2">
            Comprehensive SaaS Toolset
          </div>
          <div className="text-md pt-4 text-gray-500 w-[700px]">
            Explore the versatility of our SaaS toolset and discover a world of
            possibilities awaiting your business. From project management to
            customer relationship management,
          </div>
          <div className="py-6">
            <div>Satisfaction Clients</div>
            <div class="w-[600px] bg-gray-200 h-4 mt-2 mb-6">
              <div class="w-[400px] h-full bg-gradient-to-r from-white to-[#40BFB9] "></div>
            </div>
            <div>Online Sales Conversion</div>
            <div class="w-[600px] bg-gray-200 h-4 mt-2 mb-6">
              <div class="w-[400px] h-full bg-gradient-to-r from-white to-[#40BFB9] "></div>
            </div>
            <div>Click-Through Rate (CTR)</div>
            <div class="w-[600px] bg-gray-200 h-4 mt-2 mb-6">
              <div class="w-[400px] h-full bg-gradient-to-r from-white to-[#40BFB9] "></div>
            </div>
          </div>
          <div className="bg-[#40BFB9] py-2 px-4 rounded-sm font-semibold text-white w-[150px] text-center my-4">
            Learn More
          </div>
        </div>
      </div>

      <div className="px-36 py-14 bg-[#F3FCFA]">
        <div className="flex justify-between">
          <div className="text-5xl font-bold">Our Latest Blogs</div>
          <div className="bg-[#40BFB9] py-2 px-4 rounded-sm font-semibold text-white w-[150px] text-center my-4">
            Learn More
          </div>
        </div>

        <div className="flex justify-between pt-8">
          <div>
            <div className="rounded-md">
              <img src={img4} alt="" />
            </div>
            <div className="bg-white p-4 rounded-md">
              <div className="text-gray-500 pb-3">June 12, 2024</div>
              <div className="text-xl font-semibold">
                How Our SaaS Solutions Can{" "}
              </div>
              <div className="text-xl font-semibold">
                Streamline Your Workflow
              </div>
              <div className="flex justify-between pt-3">
                <div className="flex gap-2">
                  <div>
                    <img src={img5} alt="" />
                  </div>
                  <div className="pt-2 font-semibold">John</div>
                </div>
                <div className="flex gap-2 pr-2">
                  <div className="pt-1 text-xl">
                    <TiMessage />
                  </div>
                  <div>21</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md">
              <img src={img4} alt="" />
            </div>
            <div className="bg-white p-4 rounded-md">
              <div className="text-gray-500 pb-3">August 28, 2022</div>
              <div className="text-xl font-semibold">
                The Power of Data Unleashing{" "}
              </div>
              <div className="text-xl font-semibold">
                Insights with Analytics
              </div>
              <div className="flex justify-between pt-3">
                <div className="flex gap-2">
                  <div>
                    <img src={img5} alt="" />
                  </div>
                  <div className="pt-2 font-semibold">Emilia</div>
                </div>
                <div className="flex gap-2 pr-2">
                  <div className="pt-1 text-xl">
                    <TiMessage />
                  </div>
                  <div>9</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md">
              <img src={img4} alt="" />
            </div>
            <div className="bg-white p-4 rounded-md">
              <div className="text-gray-500 pb-3">May 11, 2023</div>
              <div className="text-xl font-semibold">
                Future-Proofing Your Business{" "}
              </div>
              <div className="text-xl font-semibold">
                Why SaaS is Essential for Growth
              </div>
              <div className="flex justify-between pt-3">
                <div className="flex gap-2">
                  <div>
                    <img src={img5} alt="" />
                  </div>
                  <div className="pt-2 font-semibold">Steve</div>
                </div>
                <div className="flex gap-2 pr-4">
                  <div className="pt-1 text-xl">
                    <TiMessage />
                  </div>
                  <div>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-36 py-20 flex justify-between gap-14">
        <div className="w-1/2">
          <img src={img6} alt="" className="rounded-lg" />
        </div>
        <div className="w-1/2">
          <div className="bg-[#F3FCFA] py-4 px-6 rounded-lg flex justify-between">
            <div className="text-lg font-semibold">
              What is Software as a Service and how does it benefit my business?
            </div>
            <div className="text-3xl pt-2">
              <IoIosArrowDropdown />
            </div>
          </div>
          <div className="bg-[#F3FCFA] py-4 px-6 rounded-lg flex justify-between my-2">
            <div className="text-lg font-semibold ">
              How do I get started with your SaaS platform?
            </div>
            <div className="text-3xl pt-2">
              <IoIosArrowDropdown />
            </div>
          </div>
          <div className="bg-[#F3FCFA] py-4 px-6 rounded-lg flex justify-between my-2">
            <div className="text-lg font-semibold ">
              What level of support do you offer for your SaaS products?
            </div>
            <div className="text-3xl pt-2">
              <IoIosArrowDropdown />
            </div>
          </div>

          <div className="bg-[#F3FCFA] py-4 px-6 rounded-lg flex justify-between my-2">
            <div className="text-lg font-semibold ">
              What are your payment options?
            </div>
            <div className="text-3xl pt-2">
              <IoIosArrowDropdown />
            </div>
          </div>
          <div className="bg-[#F3FCFA] py-4 px-6 rounded-lg flex justify-between my-2">
            <div className="text-lg font-semibold ">
              How often do you update your products?
            </div>
            <div className="text-3xl pt-2">
              <IoIosArrowDropdown />
            </div>
          </div>
          <div className="bg-[#F3FCFA] py-4 px-6 rounded-lg flex justify-between my-2">
            <div className="text-lg font-semibold ">
              Is your SaaS platform customizable to fit my specific business
              needs?
            </div>
            <div className="text-3xl pt-2">
              <IoIosArrowDropdown />
            </div>
          </div>
        </div>
      </div>

      <div className=" px-24 pt-8 pb-24">
        <div className="bg-[#F3FCFA] flex justify-between items-center px-12 py-8">
          <div className="w-3/5">
            <div className="text-[#40BFB9] text-xl font-semibold pb-2">
              Catch the Wave
            </div>
            <div className="text-5xl font-bold ">
              Subscribe for Exclusive Updates!
            </div>
            <div className="text-md pt-4 text-gray-500 w-[700px]">
              Our platform is designed with your success in mind, offering
              intuitive features and a user-friendly interface that streamline
              workflows and drive productivity.
            </div>
            <div className="flex gap-14 py-8 text-lg ">
              <div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegCircleCheck />
                  </div>
                  <div>Mobile App Development</div>
                </div>
                <div className="flex gap-2 py-2">
                  <div className="pt-1">
                    <FaRegCircleCheck />
                  </div>
                  <div>Web Design and Development</div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegCircleCheck />
                  </div>
                  <div>Digital Marketing Solutions</div>
                </div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegCircleCheck />
                  </div>
                  <div>Custom Software Development</div>
                </div>
                <div className="flex gap-2 py-2">
                  <div className="pt-1">
                    <FaRegCircleCheck />
                  </div>
                  <div>Cloud-Based Data Analytics</div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegCircleCheck />
                  </div>
                  <div>IT Support and Maintenances</div>
                </div>
              </div>
            </div>
            <div className="bg-[#40BFB9] py-2 px-4 rounded-sm font-semibold text-white w-[150px] text-center my-4">
              Learn More
            </div>
          </div>

          <div className="w-2/5 pl-14">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="py-2 px-4 "
              />
              <input
                type="text"
                placeholder="Company name"
                className="py-2 px-4"
              />
            </div>
            <div className="flex gap-4 my-4">
              <input
                type="text"
                placeholder="Phone number"
                className="py-2 px-4"
              />
              <input
                type="email"
                placeholder="Emal address"
                className="py-2 px-4"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                placeholder="Anything else you would like us to know?"
                rows={5}
                cols={53}
                className="py-2 px-4"
              ></textarea>
            </div>
            <div className="bg-[#160647] py-2 px-4 rounded-sm font-semibold text-white text-center mt-6">
              Subscribe for our newsletters
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;