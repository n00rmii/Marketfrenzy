import { useNavigate } from "react-router";
import clsx from "clsx";
import svgPaths from "../../imports/svg-x6efv11ozb";
import imgImage from "figma:asset/41e341ea8abd744ed16beb7a9568e78b44ac9d90.png";
import { imgOverlayOverlayBlur } from "../../imports/svg-6cgvv";

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">{children}</div>
    </div>
  );
}

type BackgroundShadowBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundShadowBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundShadowBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

type BackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, text2, text3, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[104px] justify-center leading-[0] relative shrink-0 text-[16px] text-center", additionalClassNames)}>
      <p className="leading-[26px] mb-0">{text}</p>
      <p className="leading-[26px] mb-0">{text1}</p>
      <p className="leading-[26px] mb-0">{text2}</p>
      <p className="leading-[26px]">{text3}</p>
    </div>
  );
}

export default function ChooseYourParty() {
  const navigate = useNavigate();

  const handleSelectSeller = () => {
    localStorage.setItem("selectedParty", "seller");
    navigate("/select-team");
  };

  const handleSelectRestaurant = () => {
    localStorage.setItem("selectedParty", "restaurant");
    navigate("/select-team");
  };

  return (
    <div className="bg-[#fff6dc] content-stretch flex flex-col isolate items-center relative size-full" data-name="Choose Your Party">
      <div className="absolute h-[1446px] left-0 opacity-3 top-0 w-[390px] z-[4]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[316.06%] max-w-none top-[18.61%] w-[370.77%]" src={imgImage} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(255,246,220,0.8)] bottom-0 content-stretch flex gap-[60.6px] items-center justify-center left-1/2 pb-[24px] pl-[62.33px] pr-[62.36px] pt-[15px] rounded-tl-[32px] rounded-tr-[32px] w-[390px] z-[3]" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-solid border-t-3 inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_-8px_32px_0px_rgba(114,88,0,0.08)]" />
        <ContainerBackgroundImage1>
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Button">
            <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                <g id="Container">
                  <path d={svgPaths.p12a32500} fill="var(--fill-0, #725800)" fillOpacity="0.4" id="Icon" />
                </g>
              </svg>
            </div>
          </div>
        </ContainerBackgroundImage1>
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[8px] relative">
            <div className="bg-[#725800] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
              <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
                  <g id="Container">
                    <path d={svgPaths.p23d26800} fill="var(--fill-0, #FFF6DC)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ContainerBackgroundImage1>
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Button">
            <ContainerBackgroundImage>
              <path d={svgPaths.p85bff00} fill="var(--fill-0, #725800)" fillOpacity="0.4" id="Icon" />
            </ContainerBackgroundImage>
          </div>
        </ContainerBackgroundImage1>
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fff6dc] items-start relative shrink-0 to-[#f5e9c4] w-full z-[2]" data-name="Header">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_32px_32px_-12px_rgba(114,88,0,0.06)]" data-name="Header:shadow" />
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.01px] py-[16px] relative w-full">
              <button onClick={() => navigate("/join")} className="content-stretch flex flex-col items-center justify-center relative shrink-0 cursor-pointer bg-transparent border-none p-0" data-name="Button">
                <ContainerBackgroundImage>
                  <path d={svgPaths.p300a1100} fill="var(--fill-0, #725800)" id="Icon" />
                </ContainerBackgroundImage>
              </button>
              <button onClick={() => navigate("/")} className="cursor-pointer bg-transparent border-none p-0">
                <div className="content-stretch flex flex-col items-start relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Heading 1">
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] tracking-[2.4px] uppercase whitespace-nowrap">
                    <p className="leading-[32px]">market FRENZY</p>
                  </div>
                </div>
              </button>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
                <div className="relative shrink-0 size-[20px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Container">
                      <path d={svgPaths.p8f89580} fill="var(--fill-0, #725800)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[448px] relative shrink-0 w-full z-[1]" data-name="Main">
        <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[inherit] pb-[16px] pt-[48px] px-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[354px]" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#372e00] text-[36px] text-center tracking-[-0.9px] whitespace-nowrap">
                  <p className="leading-[40px]">Choose Your Party</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[16px] text-center w-[337.05px]">
                  <p className="leading-[24px]">Which side of the Chợ will you master today?</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[354px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
                <div className="absolute bg-[rgba(0,106,59,0.1)] blur-[12px] inset-[-4px] opacity-0 rounded-[40px]" data-name="Overlay+Blur" />
                <BackgroundShadowBackgroundImage additionalClassNames="bg-[#006a3b]">
                  <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 424\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 29.981 177 212)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.044194\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.044194\\'/></radialGradient></defs></svg>')" }} />
                  <div className="absolute bottom-[-32.91px] flex h-[148.068px] items-center justify-center right-[-27.71px] w-[144.067px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                    <div className="flex-none rotate-12">
                      <div className="content-stretch flex flex-col items-start opacity-10 pl-[2.436px] pt-[5.75px] relative" data-name="Container">
                        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[120px] justify-center leading-[0] not-italic relative shrink-0 text-[#ccffd8] text-[120px] w-[118.121px]">
                          <p className="leading-[120px]">potted_plant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
                      <div className="relative shrink-0 size-[108px]" data-name="Mask Group">
                        <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[108px_108px] p-[24px] top-0" data-name="Overlay+OverlayBlur" style={{ maskImage: `url('${imgOverlayOverlayBlur}')` }}>
                          <div className="h-[47.5px] relative shrink-0 w-[54.939px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9394 47.5">
                              <g id="Container">
                                <path d={svgPaths.pc581e60} fill="var(--fill-0, #CCFFD8)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Heading 3:margin">
                      <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#ccffd8] text-[30px] w-[172.23px]">
                        <p className="leading-[36px]">The Sellers</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center px-[0.28px] relative shrink-0" data-name="Container">
                      <BackgroundImage text="Master the art of the stall. Source the" text1="freshest produce, haggle for the" text2="best prices, and grow your market" text3="empire." additionalClassNames="text-[rgba(204,255,216,0.9)] w-[277.44px]" />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Margin">
                      <button
                        onClick={handleSelectSeller}
                        className="bg-white content-stretch flex flex-col items-start px-[32px] py-[12px] relative rounded-[9999px] shrink-0 cursor-pointer border-none transition-transform hover:scale-105"
                        data-name="Background"
                      >
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006a3b] text-[14px] tracking-[1.4px] uppercase w-[154.59px]">
                          <p className="leading-[20px]">Enter the Market</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </BackgroundShadowBackgroundImage>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
                <div className="absolute bg-[rgba(176,35,23,0.1)] blur-[12px] inset-[-4px] opacity-0 rounded-[40px]" data-name="Overlay+Blur" />
                <BackgroundShadowBackgroundImage additionalClassNames="bg-[#b02317]">
                  <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 424\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 29.981 177 212)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.044194\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.044194\\'/></radialGradient></defs></svg>')" }} />
                  <div className="absolute bottom-[-32.79px] flex h-[148.569px] items-center justify-center left-[-29.61px] w-[146.438px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                    <div className="-rotate-12 flex-none">
                      <div className="content-stretch flex flex-col items-start opacity-10 pt-[5.748px] relative" data-name="Container">
                        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[120px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefed] text-[120px] w-[122.981px]">
                          <p className="leading-[120px]">restaurant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
                      <div className="relative shrink-0 size-[108px]" data-name="Mask Group">
                        <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[108px_108px] p-[24px] top-0" data-name="Overlay+OverlayBlur" style={{ maskImage: `url('${imgOverlayOverlayBlur}')` }}>
                          <div className="h-[50px] relative shrink-0 w-[46.518px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.5179 50">
                              <g id="Container">
                                <path d={svgPaths.p1a1aa480} fill="var(--fill-0, #FFEFED)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Heading 3:margin">
                      <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefed] text-[30px] w-[255.25px]">
                        <p className="leading-[36px]">The Restaurants</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center px-[0.41px] relative shrink-0" data-name="Container">
                      <BackgroundImage text="The heart of the aroma. Create" text1="legendary dishes, manage a bustling" text2="kitchen, and feed the hungry crowds" text3="of the city." additionalClassNames="text-[rgba(255,239,237,0.9)] w-[277.18px]" />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Margin">
                      <button
                        onClick={handleSelectRestaurant}
                        className="bg-white content-stretch flex flex-col items-start px-[32px] py-[12px] relative rounded-[9999px] shrink-0 cursor-pointer border-none transition-transform hover:scale-105"
                        data-name="Background"
                      >
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#b02317] text-[14px] tracking-[1.4px] uppercase w-[145.59px]">
                          <p className="leading-[20px]">Ignite the Flame</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </BackgroundShadowBackgroundImage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
