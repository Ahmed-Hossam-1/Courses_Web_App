import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div className="flex p-[40px] w-[950px] h-[550px] bg-mainWhite absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg rounded-lg">
      <div className="flex flex-col gap-5 w-[50%] border-r">
        <span className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faGraduationCap} />
          <span className="font-bold text-[20px]">Educatsy</span>
        </span>
        <h1 className="text-[40px] font-bold">
          Welcome to <br /> Educatsy Online Learning Platform
        </h1>
        <img className="w-[300px]" src="/images/register.png" alt="register" />
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center gap-5">
        <div className="cursor-pointer border border-black px-[40px] py-[10px] flex gap-3 items-center rounded-lg">
          <FontAwesomeIcon color="red" icon={faGoogle} />
          <span>Signin with Google</span>
        </div>
        <h3 className="flex">- or sign up with your email -</h3>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              className="border border-black px-[25px] py-[10px] rounded-lg"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              type="text"
              className="border border-black px-[25px] py-[10px] rounded-lg"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              type="text"
              className="border border-black px-[25px] py-[10px] rounded-lg"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="mt-5 border bg-[#e6581bd7] hover:bg-[#e6581b] text-white px-[40px] py-[10px] rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
