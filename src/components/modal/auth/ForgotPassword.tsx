import { useState } from "react";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";

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
    <div className="fixed inset-0 right-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-[546px] shadow-lg relative">
        {!isOtpSent ? (
          <>
            <div className="flex flex-col mb-6">
              <h4 className="text-[20px] font-medium text-[#1B1F29]">Send mail</h4>
              <p>Type your current email address and wait for OTP</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={onClose}
                  className="w-[67px] bg-gray-200 p-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendOtp}
                  className="w-[99px] bg-[#0BA5EC] text-white p-2 rounded hover:bg-blue-600"
                >
                  Send OTP
                </button>
              </div>
            </div>
          </>
        ) : !isOtpVerified ? (
          <>
            <div className="flex flex-col mb-6">
              <h4 className="text-[20px] font-medium text-[#1B1F29]">OTP</h4>
              <p>Your OTP has been sent to your email</p>
            </div>
            <div className="flex justify-center gap-[30px]">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-full max-w-[58px] h-[57px] text-center border rounded text-lg"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="text-blue-500 text-sm mt-[16px]">Didn’t Receive?</div>
            <div className="flex justify-end mt-4 border-t border-[#EAECF0] py-[16px]">
              <div className="flex gap-2">
                <button onClick={onClose} className="w-[67px] bg-gray-200 p-2 rounded">
                  Cancel
                </button>
                <button
                  onClick={handleVerifyOtp}
                  className="w-[99px] bg-[#0BA5EC] text-white p-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col mb-6">
              <h4 className="text-[20px] font-medium text-[#1B1F29]">Change Password</h4>
              <p>Type your new password and save</p>
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
                <button onClick={onClose} className="w-[67px] bg-gray-200 p-2 rounded">
                  Cancel
                </button>
                <button className="w-[99px] bg-[#0BA5EC] text-white p-2 rounded hover:bg-blue-600">
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