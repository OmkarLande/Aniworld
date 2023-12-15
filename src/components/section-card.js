const SectionCard = () => {
  return (
    <div className="shrink-0 flex flex-col items-start justify-start relative gap-[0.63rem] text-left text-[2.25rem] text-white font-ibm-plex-sans">
      <div className="relative w-[90rem] h-[27.5rem] z-[0]">
        <section className="absolute top-[0rem] left-[0rem] w-[90rem] h-[27.5rem] bg-[url('/public/rectangle2@2x.png')] bg-cover bg-no-repeat bg-[top]" />
        <section className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] w-[90rem] h-[27.5rem]" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[17.88rem] left-[12.5rem] shrink-0 flex flex-col items-start justify-start gap-[0.25rem] z-[1]">
        <h1 className="m-0 relative text-inherit font-bold font-inherit">
          Computer Engineering
        </h1>
        <div className="relative text-[1.13rem]">
          142,765 Computer Engineers follow this
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
