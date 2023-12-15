import { useMemo } from "react";

const Property1notLogin = ({
  propPosition,
  propTop,
  propLeft,
  propPadding,
  propGap,
  propFlexShrink,
  propFontSize,
  propWidth,
  propHeight,
}) => {
  const property1notLoginStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      padding: propPadding,
      gap: propGap,
      flexShrink: propFlexShrink,
    };
  }, [propPosition, propTop, propLeft, propPadding, propGap, propFlexShrink]);

  const createAccountItsContainerStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
    };
  }, [propFontSize]);

  const baselineArrowDropDown24pxIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="absolute top-[20px] left-[calc(50%_-_118.5px)] flex flex-row items-center justify-center p-2.5 gap-[10px] text-right text-base text-darkslategray-200 font-ibm-plex-sans"
      style={property1notLoginStyle}
    >
      <div className="relative" style={createAccountItsContainerStyle}>
        <span className="font-medium">{`Create account. `}</span>
        <b className="text-royalblue">It’s free!</b>
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/baselinearrow-drop-down24px.svg"
        style={baselineArrowDropDown24pxIconStyle}
      />
    </div>
  );
};

export default Property1notLogin;
