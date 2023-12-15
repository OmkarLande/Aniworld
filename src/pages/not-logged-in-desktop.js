import Header from "../components/header";
import SectionCard from "../components/section-card";
import PostContainer from "../components/post-container";
import Article from "../components/Article";
import Meetup from "../components/Meetup";
import Job from "../components/Job";

const NotLoggedInDesktop = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[0.69rem] text-left text-[1.13rem] text-black font-ibm-plex-sans">
      <Header />
      <SectionCard />
      <div className="shrink-0 flex flex-col items-center justify-start">
        <div className="shrink-0 flex flex-col items-start justify-start p-[0.63rem]">
          <div className="relative box-border w-[81.06rem] h-[0.06rem] opacity-[0] border-t-[1px] border-solid border-gainsboro-100" />
        </div>
        <div className="shrink-0 flex flex-col items-center justify-start gap-[1.13rem]">
          <PostContainer />
          <div className="shrink-0 flex flex-row items-start justify-start gap-[6.56rem]">
            <div className="relative w-[43.25rem] h-[109.44rem]">
              <div className="absolute top-[30.44rem] left-[-0.06rem] rounded bg-white box-border w-[43.38rem] h-[29.63rem] border-[1px] border-solid border-gainsboro-100" />
              <textarea className="bg-white [outline:none] absolute top-[60.94rem] left-[-0.06rem] rounded box-border w-[43.38rem] h-[30.75rem] border-[1px] border-solid border-gainsboro-100" />
              <textarea className="bg-white [outline:none] absolute top-[92.56rem] left-[-0.06rem] rounded box-border w-[43.38rem] h-[16.94rem] border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[-0.06rem] left-[-0.06rem] rounded bg-white box-border w-[43.38rem] h-[29.63rem] border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-start gap-[2.63rem]">
                {/* <div className="relative w-[43.25rem] h-[28.38rem] shrink-0">
                  <div className="absolute top-[0rem] left-[0rem] shrink-0 flex flex-col items-start justify-start gap-[0.88rem]">
                    <img
                      className="relative rounded-t rounded-b-none w-[43.25rem] h-[13.75rem] object-cover"
                      alt=""
                      src="/rectangle-5@2x.png"
                    />
                    <div className="shrink-0 flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] gap-[0.88rem]">
                      <div className="relative font-medium">✍️ Article</div>
                      <div className="w-[42rem] flex flex-col items-start justify-start relative gap-[0.63rem] text-[1.38rem]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <h3 className="m-0 relative text-inherit leading-[134.17%] font-semibold font-inherit inline-block w-[37.5rem] shrink-0">
                            What if famous brands had regular fonts? Meet
                            RegulaBrands!
                          </h3>
                        </div>
                        <img
                          className="absolute my-0 mx-[!important] top-[0.06rem] left-[39rem] w-[1.75rem] h-[1.75rem] z-[1]"
                          alt=""
                          src="/group-3.svg"
                        />
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-center p-[0.63rem] text-[1.19rem] text-dimgray-100">
                        <h3 className="m-0 relative text-inherit leading-[134.17%] font-normal font-inherit">
                          I’ve worked in UX for the better part of a decade.
                          From now on, I plan to rei…
                        </h3>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[18.25rem]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[0.63rem]">
                          <img
                            className="relative rounded-3xl w-[3rem] h-[3rem] object-cover"
                            alt=""
                            src="/rectangle-3@2x.png"
                          />
                          <div className="relative font-semibold">
                            Sarthak Kamra
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[2.5rem] text-right text-[0.88rem] text-dimgray-200">
                          <div className="relative w-[5.94rem] h-[1.13rem]">
                            <img
                              className="absolute top-[0rem] left-[0rem] w-[1.13rem] h-[1.13rem] object-cover"
                              alt=""
                              src="/iconactionvisibility-24px@2x.png"
                            />
                            <div className="absolute top-[0rem] left-[1.63rem] font-medium">
                              1.4k views
                            </div>
                          </div>
                          <img
                            className="relative w-[2.63rem] h-[2.25rem] object-cover"
                            alt=""
                            src="/group-2@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <Article imgsrc={"/article.png"} heading={" What if famous brands had regular fonts? Meet RegulaBrands!"} category={"✍️ Article"} subheading={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}/>
                <Article imgsrc={"/rectangle-5@2x.png"} heading={" Tax Benefits for Investment under National Pension Scheme launched by Government"} category={"🔬️ Education"} subheading={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}/>
                {/* <div className="shrink-0 flex flex-col items-center justify-start gap-[0.63rem]">
                  <img
                    className="relative rounded-t rounded-b-none w-[43.25rem] h-[13.75rem] object-cover"
                    alt=""
                    src="/rectangle-51@2x.png"
                  />
                  <div className="shrink-0 flex flex-col items-start justify-start gap-[2rem]">
                    <div className="shrink-0 flex flex-col items-start justify-start gap-[1rem]">
                      <div className="shrink-0 flex flex-col items-start justify-start">
                        <div className="shrink-0 flex flex-row items-center justify-center p-[0.63rem]">
                          <div className="relative font-medium">🗓️ Meetup</div>
                        </div>
                        <div className="relative w-[41.06rem] h-[3.81rem] shrink-0 text-[1.38rem]">
                          <div className="absolute top-[0rem] left-[0.63rem] shrink-0 flex flex-row items-start justify-start gap-[1.19rem]">
                            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block w-[37.5rem] shrink-0">{`Finance & Investment Elite Social Mixer @Lujiazui`}</h3>
                            <img
                              className="max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/baselinemore-vert24px1.svg"
                            />
                          </div>
                          <div className="absolute top-[2.56rem] left-[9.66rem] shrink-0 flex flex-row items-start justify-start gap-[2.5rem] text-[0.94rem]">
                            <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                              <img
                                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                                alt=""
                                src="/baselinetoday24px.svg"
                              />
                              <div className="relative font-medium inline-block w-[8.88rem] shrink-0">
                                Fri, 12 Oct, 2018
                              </div>
                            </div>
                            <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                              <img
                                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                                alt=""
                                src="/outlinelocation-on24px.svg"
                              />
                              <div className="relative font-medium">
                                Ahmedabad, India
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-white shrink-0 flex flex-row items-center justify-center py-[0.63rem] px-[17.88rem] text-center text-[0.81rem] text-tomato border-[0.7px] border-solid border-darkgray">
                        <div className="relative leading-[140.4%] font-semibold">
                          Visit Website
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-start gap-[19.69rem]">
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[0.63rem]">
                        <img
                          className="relative rounded-3xl w-[3rem] h-[3rem] object-cover"
                          alt=""
                          src="/rectangle-31@2x.png"
                        />
                        <div className="relative font-semibold">
                          Ronal Jones
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[2.5rem] text-right text-[0.88rem] text-dimgray-200">
                        <div className="relative w-[5.94rem] h-[1.13rem]">
                          <img
                            className="absolute top-[0rem] left-[0rem] w-[1.13rem] h-[1.13rem] object-cover"
                            alt=""
                            src="/iconactionvisibility-24px@2x.png"
                          />
                          <div className="absolute top-[0rem] left-[1.63rem] font-medium">
                            1.4k views
                          </div>
                        </div>
                        <img
                          className="relative w-[2.63rem] h-[2.25rem] object-cover"
                          alt=""
                          src="/group-22@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                <Meetup />
                {/* <div className="shrink-0 flex flex-col items-start justify-start gap-[2rem]">
                  <div className="shrink-0 flex flex-col items-end justify-start gap-[1rem]">
                    <div className="shrink-0 flex flex-col items-start justify-start gap-[0.69rem]">
                      <div className="relative font-medium">💼️ Job</div>
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[1.5rem] text-[1.38rem]">
                        <h3 className="m-0 relative text-inherit leading-[134.55%] font-semibold font-inherit inline-block w-[37.5rem] shrink-0">
                          Software Developer
                        </h3>
                        <img
                          className="relative w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/baselinemore-vert24px@2x.png"
                        />
                      </div>
                      <div className="relative w-[24.94rem] h-[1.25rem] text-[0.94rem]">
                        <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[2.5rem]">
                          <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                            <img
                              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/outlinework-outline24px@2x.png"
                            />
                            <div className="relative font-medium">
                              Innovaccer Analytics Private Ltd.
                            </div>
                          </div>
                          <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                            <img
                              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/outlinelocation-on24px@2x.png"
                            />
                            <div className="relative font-medium">
                              Noida, India
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[10px] bg-white shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[16.63rem] text-center text-[0.81rem] text-mediumseagreen border-[0.7px] border-solid border-darkgray">
                      <div className="relative leading-[140.4%] font-semibold">
                        Apply on Timesjobs
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[19.56rem]">
                    <div className="shrink-0 flex flex-row items-center justify-start gap-[0.63rem]">
                      <img
                        className="relative rounded-3xl w-[3rem] h-[3rem] object-cover"
                        alt=""
                        src="/rectangle-3@2x.png"
                      />
                      <div className="relative font-semibold">Joseph Gray</div>
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-start gap-[2.5rem] text-right text-[0.88rem] text-dimgray-200">
                      <div className="relative w-[5.94rem] h-[1.13rem]">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-[1.13rem] h-[1.13rem] object-cover"
                          alt=""
                          src="/iconactionvisibility-24px@2x.png"
                        />
                        <div className="absolute top-[0rem] left-[1.63rem] font-medium">
                          1.4k views
                        </div>
                      </div>
                      <img
                        className="relative w-[2.63rem] h-[2.25rem] object-cover"
                        alt=""
                        src="/group-2@2x.png"
                      />
                    </div>
                  </div>
                </div> */}
                <Job />
              </div>
              {/* option-frame */}
              {/* <div className="absolute top-[80.38rem] left-[32rem] rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16),_0px_0px_2px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-[0.25rem] px-[0rem] text-[0.88rem]">
                <div className="relative box-border w-[10rem] h-[2rem] text-right border-[1px] border-solid border-gray-200">
                  <div className="absolute top-[0.44rem] left-[0.75rem]">
                    Edit
                  </div>
                </div>
                <div className="relative box-border w-[10rem] h-[2rem] border-[1px] border-solid border-gray-200">
                  <div className="absolute top-[0.44rem] left-[0.75rem]">
                    Report
                  </div>
                </div>
                <div className="relative box-border w-[10rem] h-[2rem] border-[1px] border-solid border-gray-200">
                  <div className="absolute top-[0.44rem] left-[0.75rem]">
                    Option 3
                  </div>
                </div>
              </div> */}
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[2rem] text-[0.88rem]">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[0.63rem]">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[7.75rem]">
                  <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                    <img
                      className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0"
                      alt=""
                      src="/outlinelocation-on24px-2.svg"
                    />
                    <div className="relative">Noida, India</div>
                  </div>
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                    alt=""
                    src="/baselineedit24px.svg"
                  />
                </div>
                <div className="relative box-border w-[15.21rem] h-[0.03rem] border-t-[0.4px] border-solid border-silver" />
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[0.44rem] text-[0.75rem]">
                <img
                  className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 opacity-[0.5]"
                  alt=""
                  src="/baselineerror-outline24px.svg"
                />
                <div className="relative inline-block w-[13.75rem] shrink-0 opacity-[0.5]">
                  Your location will help us serve better and extend a
                  personalised experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedInDesktop;
