import { useEffect, useState } from "react";
import { ShipWheelIcon, EyeOff, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

export const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sigupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // const queryClient = useQueryClient();

  // const {
  //   mutate: signupMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  const { isPending, error, signupMutation } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(sigupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p:8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* SIGNUP FORM - LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center  justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              InstaMeet
            </span>
          </div>

          {/* ERROR MESSAGE ANY IF */}
          {error && (
            <div className="alert alert-error mb-4 p-3">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Create an Account</h2>
                  <p className="text-sm opacity-70">
                    Join InstaMeet and Start your language learning adventure!
                  </p>
                </div>

                <div className="space-y-3">
                  {/* FULLNAME */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Dinesh Rinwa"
                      className="input input-bordered w-full"
                      value={sigupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...sigupData,
                          fullName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>

                    <input
                      type="email"
                      placeholder="hello@gmail.com"
                      className="input input-bordered w-full"
                      value={sigupData.email}
                      onChange={(e) =>
                        setSignupData({ ...sigupData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="form-control w-full relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="input input-bordered w-full pr-10"
                      value={sigupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...sigupData,
                          password: e.target.value,
                        })
                      }
                      required
                    />

                    {/* Icon positioned inside input field */}
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-5 top-[50%] cursor-pointer text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>

                    <p className="text-xs opacity-70 mt-1">
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        required
                      />

                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">
                          terms of service
                        </span>{" "}
                        and{" "}
                        <span className="text-primary hover:underline">
                          privacy policy
                        </span>
                      </span>
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary w-full" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm ">
                    Already have an account ?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.svg"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Connect with language Partners with worldwide
              </h2>
              <p className="opacity-70">
                Practice conversations, make friends and improve your language
                skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
