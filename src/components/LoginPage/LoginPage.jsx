import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-full  ">

    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        // backgroundImage: `url(${bgColor})`,
        background:"radial-gradient(circle, rgb(231, 197, 185), rgb(234 217 207), rgb(255, 255, 255), rgb(255, 255, 255))",
        // backgroundSize: "cover",
        backgroundPosition: "relative",
        zIndex: -10,
      }}
      >
      <img className="mb-4" src={Logo} />
      <div className="max-w-sm flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded-xl shadow-md text-black w-full">
          <h1 className="text-2xl text-center mb-5">Sign in to admin</h1>
          <input
            type="text"
            className="border border-gray-200 p-4 rounded-lg w-full mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="p-4 border border-grey-200 w-full rounded-lg mb-4"
            name="password"
            placeholder="Password"
            />

          <button
            className="w-full text-center py-3 rounded-lg bg-green text-white bg-blue-700"
            onClick={handleClick}
            >
            Login
          </button>
        </div>
      </div>
    </div>
            </div>
  );
};

export default LoginPage;
