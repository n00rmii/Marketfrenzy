import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-31txuqh47f";
import imgAb6AXuDRwZs1AyerAtdfvK3OnkkCxAnbnNhV7WgJ3Q6UZ24JosobuiCeStzViAwvCsBx9ORxLgJv0Qx4J4BfbntoIAiW0H6F4Aj5HlOdrjRy1BzCygiYu5ZjpLewgNahjHQs2FOkOeWwgUvVTeiJx5K4Q6HKc3IvH58VVrqLcYFxLcbM0I4LgmyZ4TSn3MZwOuRc0HwWXUdXmMjpNqVuiAm2TrkGzc1Z9Y8Ga4WdHKzpk8CQoWr4HNf9Kb6ZRGzd3VKjOJwGQpkE from "figma:asset/3eebe17bc6603928c486bacf587d66d1a6e8c2cf.png";
import { imgBackground, imgBackground1 } from "../../imports/svg-e26h3";

function LinkBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1>
      <g id="Container">{children}</g>
    </BackgroundImage1>
  );
}

function BackgroundImage() {
  return (
    <div className="bg-[#f6e38d] h-[64px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[48px]">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[14.5px] pt-[11.5px] px-[13px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[30px] text-center w-[10.14px]">
              <p className="leading-[normal]">{"·"}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#83773c] border-b-4 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

export default function JoinGameProfile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Thương Lái Hào Hiệp");
  const [roomCode, setRoomCode] = useState(["", "", "", "", "", ""]);

  const handleJoinLobby = () => {
    // Save user data to localStorage
    localStorage.setItem("playerName", userName);
    localStorage.setItem("roomCode", roomCode.join(""));
    navigate("/choose-party");
  };

  return (
    <div className="bg-[#fff6dc] content-stretch flex flex-col isolate items-center pb-[8px] relative size-full" data-name="Join Game & Profile">
      <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(255,246,220,0.8)] bottom-0 content-stretch flex gap-[60.6px] items-center justify-center left-1/2 pb-[24px] pl-[62.33px] pr-[62.36px] pt-[15px] rounded-tl-[32px] rounded-tr-[32px] w-[390px] z-[3]" data-name="BottomNavBar Predicted Component (Mobile Only)">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-solid border-t-3 inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_-8px_32px_0px_rgba(114,88,0,0.08)]" />
        <div className="h-[56px] relative shrink-0 w-[48px]" data-name="Link:margin">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
            <div className="bg-[#725800] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Link">
              <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                  <g id="Container">
                    <path d={svgPaths.p12a32500} fill="var(--fill-0, #FFF6DC)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <LinkBackgroundImage>
          <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
              <g id="Container">
                <path d={svgPaths.p5df3d80} fill="var(--fill-0, #725800)" fillOpacity="0.4" id="Icon" />
              </g>
            </svg>
          </div>
        </LinkBackgroundImage>
        <LinkBackgroundImage>
          <ContainerBackgroundImage>
            <path d={svgPaths.p85bff00} fill="var(--fill-0, #725800)" fillOpacity="0.4" id="Icon" />
          </ContainerBackgroundImage>
        </LinkBackgroundImage>
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fff6dc] items-start relative shrink-0 to-[#f5e9c4] w-full z-[2]" data-name="Header - TopAppBar Predicted Component">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_32px_32px_-12px_rgba(114,88,0,0.06)]" data-name="Header - TopAppBar Predicted Component:shadow" />
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.01px] py-[16px] relative w-full">
              <button onClick={() => navigate("/")} className="content-stretch flex flex-col items-center justify-center relative shrink-0 cursor-pointer bg-transparent border-none p-0" data-name="Button">
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
        <div className="content-stretch flex flex-col gap-[43px] items-start max-w-[inherit] px-[24px] py-[48px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[342px]" data-name="Welcome Section">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[36px] text-center text-shadow-[2px_2px_0px_rgba(114,88,0,0.2)] tracking-[-0.9px] uppercase w-[271.63px]">
                <p className="leading-[40px]">Vào Chợ Nào!</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[16px] text-center w-[263.41px]">
                <p className="leading-[24px]">Grab your basket and join the stall.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[342px]" data-name="Section - Room Code Entry">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col items-start pr-[55.86px] relative shrink-0" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[18px] uppercase w-[172.3px]">
                  <p className="leading-[28px] mb-0">Mã Phòng (Room</p>
                  <p className="leading-[28px]">Code)</p>
                </div>
              </div>
              <div className="bg-[#a2ffc0] content-stretch flex flex-col items-start pl-[12px] pr-[52.86px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#006a3b] text-[12px] w-[48.98px]">
                  <p className="leading-[16px] mb-0">ACTIVE</p>
                  <p className="leading-[16px]">MARKET</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] relative shrink-0 w-[344px]" data-name="Container">
              <BackgroundImage />
              <BackgroundImage />
              <BackgroundImage />
              <div className="h-[4px] shrink-0 w-[8px]" data-name="Margin" />
              <BackgroundImage />
              <BackgroundImage />
              <BackgroundImage />
            </div>
            <div className="bg-[#fbe997] content-stretch flex gap-[11.99px] items-center justify-center px-[2px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
              <div aria-hidden="true" className="absolute border-2 border-[rgba(188,173,109,0.3)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
              <ContainerBackgroundImage1>
                <path d={svgPaths.p1c987e00} fill="var(--fill-0, #372E00)" id="Icon" />
              </ContainerBackgroundImage1>
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[16px] text-center w-[188.17px]">
                <p className="leading-[24px]">QUÉT MÃ QR (SCAN QR)</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[342px]" data-name="Section - Profile Customization (Bento-inspired layering)">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[18px] uppercase w-full">
                <p className="leading-[28px]">Your Profile</p>
              </div>
            </div>
            <div className="bg-[#fff1b8] relative rounded-[32px] shrink-0 w-full" data-name="Background">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                  <div className="absolute inset-0 opacity-3" data-name="Subtle Texture Overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 342 329\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(24.183 0 0 23.264 171 164.5)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.044194\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.044194\\'/></radialGradient></defs></svg>')" }} />
                  <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Avatar Selection with Lantern Frame">
                      <div className="h-[160px] relative shrink-0 w-[128px]" data-name="Mask Group">
                        <div className="absolute bg-[#725800] content-stretch flex h-[160px] items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[128px_160px] top-0 w-[128px]" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
                          <div className="absolute bg-[rgba(255,255,255,0)] h-[160px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[128px]" data-name="Overlay+Shadow" />
                          <div className="h-[144px] relative shrink-0 w-[112px]" data-name="Mask Group">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex h-[144px] items-center justify-center left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[112px_144px] top-1/2 w-[112px]" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
                              <div className="max-w-[112px] relative shrink-0 size-[96px]" data-name="AB6AXuDRwZS1ayerAtdfvK3ONKKCxAnbnNhV7wgJ3Q6uZ24JOSOBUI-CeStzViAWVCsBx9oRXLgJv0qx4j4BfbntoIAiW0H6F4aj5hlOdrjRY1BzCygiYU5ZJPLewgNahjHQs2FOkOeWwgUvV_TeiJx5k4Q6hKc3iv_h58VVrqLcYFxLcb_m0i4LgmyZ4tSn3mZWOuRc0hw-wXUdXmMJPNqVuiAM_2trkGZC1z9Y8ga4wdHKzpk8cQoWR4HNf9_Kb6zRGzd3VKjOJwGQpkE">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDRwZs1AyerAtdfvK3OnkkCxAnbnNhV7WgJ3Q6UZ24JosobuiCeStzViAwvCsBx9ORxLgJv0Qx4J4BfbntoIAiW0H6F4Aj5HlOdrjRy1BzCygiYu5ZjpLewgNahjHQs2FOkOeWwgUvVTeiJx5K4Q6HKc3IvH58VVrqLcYFxLcbM0I4LgmyZ4TSn3MZwOuRc0HwWXUdXmMjpNqVuiAm2TrkGzc1Z9Y8Ga4WdHKzpk8CQoWr4HNf9Kb6ZRGzd3VKjOJwGQpkE} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#b02317] bottom-[-8px] content-stretch flex items-center justify-center right-[-8px] rounded-[9999px] size-[48px]" data-name="Button">
                        <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px]" data-name="Button:shadow" />
                        <ContainerBackgroundImage1>
                          <path d={svgPaths.pad10a80} fill="var(--fill-0, #FFEFED)" id="Icon" />
                        </ContainerBackgroundImage1>
                      </div>
                    </div>
                    <div className="h-[89px] relative shrink-0 w-full" data-name="Name Field">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[16px] justify-center leading-[0] left-[4px] text-[#83773c] text-[12px] top-[7.5px] tracking-[1.2px] uppercase w-[229px]">
                        <p className="leading-[16px]">User name</p>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Container">
                        <div className="bg-[#f6e38d] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Input">
                          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex items-start justify-center pb-[22px] pt-[18px] px-[25px] relative w-full">
                              <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="flex-[1_0_0] min-h-px min-w-px font-['Be_Vietnam_Pro:Bold',sans-serif] text-[20px] text-[#725800] bg-transparent border-none outline-none"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[#725800] border-b-4 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
                        </div>
                        <div className="absolute bottom-[31.54%] content-stretch flex flex-col items-start right-[16px] top-[31.54%]" data-name="Container">
                          <BackgroundImage1>
                            <path d={svgPaths.p85bff00} fill="var(--fill-0, #725800)" id="Icon" />
                          </BackgroundImage1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[342px]" data-name="Primary Action">
            <button
              onClick={handleJoinLobby}
              className="bg-gradient-to-r content-stretch flex from-[#b02317] gap-[12px] items-center justify-center py-[20px] relative rounded-[9999px] shrink-0 to-[#9f150b] w-full cursor-pointer border-none transition-transform hover:scale-105"
              data-name="Button"
            >
              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_12px_24px_-8px_rgba(176,35,23,0.4)]" data-name="Button:shadow" />
              <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefed] text-[20px] text-center w-[258.41px]">
                <p className="leading-[28px]">JOIN LOBBY</p>
              </div>
              <div className="h-[20.5px] relative shrink-0 w-[21.55px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.55 20.5">
                  <g id="Container">
                    <path d={svgPaths.p13ae4980} fill="var(--fill-0, #FFEFED)" id="Icon" />
                  </g>
                </svg>
              </div>
            </button>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#bcad6d] text-[12px] text-center tracking-[-0.6px] uppercase whitespace-nowrap">
                <p className="leading-[16px] mb-0">By joining, you agree to Market frenzy Code of</p>
                <p className="leading-[16px]">Conduct</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
