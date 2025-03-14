import { useState } from "react";

import { X, CloudUpload, CircleCheck } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
  } | null>({
    name: "Dawlance Price list.pdf",
    size: "200 KB",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#10182885]  flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-[480px] shadow-lg relative">
        <div className="flex justify-between items-start mb-4 border-b pb-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Upload and attach files
            </h2>
            <p className="text-sm text-gray-500">
              Upload and attach files to this project.
            </p>
          </div>
          <button onClick={onClose} className="text-gray-500 text-2xl">
            <X />
          </button>
        </div>

        <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center text-center relative">
          <CloudUpload className="text-4xl text-gray-400 mb-2" />
          <p className="text-blue-500 font-medium cursor-pointer">
            Click to upload
          </p>
          <p className="text-xs text-gray-400">
            SVG, PNG, JPG or GIF (max. 800×400px)
          </p>
          <div className="absolute right-0 -bottom-10">
            <svg
              width="110"
              height="112"
              viewBox="0 0 110 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_275_5314)">
                <path
                  d="M42.75 16C42.75 14.2051 44.2051 12.75 46 12.75H62C62.1212 12.75 62.2375 12.7982 62.3232 12.8839L73.1161 23.6768C73.2018 23.7625 73.25 23.8788 73.25 24V48C73.25 49.7949 71.7949 51.25 70 51.25H46C44.2051 51.25 42.75 49.7949 42.75 48V16Z"
                  fill="white"
                  stroke="#D0D5DD"
                  stroke-width="1.5"
                />
                <path
                  d="M62 12.5V20C62 22.2091 63.7909 24 66 24H73.5"
                  stroke="#D0D5DD"
                  stroke-width="1.5"
                />
                <rect
                  x="36"
                  y="30"
                  width="26"
                  height="16"
                  rx="2"
                  fill="#0BA5EC"
                />
                <path
                  d="M42.6515 34.7273H44.1713V39.7983C44.1713 40.267 44.066 40.6742 43.8553 41.0199C43.647 41.3655 43.3569 41.6319 42.9853 41.8189C42.6136 42.0059 42.1815 42.0994 41.6891 42.0994C41.2511 42.0994 40.8534 42.0225 40.4959 41.8686C40.1408 41.7124 39.8591 41.4756 39.6507 41.1584C39.4424 40.8388 39.3394 40.4375 39.3418 39.9545H40.8723C40.8771 40.1463 40.9161 40.3108 40.9895 40.4482C41.0653 40.5831 41.1683 40.6873 41.2985 40.7607C41.431 40.8317 41.5873 40.8672 41.7672 40.8672C41.9566 40.8672 42.1164 40.8269 42.2466 40.7464C42.3792 40.6636 42.4798 40.5429 42.5485 40.3842C42.6171 40.2256 42.6515 40.0303 42.6515 39.7983V34.7273ZM45.4426 42V34.7273H48.312C48.8636 34.7273 49.3335 34.8326 49.7218 35.0433C50.11 35.2517 50.406 35.5417 50.6096 35.9134C50.8155 36.2827 50.9185 36.7088 50.9185 37.1918C50.9185 37.6747 50.8143 38.1009 50.606 38.4702C50.3977 38.8395 50.0958 39.1271 49.7005 39.3331C49.3075 39.5391 48.8316 39.642 48.2729 39.642H46.4441V38.4098H48.0243C48.3203 38.4098 48.5641 38.3589 48.7559 38.2571C48.95 38.1529 49.0944 38.0097 49.1891 37.8274C49.2862 37.6428 49.3347 37.4309 49.3347 37.1918C49.3347 36.9503 49.2862 36.7396 49.1891 36.5597C49.0944 36.3774 48.95 36.2365 48.7559 36.1371C48.5617 36.0353 48.3155 35.9844 48.0172 35.9844H46.9803V42H45.4426ZM56.7397 37.0781C56.69 36.9053 56.6201 36.7526 56.5302 36.62C56.4402 36.4851 56.3301 36.3714 56.1999 36.2791C56.0721 36.1844 55.9253 36.1122 55.7596 36.0625C55.5962 36.0128 55.4151 35.9879 55.2163 35.9879C54.8446 35.9879 54.5179 36.0803 54.2362 36.2649C53.9568 36.4496 53.739 36.7183 53.5827 37.071C53.4265 37.4214 53.3484 37.8499 53.3484 38.3565C53.3484 38.8632 53.4253 39.294 53.5792 39.6491C53.7331 40.0043 53.9509 40.2753 54.2326 40.4624C54.5143 40.647 54.8469 40.7393 55.2305 40.7393C55.5785 40.7393 55.8756 40.6778 56.1218 40.5547C56.3704 40.4292 56.5598 40.2528 56.69 40.0256C56.8226 39.7983 56.8888 39.5296 56.8888 39.2195L57.2013 39.2656H55.3263V38.108H58.3697V39.0241C58.3697 39.6634 58.2347 40.2126 57.9648 40.6719C57.695 41.1288 57.3233 41.4815 56.8498 41.7301C56.3763 41.9763 55.8342 42.0994 55.2234 42.0994C54.5415 42.0994 53.9426 41.9491 53.4265 41.6484C52.9104 41.3454 52.5079 40.9157 52.2191 40.3594C51.9326 39.8007 51.7894 39.1378 51.7894 38.3707C51.7894 37.7812 51.8746 37.2557 52.0451 36.794C52.2179 36.33 52.4594 35.937 52.7695 35.6151C53.0797 35.2931 53.4407 35.0481 53.8526 34.88C54.2646 34.7119 54.7108 34.6278 55.1914 34.6278C55.6033 34.6278 55.9869 34.6882 56.342 34.8089C56.6971 34.9273 57.012 35.0954 57.2866 35.3132C57.5636 35.531 57.7897 35.7902 57.9648 36.0909C58.14 36.3892 58.2525 36.7183 58.3022 37.0781H56.7397Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter1_d_275_5314)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.6727 44.8478C70.16 44.6624 71.1213 44.7759 71.3751 45.3404C71.5913 45.8215 71.777 46.6327 71.7872 46.4598C71.8116 46.0756 71.7628 45.2446 71.9263 44.8103C72.045 44.4937 72.2785 44.1959 72.6226 44.0907C72.9119 44.0012 73.252 43.9699 73.5525 44.0335C73.8702 44.1001 74.2042 44.3323 74.329 44.5531C74.6965 45.2019 74.7026 46.5306 74.7198 46.4598C74.7848 46.1766 74.7909 45.18 75.0071 44.8103C75.1502 44.5656 75.5116 44.3469 75.7045 44.3115C76.0029 44.2574 76.3704 44.2407 76.683 44.3032C76.9358 44.3542 77.2779 44.6614 77.3703 44.8103C77.5926 45.1685 77.7174 46.1807 77.755 46.5369C77.7712 46.6837 77.8301 46.1276 78.0524 45.7704C78.4646 45.105 79.9243 44.9759 79.9791 46.4359C80.0055 47.1169 79.9994 47.0857 79.9994 47.5439C79.9994 48.0812 79.9872 48.4061 79.9588 48.7956C79.9283 49.2111 79.841 50.1535 79.7142 50.6096C79.6269 50.9231 79.3375 51.6281 79.0513 52.0509C79.0513 52.0509 77.9611 53.3526 77.8423 53.9378C77.7235 54.5241 77.7631 54.5283 77.7388 54.9427C77.7154 55.3582 77.8616 55.9039 77.8616 55.9039C77.8616 55.9039 77.0485 56.0122 76.6089 55.9393C76.212 55.8747 75.7207 55.0646 75.5938 54.8167C75.4192 54.4751 75.0467 54.5408 74.9015 54.7928C74.6742 55.1916 74.1818 55.907 73.8357 55.9518C73.1566 56.0393 71.7496 55.983 70.6482 55.9726C70.6482 55.9726 70.836 54.9198 70.4178 54.5585C70.1082 54.2877 69.5753 53.742 69.2565 53.4546L68.412 52.4955C68.1247 52.1206 67.3948 51.5281 67.1502 50.4284C66.934 49.4537 66.9553 48.9757 67.1878 48.5852C67.4233 48.1885 67.8679 47.9719 68.0547 47.9344C68.2658 47.8906 68.7571 47.8938 68.9429 47.9989C69.1692 48.127 69.2606 48.1645 69.4382 48.4061C69.6717 48.7258 69.755 48.881 69.6545 48.5321C69.5773 48.2593 69.3276 47.9125 69.2139 47.522C69.1033 47.1461 68.8068 46.54 68.8282 45.9329C68.8363 45.7028 68.9327 45.13 69.6727 44.8478Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.6727 44.8478C70.16 44.6624 71.1213 44.7759 71.3751 45.3404C71.5913 45.8215 71.777 46.6327 71.7872 46.4598C71.8116 46.0756 71.7628 45.2446 71.9263 44.8103C72.045 44.4937 72.2785 44.1959 72.6226 44.0907C72.9119 44.0012 73.252 43.9699 73.5525 44.0335C73.8702 44.1001 74.2042 44.3323 74.329 44.5531C74.6965 45.2019 74.7026 46.5306 74.7198 46.4598C74.7848 46.1766 74.7909 45.18 75.0071 44.8103C75.1502 44.5656 75.5116 44.3469 75.7045 44.3115C76.0029 44.2574 76.3704 44.2407 76.683 44.3032C76.9358 44.3542 77.2779 44.6614 77.3703 44.8103C77.5926 45.1685 77.7174 46.1807 77.755 46.5369C77.7712 46.6837 77.8301 46.1276 78.0524 45.7704C78.4646 45.105 79.9243 44.9759 79.9791 46.4359C80.0055 47.1169 79.9994 47.0857 79.9994 47.5439C79.9994 48.0812 79.9872 48.4061 79.9588 48.7956C79.9283 49.2111 79.841 50.1535 79.7142 50.6096C79.6269 50.9231 79.3375 51.6281 79.0513 52.0509C79.0513 52.0509 77.9611 53.3526 77.8423 53.9378C77.7235 54.5241 77.7631 54.5283 77.7388 54.9427C77.7154 55.3582 77.8616 55.9039 77.8616 55.9039C77.8616 55.9039 77.0485 56.0122 76.6089 55.9393C76.212 55.8747 75.7207 55.0646 75.5938 54.8167C75.4192 54.4751 75.0467 54.5408 74.9015 54.7928C74.6742 55.1916 74.1818 55.907 73.8357 55.9518C73.1566 56.0393 71.7496 55.983 70.6482 55.9726C70.6482 55.9726 70.836 54.9198 70.4178 54.5585C70.1082 54.2877 69.5753 53.742 69.2565 53.4546L68.412 52.4955C68.1247 52.1206 67.3948 51.5281 67.1502 50.4284C66.934 49.4537 66.9553 48.9757 67.1878 48.5852C67.4233 48.1885 67.8679 47.9719 68.0547 47.9344C68.2658 47.8906 68.7571 47.8938 68.9429 47.9989C69.1692 48.127 69.2606 48.1645 69.4382 48.4061C69.6717 48.7258 69.755 48.881 69.6545 48.5321C69.5773 48.2593 69.3276 47.9125 69.2139 47.522C69.1033 47.1461 68.8068 46.54 68.8282 45.9329C68.8363 45.7028 68.9327 45.13 69.6727 44.8478Z"
                  stroke="#101828"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73 49.5C73 49.2239 72.7761 49 72.5 49C72.2239 49 72 49.2239 72 49.5V52.5C72 52.7761 72.2239 53 72.5 53C72.7761 53 73 52.7761 73 52.5V49.5ZM74.5 49C74.7761 49 75 49.2239 75 49.5V52.5C75 52.7761 74.7761 53 74.5 53C74.2239 53 74 52.7761 74 52.5V49.5C74 49.2239 74.2239 49 74.5 49ZM76.5 49C76.7761 49 77 49.2239 77 49.5V52.5C77 52.7761 76.7761 53 76.5 53C76.2239 53 76 52.7761 76 52.5V49.5C76 49.2239 76.2239 49 76.5 49Z"
                fill="#101828"
              />
              <defs>
                <filter
                  id="filter0_d_275_5314"
                  x="-1"
                  y="0"
                  width="112"
                  height="112"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="12"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_275_5314"
                  />
                  <feOffset dy="24" />
                  <feGaussianBlur stdDeviation="24" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0625882 0 0 0 0 0.0926346 0 0 0 0 0.15702 0 0 0 0.18 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_275_5314"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_275_5314"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_275_5314"
                  x="64.625"
                  y="42.625"
                  width="17.75"
                  height="16.75"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.027451 0 0 0 0 0.12549 0 0 0 0 0.239216 0 0 0 0.24 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_275_5314"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_275_5314"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {uploadedFile && (
          <div className="mt-4 flex items-center gap-3 p-3 border rounded-lg bg-gray-50">
            {/* <    className="text-red-500 text-xl" /> */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {uploadedFile.name}
              </p>
              <p className="text-xs text-gray-500">{uploadedFile.size}</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
              </div>
            </div>
            <span className="text-blue-500 text-lg"><CircleCheck /></span>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
