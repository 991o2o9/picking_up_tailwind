import logo from "./assets/logo.png";
import Services from "./components/Services/Services";
const App = () => {
  const navigation = [
    {
      linker: "О нас",
    },
    {
      linker: "Услуги",
    },
    {
      linker: "Наши работы",
    },
    {
      linker: "Полезное",
    },
    {
      linker: "Новости",
    },
  ];
  return (
    <div className="flex flex-col min-h-full">
      <div className="px-24 flex justify-between items-center backdrop-blur-[10px] bg-[#00000080]">
        <div className="max-w-[90px]">
          <img src={logo} alt="" className="w-full h-full cursor-pointer" />
        </div>
        <nav className="flex gap-[40px]">
          {navigation.map((item, index) => (
            <a
              className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#fff]"
              key={index}
            >
              <span className="text-[18px] font-[500]">{item.linker}</span>
            </a>
          ))}
        </nav>
        <button className="py-[12px] px-[24px] bg-[#08AAF1] rounded-[7px] text-[20px] font-[500] transition-bg duration-300 ease-in-out hover:bg-[#00798C]">
          Консультация
        </button>
      </div>
      {/* content */}
      <div className="flex-auto my-[20px] px-[89px]">
        <Services />
      </div>
      {/* content */}
      <div className="px-[89px] py-[48px] flex justify-between h-[350px] bg-[#2B373E]">
        <div className="flex flex-col gap-[48px]">
          <h2 className="text-[28px] font-[500] text-[#FFFFFF]">
            ОсОО “Дезис Групп”
          </h2>
          <div className="flex flex-col gap-[20px]">
            <span className="text-[20px] font-[400] text=[#FFFFFF]">
              Адрес: Кыргызская Республика, г. Бишкек <br /> ул. Айни 215
            </span>
            <span className="text-[20px] font-[400] text-[#FFFFFF]">
              ИНН: 02004202110176
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          {navigation.map((item, index) => (
            <a
              className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#fff]"
              key={index}
            >
              <span className="text-[18px] font-[600]">{item.linker}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[43px]">
          <span className="font-[400] text-[20px] text-[#fff]">
            +996 (999) 033 330
          </span>
          <span className="font-[400] text-[20px] text-[#fff]">
            Круглосуточно
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
