export default function RecentCredits() {
  // Sample data to match the image
  const creditItems = [
    {
      id: "Wa #23453",
      name: "Umar hassan",
      amount: "16,000pkr",
      image: "../../../public/images/cards/card-01.jpg",
    },
    {
      id: "Wa #23453",
      name: "Umar hassan",
      amount: "16,000pkr",
      image: "../../../public/images/cards/card-02.jpg",
    },
    {
      id: "Wa #23453",
      name: "Umar hassan",
      amount: "16,000pkr",
      image: "../../../public/images/cards/card-03.jpg",
    },
    {
      id: "Wa #23453",
      name: "Umar hassan",
      amount: "16,000pkr",
      image: "../../../public/images/cards/card-03.jpg",
    },
    {
      id: "Wa #23453",
      name: "Umar hassan",
      amount: "16,000pkr",
      image: "../../../public/images/cards/card-01.jpg",
    },
    {
      id: "Wa #23453",
      name: "Umar hassan",
      amount: "16,000pkr",
      image: "../../../public/images/cards/card-02.jpg",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <h2 className="text-[18px] font-semibold text-[#101828] dark:text-white/90 mb-6">
        Recent Credits
      </h2>

      <div className="flex flex-col">
        {creditItems.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={item.image || "/placeholder.svg?height=48&width=48"}
                    alt={item.name}
                    className=" h-full w-full object-cover"
                    width={48}
                  />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828] dark:text-white/90">
                    {item.id}
                  </p>
                  <p className="text-[16px] text-[#6b7280] dark:text-white/60">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="text-[14px] font-normal text-[#475467] dark:text-white/90">
                {item.amount}
              </div>
            </div>
            {index < creditItems.length - 1 && (
              <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
