const Services = () => {
  const data = [
    {
      title: "Дезинсекция",
      desc: "Основные проблемы с паразитами — это клопы, тараканы и блохи, а также летающие насекомые, которые кусают и нарушают комфорт человека.",
    },
    {
      title: "Дезинсекция",
      desc: "Основные проблемы с паразитами — это клопы, тараканы и блохи, а также летающие насекомые, которые кусают и нарушают комфорт человека.",
    },
    {
      title: "Дезинсекция",
      desc: "Основные проблемы с паразитами — это клопы, тараканы и блохи, а также летающие насекомые, которые кусают и нарушают комфорт человека.",
    },
  ];
  return (
    <div className="flex flex-col gap-[40px]">
      <h2 className="font-[600] text-[36px] text-[#fff] text-center">
        Наши услуги
      </h2>
      <div className="grid grid-cols-3 gap-[20px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[20px] py-[45px] px-[21px] rounded-[12px] bg-[#2B373E]"
          >
            <h3 className="text-24px font-[600] text-[#fff]">{item.title}</h3>
            <p className="font-[400] text-[15px] text-[#fff]">{item.desc}</p>
            <button className="w-full py-[6px] px-[10px] rounded-[10px] text-start bg-[#087FB2] transition-colors duration-400 ease-in-out hover:bg-[#00798C]">
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
