import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer bg-black mt-6 h-40">
      <div className="flex justify-between text-white text-sm p-2 lg:text-4xl">
        Himanshu{" "}
        <div className="flex items-center gap-1">
          <FaCopyright />
          2024
        </div>
      </div>

      <div className="bg-white h-[0.1rem] mb-4"></div>

      <div className="text-white flex justify-between p-2">


        <div>
            <h1 className="text-xl">Contact</h1>
            <p className="text-xs lg:text-sm">himanshusingh5t5t@gmail.com</p>
            <p className="text-xs  lg:text-sm">8376849918</p>
        </div>


        <div>
            <h1 className="text-xl">Consists of</h1>
            <p className="text-xs lg:text-sm">2 projects</p>
            <p className="text-xs lg:text-sm">MERN ful stack</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
