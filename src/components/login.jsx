import google from "../assets/google.svg";

function Login() {
  return (
    <div className="dark:bg-dark bg-lightLayout h-[100vh] md:px-0 px-5">
       <div className="dark:text-white text-lightText text-2xl  max-md:justify-center pt-10 pl-0 md:pl-10 font-bold flex gap-1">
        LEARN <div className="text-purple-600">QUEST</div>
      </div>
      <div className="mx-auto max-w-[500px] p-7 mt-10 dark:bg-loginDark bg-white dark:shadow-none shadow-custom dark:text-white text-lightText rounded-xl">
        <div className="lg:text-4xl text-2xl font-bold">Welcome</div>
        <div className="dark:text-textDark text-lightText mt-2">Log in to your account</div>
        <div className="mt-6 py-3 cursor-pointer  flex gap-2 items-center justify-center border dark:border-textDark/40 border-borderLight rounded-md">
          <img className="w-7 h-7" src={google} alt="" />
          <div className="dark:text-white text-lightDark">
            Log in with Google
          </div>
        </div>

        <div className="dark:text-textDark text-lightText mt-8 flex items-center gap-3">
          <div className="dark:bg-textDark bg-lightText h-[1px] w-1/2"></div>
          OR
          <div className="dark:bg-textDark bg-lightText h-[1px] w-1/2"></div>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="">Email</label>
          <input
              className="mt-2 border dark:border-textDark/40 border-lightText/30 rounded-md w-full"
              type="text"
            />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="">Password</label>
          <input
              className="mt-2 border dark:border-textDark/40 border-lightText/30 rounded-md w-full"
              type="password"
            />
          <div className="text-lightBtn mt-2 underline ">
            <a href="">Forgot password?</a>
          </div>
        </div>

        <div className="hover:bg-purple-900 transition bg-purple-700 rounded-md py-4 text-center mt-8 text-white font-semibold cursor-pointer">
          Log in
        </div>
        <div className="text-darkText mt-3 flex gap-2 items-center">
          Already have an account?
          <div className="text-lightBtn underline ">
            <a href="">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
