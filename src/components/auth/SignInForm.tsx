import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";
import ForgotModal from "../modal/auth/ForgotPassword"
export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-[#212121] text-title-sm dark:text-white/90 sm:text-title-md">
            Log in
            </h1>
            <p className="text-sm text-gray-500 dark:text-[#667085]">
            Welcome back! Please enter your details.
            </p>
          </div>
          <div>
           
           
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email 
                  </Label>
                  <Input placeholder="Enter your email" />
                </div>
                <div>
                  <Label>
                    Password 
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-[#494949] text-theme-sm dark:text-[#667085]">
                    Remember me
                    </span>
                  </div>
                  <div
                     onClick={() => setModalOpen(true)}
                    className="text-sm text-[#0BA5EC] hover:text-[#0BA5EC] dark:text-brand-400 cursor-pointer"
                  >
                    Forgot password?
                  </div>
                </div>
                <div>
                  <Button className="w-full !bg-[#0BA5EC]" size="sm">
                    Sign in
                  </Button>
                </div>
              </div>
            </form>

            {/* <div className="mt-5">
              <p className="text-sm font-normal text-center text-[#494949] dark:text-[#667085] sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <ForgotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
