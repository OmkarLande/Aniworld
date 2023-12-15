const PostContainer = () => {
  return (
    <div className="shrink-0 flex flex-col items-center justify-start gap-[0.13rem] text-left text-[1rem] text-gray-100 font-ibm-plex-sans">
      <div className="shrink-0 flex flex-row items-center justify-start gap-[25.38rem]">
        <div className="relative w-[22.5rem] h-[1.31rem] shrink-0">
          <div className="absolute top-[0rem] left-[-0.62rem] shrink-0 flex flex-row items-start justify-start gap-[1.13rem]">
            <div className="shrink-0 flex flex-col items-center justify-start gap-[0.63rem] text-black">
              <div className="relative">All Posts(32)</div>
              <div className="shrink-0 flex flex-col items-start justify-start p-[0.63rem]">
                <div className="relative box-border w-[5.88rem] h-[0.06rem] border-t-[1px] border-solid border-black" />
              </div>
            </div>
            <div className="relative">Article</div>
            <div className="relative">Event</div>
            <div className="relative">Education</div>
            <div className="relative">Job</div>
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[1.38rem] text-[0.94rem] text-black">
          <div className="rounded bg-whitesmoke-300 shrink-0 flex flex-row items-center justify-start py-[0.44rem] px-[0.38rem] gap-[0.63rem]">
            <div className="relative font-medium">Write a Post</div>
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
              alt=""
              src="/baselinearrow-drop-down24px1.svg"
            />
          </div>
          <div className="rounded bg-royalblue shrink-0 flex flex-row items-start justify-start py-[0.44rem] px-[0.63rem] gap-[0.38rem] text-white">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
              alt=""
              src="/baselinegroup-add24px.svg"
            />
            <div className="relative font-medium">Join Group</div>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start p-[0.63rem]">
        <div className="relative box-border w-[65.06rem] h-[0.06rem] border-t-[1px] border-solid border-gainsboro-100" />
      </div>
    </div>
  );
};

export default PostContainer;
