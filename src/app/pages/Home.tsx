import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-1r5rtyocf5";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff6dc] content-stretch flex flex-col items-start relative size-full" data-name="Home Screen">
      <div className="content-stretch flex flex-col h-[1024px] items-center pb-[128px] pt-[96px] relative shrink-0 w-full" data-name="Main">
        <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[819px] overflow-clip pb-[59.5px] pt-[52.5px] px-[24px] right-0 top-[96px]" data-name="Hero Section: The Chợ Gate">
          <div className="absolute flex h-[107.491px] items-center justify-center left-[48.67px] top-[97.54px] w-[107.504px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="flex-none rotate-12">
              <div className="h-[90.626px] relative w-[90.642px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.6424 90.6256">
                  <path d={svgPaths.p31e99ec0} fill="var(--fill-0, #725800)" id="Icon" opacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[61.99px] flex h-[158.587px] items-center justify-center right-[26.28px] w-[156.294px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="-rotate-12 flex-none">
              <div className="content-stretch flex flex-col items-start opacity-20 pt-[6.231px] relative" data-name="Container">
                <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[128px] w-[131.254px]">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[240px] right-[80px] top-[409.5px] w-[180px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 240">
              <g id="Container" opacity="0.1">
                <path d={svgPaths.p4580400} fill="var(--fill-0, #725800)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
            <div className="content-stretch flex flex-col items-center pb-[6px] relative shrink-0" data-name="Chợ Gate Header Aesthetic">
              <div className="bg-[#b02317] content-stretch flex items-start justify-center mb-[-6px] px-[32px] py-[6.5px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0" data-name="Background">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefed] text-[20px] text-center tracking-[4px] uppercase w-[167.31px]">
                  <p className="leading-[28px] text-[16px]">Chào Mừng</p>
                </div>
              </div>
              <div className="bg-[#f1dd83] content-stretch flex flex-col gap-[16px] items-center mb-[-6px] pb-[48px] pt-[56px] px-[56px] relative rounded-[16px] shrink-0" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border-[#725800] border-l-8 border-r-8 border-solid border-t-8 inset-0 pointer-events-none rounded-[16px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.1px_0_0] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
                <div className="relative shrink-0" data-name="Heading 1">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[126.95px] relative">
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[96px] text-center tracking-[-4.8px] uppercase whitespace-nowrap">
                      <p className="leading-[96px]">market frenzy</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[64px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[24px] text-center w-[621.62px]">
                  <p className="leading-[32px] mb-0">Strategize, Trade, and Master the Art of the Deal in the</p>
                  <p className="leading-[32px]">Ultimate Digital Market.</p>
                </div>
                <div className="absolute inset-[8px_7.9px_0_8px] opacity-5" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1158 272\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(81.883 0 0 19.233 579 136)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.029463\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.029463\\'/></radialGradient></defs></svg>')" }} />
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Main Action 'Produce Crates">
              <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_312px] px-[16px] relative w-full">
                <button 
                  onClick={() => navigate('/setup')}
                  className="bg-[#fff1b8] col-1 h-[312px] justify-self-stretch relative rounded-[24px] row-1 shrink-0 cursor-pointer transition-transform hover:scale-105" 
                  data-name="Host a Game"
                >
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Host a Game:shadow" />
                  <div className="absolute content-stretch flex items-start justify-center left-[32px] right-[32px] top-[32px]" data-name="Container">
                    <div className="bg-[#725800] content-stretch flex h-[96px] items-center justify-center relative rounded-[9999px] shrink-0 w-[80px]" data-name="Background">
                      <div className="h-[27px] relative shrink-0 w-[33px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 27">
                          <g id="Container">
                            <path d={svgPaths.p324c3f00} fill="var(--fill-0, #FFF6DC)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[152px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] text-center uppercase w-[149.08px]">
                      <p className="leading-[32px]">Host Game</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[192px]" data-name="Container">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[14px] text-center w-[230.45px]">
                      <p className="leading-[20px] mb-0">Create a lobby and lead your fellow</p>
                      <p className="leading-[20px]">traders to prosperity.</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[20px] items-start justify-center left-[32px] right-[32px] top-[256px]" data-name="Container">
                    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p33b1c470} fill="var(--fill-0, #725800)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => navigate('/join')}
                  className="bg-[#f6e38d] col-2 h-[312px] justify-self-stretch relative rounded-[24px] row-1 shrink-0 cursor-pointer transition-transform hover:scale-105 border-none"
                  data-name="Join a Game"
                >
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Join a Game:shadow" />
                  <div className="absolute content-stretch flex items-start justify-center left-[32px] right-[32px] top-[32px]" data-name="Container">
                    <div className="bg-[#b02317] content-stretch flex h-[96px] items-center justify-center relative rounded-[9999px] shrink-0 w-[80px]" data-name="Background">
                      <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 24">
                          <g id="Container">
                            <path d={svgPaths.p2e41fe40} fill="var(--fill-0, #FFF6DC)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[152px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[24px] text-center uppercase w-[136.25px]">
                      <p className="leading-[32px]">Join Game</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[192px]" data-name="Container">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[14px] text-center w-[222.14px]">
                      <p className="leading-[20px] mb-0">Enter a room code and prove your</p>
                      <p className="leading-[20px]">worth on the market floor.</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[18px] items-start justify-center left-[32px] right-[32px] top-[256px]" data-name="Container">
                    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
                      <div className="relative shrink-0 size-[18px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={svgPaths.p3dbaa380} fill="var(--fill-0, #B02317)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="bg-[#f1dd83] col-3 h-[312px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Learn Rules">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Learn Rules:shadow" />
                  <button 
                    onClick={() => navigate('/rules')}
                    className="absolute inset-0 w-full h-full cursor-pointer transition-transform hover:scale-105 rounded-[24px] bg-transparent border-none"
                  />
                  <div className="absolute content-stretch flex items-start justify-center left-[32px] right-[31.99px] top-[32px]" data-name="Container">
                    <div className="bg-[#006a3b] content-stretch flex h-[96px] items-center justify-center relative rounded-[9999px] shrink-0 w-[80px]" data-name="Background">
                      <div className="h-[24px] relative shrink-0 w-[33px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 24">
                          <g id="Container">
                            <path d={svgPaths.p1cc62b00} fill="var(--fill-0, #FFF6DC)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[31.99px] top-[152px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#006a3b] text-[24px] text-center uppercase w-[155.45px]">
                      <p className="leading-[32px]">Read Rules</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[31.99px] top-[192px]" data-name="Container">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[14px] text-center w-[222.1px]">
                      <p className="leading-[20px] mb-0">Master the mechanics of haggling</p>
                      <p className="leading-[20px]">and resource management.</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[21.5px] items-start justify-center left-[32px] right-[31.99px] top-[256px]" data-name="Container">
                    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
                      <div className="h-[21.5px] relative shrink-0 w-[18px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.5">
                          <path d={svgPaths.p260bd680} fill="var(--fill-0, #006A3B)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[6px] bg-[rgba(255,246,220,0.8)] content-stretch flex items-center justify-between left-0 pb-[20px] pt-[16px] px-[24px] right-0 top-0" data-name="Header - Top Navigation Bar">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-b-4 border-solid inset-0 pointer-events-none" />
        <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_4px_20px_-5px_rgba(114,88,0,0.15)] top-0 w-[1280px]" data-name="Header - Top Navigation Bar:shadow" />
        <button onClick={() => navigate("/")} className="cursor-pointer bg-transparent border-none p-0">
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] tracking-[-1.2px] uppercase whitespace-nowrap">
                <p className="leading-[32px]">Market Frenzy</p>
              </div>
            </div>
          </div>
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