import bg from "../../assets/bg.jpeg";

const HeroBlock = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover  h-[700px] bg-center z-[-1] relative before:absolute before:content-[''] before:inset-0 before:bg-[linear-gradient(180deg,rgba(27,34,40,0.4)_12.02%,rgba(27,34,40,0.2)_27.27%,rgba(27,34,40,0.1)_39.74%,rgba(27,34,40,0)_54.53%,rgba(27,34,40,0.6)_72.27%,rgba(27,34,40,0.8)_86.46%,#1B2228_100%)] before:z-10"
    >
      <section className="h-[700px] flex flex-col justify-center items-center gap-[20px] relative z-20">
        <h1 className="text-[40px] font-[600] text-[#fff] text-center max-w-[822px]">
          Dezis – ваш надежный партнер в обеспечении чистоты и безопасности
        </h1>
        <button className="bg-[#08AAF1] text-[24px] font-[500] text-[#fff] rounded-[8px] px-[28px] py-[12px] max-w-[306px]">
          Оставить заявку
        </button>
      </section>
    </div>
  );
};

export default HeroBlock;
