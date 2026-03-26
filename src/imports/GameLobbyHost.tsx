import clsx from "clsx";
import { useNavigate } from "react-router";
import svgPaths from "./svg-1hf7miuyoc";
import imgChobenthanh1 from "figma:asset/329f21d10b962cba3017ae256ea1324624f59549.png";

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">{children}</div>
    </div>
  );
}
type BackgroundBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[9999px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

export default function GameLobbyHost() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff6dc] content-stretch flex flex-col items-start relative size-full" data-name="Game Lobby (Host)">
      <div className="content-stretch flex flex-col h-[948px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Main Canvas">
        <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Background Gate Image">
          <div className="h-[949px] relative shrink-0 w-[2282px]" data-name="chobenthanh 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChobenthanh1} />
          </div>
          <div className="absolute bg-gradient-to-t from-[#fff6dc] inset-0 opacity-80 to-[rgba(255,246,220,0)] via-1/2 via-[rgba(255,246,220,0)]" data-name="Gradient" />
          <div className="absolute inset-0 opacity-5" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 948\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(101.82 0 0 67.034 720 474)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.017678\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.017678\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 948\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(101.82 0 0 67.034 720 474)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.017678\\'/><stop stop-color=\\'rgba(255,246,220,1)\\' offset=\\'0.017678\\'/></radialGradient></defs></svg>')" }} />
        </div>
        <div className="bg-[#725801] content-stretch flex items-center justify-center px-[20px] py-[18px] relative rounded-[10px] shrink-0">
          <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#fff6dc] text-[32px] whitespace-nowrap">
            <p className="leading-[16.5px]">START THE GAME</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_736px] left-[80px] max-w-[1280px] px-[48px] py-[45px] right-[80px] top-[calc(50%-26.5px)]" data-name="Container">
          <div className="col-[1/span_3] content-stretch flex flex-col gap-[21.633px] items-end justify-self-stretch relative row-1 self-start shrink-0" data-name="Left Side: Sellers">
            <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="h-[27px] relative shrink-0 w-[30.141px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1408 27">
                    <g id="Container">
                      <path d={svgPaths.p1ac95100} fill="var(--fill-0, #725800)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[30px] text-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] tracking-[-1.5px] uppercase w-[131.08px]">
                    <p className="leading-[36px]">Sellers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[11.3px] items-start relative shrink-0 w-[272.82px]" data-name="Container">
              <div className="bg-[#fff1b8] content-stretch flex gap-[16.002px] items-center pl-[28px] pr-[20px] py-[20px] relative rounded-[12px] shrink-0 w-[272px]" data-name="Background+VerticalBorder">
                <div aria-hidden="true" className="absolute border-[#725800] border-l-8 border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <BackgroundBackgroundImage additionalClassNames="bg-[#725800] h-[47.997px] w-[42.027px]">
                  <div className="h-[19.018px] relative shrink-0 w-[14px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19.0181">
                      <g id="Container">
                        <path d={svgPaths.p2e0be640} fill="var(--fill-0, #FFF1D7)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </BackgroundBackgroundImage>
                <div className="relative shrink-0 w-[166.788px]" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[0.003px] pr-[36.463px] relative w-full">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#372e00] text-[20px] w-full">
                      <p className="leading-[28px]">The Cabbage Patch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1b8] content-stretch flex gap-[15.994px] items-center pl-[28px] pr-[20px] py-[20px] relative rounded-[12px] shrink-0 w-[272px]" data-name="Background+VerticalBorder">
                <div aria-hidden="true" className="absolute border-[#725800] border-l-8 border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <BackgroundBackgroundImage additionalClassNames="bg-[#725800] size-[47.997px]">
                  <div className="h-[19px] relative shrink-0 w-[16px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
                      <g id="Container">
                        <path d={svgPaths.p38fbbc00} fill="var(--fill-0, #FFF1D7)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </BackgroundBackgroundImage>
                <ContainerBackgroundImage>
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[20px] w-[132.39px]">
                    <p className="leading-[28px]">Spicy Traders</p>
                  </div>
                </ContainerBackgroundImage>
              </div>
              <div className="bg-[#fff1b8] content-stretch flex gap-[15.998px] items-center pl-[28px] pr-[20px] py-[20px] relative rounded-[12px] shrink-0 w-[272px]" data-name="Background+VerticalBorder">
                <div aria-hidden="true" className="absolute border-[#725800] border-l-8 border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <BackgroundBackgroundImage additionalClassNames="bg-[#725800] size-[47.997px]">
                  <div className="h-[16.992px] relative shrink-0 w-[16.995px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9955 16.9923">
                      <g id="Container">
                        <path d={svgPaths.p12cee600} fill="var(--fill-0, #FFF1D7)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </BackgroundBackgroundImage>
                <ContainerBackgroundImage>
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[20px] w-[125.449px]">
                    <p className="leading-[28px]">Rice Masters</p>
                  </div>
                </ContainerBackgroundImage>
              </div>
            </div>
          </div>
          <div className="col-[4/span_6] h-[736px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Center: Title & QR">
            <div className="absolute content-stretch flex flex-col items-start left-0 pb-[32px] top-0" data-name="Margin">
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-center px-[84px] relative shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] shrink-0" data-name="Heading 1">
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[192px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[96px] text-center text-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] tracking-[-4.8px] uppercase w-[408px]">
                    <p className="leading-[96px] mb-0">Market</p>
                    <p className="leading-[96px]">Frenzy</p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 w-[282.743px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                  <div className="-skew-x-12 flex-none">
                    <div className="bg-[#725800] content-stretch flex items-start justify-center px-[32px] py-[8px] relative rounded-[9999px]" data-name="Background">
                      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_-1.07px_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#fff1d7] text-[20px] text-center w-[208.54px]">
                        <p className="leading-[32px]">LOBBY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[16px] h-[40px] items-center justify-center left-[calc(50%+0.01px)] top-[calc(50%+348px)]" data-name="Container">
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-[#006a3b] h-full relative rounded-[9999px] shrink-0" data-name="Background">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] h-full items-center pb-[8.5px] pt-[7.5px] px-[24px] relative">
                      <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[24px] justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white w-[144.45px]">
                        <p className="leading-[24px]">6 PLAYERS JOINED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-[#725800] h-full relative rounded-[9999px] shrink-0" data-name="Background">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col h-full items-center justify-center px-[24px] py-[8px] relative">
                      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[24px] justify-center leading-[0] relative shrink-0 text-[#fff1d7] text-[15px] text-center w-[191.45px]">
                        <p className="leading-[24px]">WAITING FOR LEADER...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[132.28px] pb-[32px] top-[288px]" data-name="Margin">
              <div className="bg-[#f1dd83] h-[376px] relative rounded-[48px] shrink-0 w-[311.42px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border-8 border-[#725800] border-solid inset-0 pointer-events-none rounded-[48px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
                <div className="absolute bg-white content-stretch flex flex-col items-start left-[40px] pl-[16px] pr-[23.42px] py-[16px] rounded-[16px] top-[40px]" data-name="Background">
                  <div className="shrink-0 size-[192px]" data-name="Join Game QR Code" />
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-[40px] top-[280px]" data-name="Container">
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#725800] text-[20px] text-center w-[231.42px]">
                    <p className="leading-[28px]">SCAN TO JOIN THE CHỢ</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-[40px] pl-[21.35px] pr-[21.36px] top-[312px]" data-name="Container">
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[24px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[16px] text-center w-[188.71px]">
                    <p>
                      <span className="leading-[24px]">{`Room Code: `}</span>
                      <span className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[24px] text-[#b02317]">CH0-G8TE</span>
                    </p>
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute bg-[#b02317] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] p-[4px] rounded-[9999px] size-[80px] top-[-32px]" data-name="Background+Border">
                  <div aria-hidden="true" className="absolute border-4 border-[#f1dd83] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[80px] top-0" data-name="Overlay+Shadow" />
                  <div className="relative shrink-0 size-[30px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <g id="Container">
                        <path d={svgPaths.p35b82400} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-[10/span_3] content-stretch flex flex-col gap-[21.63px] items-end justify-self-stretch relative row-1 self-start shrink-0" data-name="Right Side: Restaurants">
            <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[30px] text-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] tracking-[-1.5px] uppercase w-[219.31px]">
                    <p className="leading-[36px]">Restaurants</p>
                  </div>
                </div>
                <div className="h-[30px] relative shrink-0 w-[22.5px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 30">
                    <g id="Container">
                      <path d={svgPaths.p280a6f80} fill="var(--fill-0, #B02317)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[11.3px] items-start relative shrink-0 w-[272.746px]" data-name="Container">
              <div className="bg-[#fff1b8] content-stretch flex gap-[15.998px] items-center pl-[65.964px] pr-[28.004px] py-[20px] relative rounded-[12px] shrink-0 w-[272px]" data-name="Background+VerticalBorder">
                <div aria-hidden="true" className="absolute border-[#b02317] border-r-8 border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <ContainerBackgroundImage>
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[20px] w-[114.027px]">
                    <p className="leading-[28px]">Pho Central</p>
                  </div>
                </ContainerBackgroundImage>
                <BackgroundBackgroundImage additionalClassNames="bg-[#b02317] size-[47.997px]">
                  <div className="h-[20px] relative shrink-0 w-[18.615px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6145 20">
                      <g id="Container">
                        <path d={svgPaths.p13674480} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </BackgroundBackgroundImage>
              </div>
              <div className="bg-[#fff1b8] content-stretch flex gap-[15.994px] items-center pl-[59.858px] pr-[28.002px] py-[20px] relative rounded-[12px] shrink-0 w-[272px]" data-name="Background+VerticalBorder">
                <div aria-hidden="true" className="absolute border-[#b02317] border-r-8 border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <ContainerBackgroundImage>
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[20px] w-[120.148px]">
                    <p className="leading-[28px]">Banh Mi Hub</p>
                  </div>
                </ContainerBackgroundImage>
                <BackgroundBackgroundImage additionalClassNames="bg-[#b02317] size-[47.997px]">
                  <div className="h-[14px] relative shrink-0 w-[22px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 14">
                      <g id="Container">
                        <path d={svgPaths.pa67400} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </BackgroundBackgroundImage>
              </div>
              <div className="bg-[#fff1b8] content-stretch flex gap-[15.998px] items-center pl-[70.032px] pr-[28.004px] py-[20px] relative rounded-[12px] shrink-0 w-[272px]" data-name="Background+VerticalBorder">
                <div aria-hidden="true" className="absolute border-[#b02317] border-r-8 border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <ContainerBackgroundImage>
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[20px] w-[109.967px]">
                    <p className="leading-[28px]">Lotus Diner</p>
                  </div>
                </ContainerBackgroundImage>
                <BackgroundBackgroundImage additionalClassNames="bg-[#b02317] size-[47.997px]">
                  <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                      <g id="Container">
                        <path d={svgPaths.p35f7f710} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </BackgroundBackgroundImage>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[6px] bg-[rgba(255,246,220,0.8)] content-stretch flex items-center justify-between left-0 pb-[20px] pt-[16px] px-[24px] right-0 top-0" data-name="Header - Top Navigation Bar">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-b-4 border-solid inset-0 pointer-events-none" />
        <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_4px_20px_-5px_rgba(114,88,0,0.15)] top-0 w-[1280px]" data-name="Header - Top Navigation Bar:shadow" />
        <button onClick={() => navigate("/")} className="cursor-pointer bg-transparent border-none p-0">
          <ContainerBackgroundImage>
            <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] tracking-[-1.2px] uppercase whitespace-nowrap">
              <p className="leading-[32px]">Market Frenzy</p>
            </div>
          </ContainerBackgroundImage>
        </button>
        <div className="relative shrink-0" data-name="Nav">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
            <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="Link">
              <div aria-hidden="true" className="absolute border-[#b02317] border-b-2 border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[16px] tracking-[-0.4px] uppercase w-[121.88px]">
                <p className="leading-[24px]">Marketplace</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(114,88,0,0.7)] tracking-[-0.4px] uppercase w-[59.66px]">
                <p className="leading-[24px]">Guilds</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(114,88,0,0.7)] tracking-[-0.4px] uppercase w-[121.61px]">
                <p className="leading-[24px]">Leaderboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
            <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Button">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                <g id="Button">
                  <path d={svgPaths.p164b49c0} fill="var(--fill-0, #725800)" fillOpacity="0.7" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Button">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                <g id="Button">
                  <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #725800)" fillOpacity="0.7" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="bg-[#b02317] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefed] text-[14px] text-center uppercase w-[45.56px]">
                <p className="leading-[20px]">Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}