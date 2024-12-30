import bgSmall from "./bgSmall.svg";
import bgbig from "./bgBig.svg";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdChevronLeft } from "react-icons/md";

export function UiNavBar() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordHide = useRef();

  function handlePasswordHide() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(email);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    console.log(password);
  }
  async function showToast() {
    if (email.trim() === "" || password.trim() === "") {
      toast.error("Please fill in all fields.");
    } else {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          toast.success("You are successfully logged in!");
        } else {
          toast.error(data.message || "An error occurred.");
        }
      } catch (error) {
        toast.error("Failed to connect to the server.");
        console.error("Error:", error);
      }
    }
  }

  let inputCss =
    "border-[1.4px] border-[#cfcccc] w-full h-[40px] placeholder:text-[#757575] text-[#757575] text-[15px] p-3 mt-1";
  let labelCss = "text-[15px] font-semibold text-[#333333]";

  return (
    <div className="my-6 max-w-[1700px]">
      <div className=" flex flex-col md:flex-row md:relative lg:items-center mx-auto">
        <div className="relative lg:w-[60%] overflow-hidden">
          <img src={bgbig} alt="" className="w-full" />
          <div className="absolute top-0 text-white mt-5 sm:mt-20 ml-12 lg:mt-24 xl:mt-28 lg:ml-20 mx-5">
            <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium md:font-bold lg:font-extrabold">
              Welcome,
            </h2>
            <h1 className="text-[25px] md:text-[30px] lg:text-[35px] lg:mb-8 font-bold my-[8px]">
              AstraGrove International Public School
            </h1>
            <p className="text-xl md:text-[30px] lg:text-[35px] font-light">
              Admin Panel
            </p>
            <p className="text-[15px] flex items-center gap-2 font-light absolute -top-2 right-0 sm:-right-[80px] md:hidden sm:-top-12 lg:-top-[50px]">
              <MdChevronLeft style={{ width: "25px", height: "26px" }} /> Go To
              Website
            </p>
          </div>
        </div>
        <div className="mx-16 bg-[#f8f8f8] -mt-12 md:mt-10 lg:-mt-16 max-w-[500px] relative md:static md:w-[40%] md:max-w-[350px]">
          <h2 className="mb-8 text-[22px] font-bold text-[#333333]">
            Login to your account
          </h2>
          <p>
            <label htmlFor="" className={labelCss}>
              Email
            </label>

            <input
              type="email"
              onChange={handleEmailChange}
              placeholder="Please enter your email"
              className={inputCss}
            />
          </p>
          <div className="mt-5">
            <label className={labelCss}>Password</label>

            <p className="relative">
              <input
                ref={passwordHide}
                onChange={handlePasswordChange}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Please enter your password"
                className={`${inputCss} pr-10`} // Add padding to the right for the icon
              />
              <button
                onClick={handlePasswordHide}
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isPasswordVisible ? (
                    <>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  ) : (
                    <>
                      <path d="M3.98 8.223A10.477 10.477 0 0112 5c4.478 0 8.268 2.943 9.542 7-.597 1.902-1.69 3.593-3.111 4.912M3.98 8.223a9.94 9.94 0 00-1.525 3.777c1.274 4.057 5.064 7 9.542 7 2.214 0 4.265-.723 5.962-1.945M3.98 8.223l12.04 12.04M15 12a3 3 0 01-6 0 3 3 0 016 0z" />
                    </>
                  )}
                </svg>
              </button>
            </p>
          </div>

          <p>
            <button
              className="bg-[#002855] hover:bg-[#0d3563] text-white text-[16px] font-bold w-full my-5 p-2 rounded-[4px]"
              onClick={showToast}
            >
              Login
            </button>
          </p>
          <a className="text-[15px] font-normal cursor-pointer text-[#002855] underline">
            Forget Password?
          </a>
        </div>
        <p className="text-[15px] items-center text-[#000000] gap-2 font-medium md:absolute top-0 right-12 hidden md:flex ">
              <MdChevronLeft style={{ width: "25px", height: "26px" }} /> Go To
              Website
            </p>
      </div>
    </div>
  );
}
