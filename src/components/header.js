import Property1notLogin from "./property1not-login";

const Header = () => {
  return (
    <header className="bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] w-[90rem] shrink-0 flex flex-row items-center justify-center py-[0.88rem] px-[4.5rem] box-border gap-[11.81rem] text-left text-[0.88rem] text-dimgray-100 font-ibm-plex-sans">
      <img
        className="max-w-full overflow-hidden max-h-full"
        alt=""
        src="/whole.svg"
      />
      <div className="rounded-2xl bg-whitesmoke-200 shrink-0 flex flex-row items-center justify-start py-[0.63rem] px-[0.88rem] gap-[0.88rem]">
        <img
          className="relative w-[1.38rem] h-[1.38rem]"
          alt=""
          src="/group-28.svg"
        />
        <div className="relative font-medium">
          Search for your favorite groups in ATG
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-center justify-center">
        <Property1notLogin
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propPadding="0.63rem"
          propGap="0.63rem"
          propFlexShrink="0"
          propFontSize="1rem"
          propWidth="1.5rem"
          propHeight="1.5rem"
        />
      </div>
    </header>
  );
};

export default Header;
