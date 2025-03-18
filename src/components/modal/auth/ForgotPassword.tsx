import { useState } from "react";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { Link } from "react-router";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;

  const handleSendOtp = () => {
    if (email) {
      setIsOtpSent(true);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.join("")) {
      setIsOtpVerified(true);
    }
  };

  return (
    <div className="fixed inset-0 right-0 backdrop-bg bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-[546px] shadow-lg relative">
        {!isOtpSent ? (
          <>
            <div className="flex flex-col mb-6">
              <h4 className="text-[20px] font-medium text-[#344054]">Send mail</h4>
              <p className="text-[14px] font-medium text-[#475467]">Type your current email address and wait for OTP</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Type Email address</Label>
                <Input 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={onClose}
                  className="w-[67px] bg-transparent p-2 rounded border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendOtp}
                  className="w-[99px] bg-[#0BA5EC] text-white p-2 rounded"
                >
                  Send OTP
                </button>
              </div>
            </div>
          </>
        ) : !isOtpVerified ? (
          <>
            <div className="flex flex-col mb-6">
              <h4 className="text-[20px] font-medium text-[#344054]">OTP</h4>
              <p className="text-[14px] font-medium text-[#475467]">Your OTP has been sent to your email</p>
            </div>
            <div className="flex justify-center gap-[30px]">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-full max-w-[58px] h-[57px] text-center border rounded-[8px] text-lg outline-none"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>
            <Link to='/' className="text-[#0BA5EC] text-sm mt-[16px] underline inline-block">Didn’t Receive?</Link>
            <div className="flex justify-end mt-4 border-t border-[#EAECF0] py-[16px]">
              <div className="flex gap-2">
                <button onClick={onClose} className="w-[67px] bg-transparent p-2 rounded border border-gray-300">
                  Cancel
                </button>
                <button
                  onClick={handleVerifyOtp}
                  className="w-[99px] bg-[#0BA5EC] text-white p-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col mb-6">
              <h4 className="text-[20px] font-medium text-[#344054]">Change Password</h4>
              <p className="text-[14px] font-medium text-[#475467]">Type your new password and save</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label>New Password</Label>
                <Input 
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <Label>Retype Password</Label>
                <Input 
                  type="password"
                  placeholder="Retype new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={onClose} className="w-[67px] bg-transparent p-2 rounded border border-gray-300">
                  Cancel
                </button>
                <button className="w-[99px] bg-[#0BA5EC] text-white p-2 rounded">
                  Save
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;