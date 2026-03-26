import clsx from "clsx";
import { useNavigate } from "react-router";
import svgPaths from "./svg-fj552q4pvs";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center size-full">
      <div className="content-stretch flex flex-col gap-[11.25px] items-center p-[18px] relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        {children}
      </svg>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function InputBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fbe997] relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pt-[8px] px-[12px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border-[#bcad6d] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("bg-[#fff1b8] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0", additionalClassNames)}>
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function InputBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f1dd83] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[16px] pt-[12px] px-[16px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffcb2d] border-b-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[35px] justify-center leading-[0] not-italic relative shrink-0 text-[#372e00] text-[14px] text-center", additionalClassNames)}>
      <p className="leading-[17.5px] mb-0">{text}</p>
      <p className="leading-[17.5px]">{text1}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text?: string;
  value?: number;
  onChange?: (value: number) => void;
};

function ContainerBackgroundImageAndText({ text, value, onChange }: ContainerBackgroundImageAndTextProps) {
  if (onChange && value !== undefined) {
    return (
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#725800] text-[18px] w-full bg-transparent border-none outline-none leading-[28px] p-0"
        />
      </div>
    );
  }
  
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#725800] text-[18px] w-full">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}
type LabelBackgroundImageAndText1Props = {
  text: string;
};

function LabelBackgroundImageAndText1({ text }: LabelBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#372e00] text-[14px] tracking-[-0.14px] w-full">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text?: string;
  value?: number;
  onChange?: (value: number) => void;
};

function ContainerBackgroundImageAndText1({ text, value, onChange }: ContainerBackgroundImageAndText1Props) {
  if (onChange && value !== undefined) {
    return (
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#372e00] text-[16px] w-full bg-transparent border-none outline-none leading-[24px] p-0"
        />
      </div>
    );
  }
  
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#372e00] text-[16px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
};

function LabelBackgroundImageAndText({ text }: LabelBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b02317] text-[12px] tracking-[-0.12px] w-full">
          <p className="leading-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
};

function ContainerBackgroundImage({ text, text1, text2 }: ContainerBackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.75px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#675b24] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{text}</p>
        <p className="leading-[22.75px] mb-0">{text1}</p>
        <p className="leading-[22.75px]">{text2}</p>
      </div>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.75px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[20px] w-full">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

type GameSetupHostProps = {
  sellerTeams?: number;
  customerTeams?: number;
  playersPerTeam?: number;
  numberOfRounds?: number;
  roundDuration?: number;
  startingCash?: number;
  onSellerTeamsChange?: (value: number) => void;
  onCustomerTeamsChange?: (value: number) => void;
  onPlayersPerTeamChange?: (value: number) => void;
  onNumberOfRoundsChange?: (value: number) => void;
  onRoundDurationChange?: (value: number) => void;
  onStartingCashChange?: (value: number) => void;
};

export default function GameSetupHost({
  sellerTeams = 4,
  customerTeams = 6,
  playersPerTeam = 3,
  numberOfRounds = 3,
  roundDuration = 15,
  startingCash = 1000,
  onSellerTeamsChange,
  onCustomerTeamsChange,
  onPlayersPerTeamChange,
  onNumberOfRoundsChange,
  onRoundDurationChange,
  onStartingCashChange
}: GameSetupHostProps = {}) {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#fff6dc] content-stretch flex flex-col items-center relative size-full" data-name="Game Setup (Host)">
      <div className="backdrop-blur-[6px] bg-[rgba(255,246,220,0.8)] relative shrink-0 w-full" data-name="Header - Top Navigation Bar">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-b-4 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[20px] pt-[16px] px-[24px] relative w-full">
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
                <BackgroundImage2>
                  <g id="Button">
                    <path d={svgPaths.p164b49c0} fill="var(--fill-0, #725800)" fillOpacity="0.7" id="Icon" />
                  </g>
                </BackgroundImage2>
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
      </div>
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[48px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Hero Title">
              <div className="bg-[rgba(162,255,192,0)] content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
                <div className="h-[11.667px] relative shrink-0 w-[12.352px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3521 11.6667">
                    <g id="Container">
                      <path d={svgPaths.p513bf00} fill="var(--fill-0, #006438)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#006438] text-[12px] tracking-[1.2px] uppercase w-[149.91px]">
                  <p className="leading-[16px]">Market Operations</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[60px] w-full">
                  <p className="leading-[60px]">Configure Your Market</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[56px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[18px] w-[617.06px]">
                  <p className="leading-[28px] mb-0">Set the stage for the ultimate trading simulation. Balance your parties and</p>
                  <p className="leading-[28px]">{`define the economic rules of Hoi An's busiest morning market.`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Section 1: Party Configuration (Bento Grid)">
              <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[290.19px]" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
                    <div className="h-[23px] relative shrink-0 w-[24px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
                        <g id="Container">
                          <path d={svgPaths.p80d2080} fill="var(--fill-0, #B02317)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[24px] w-[240.8px]">
                      <p className="leading-[32px]">Party Configuration</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(114,88,0,0.8)] tracking-[-0.16px] w-[290.19px]">
                      <p className="leading-[24px]">Assign roles to your market participants</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_345.25px] relative shrink-0 w-full" data-name="Container">
                <BackgroundImage1 additionalClassNames="col-1">
                  <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 684 345.25\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(48.366 0 0 24.413 342 172.63)\\'><stop stop-color=\\'rgba(188,173,109,1)\\' offset=\\'0.044194\\'/><stop stop-color=\\'rgba(188,173,109,0)\\' offset=\\'0.044194\\'/></radialGradient></defs></svg>')" }} />
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Background+Shadow">
                      <div aria-hidden="true" className="absolute bg-[#ffc4ba] inset-0 pointer-events-none rounded-[16px]" />
                      <div className="h-[20px] relative shrink-0 w-[22.5px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
                          <g id="Container">
                            <path d={svgPaths.p1bd88a40} fill="var(--fill-0, #B02317)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Margin">
                      <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
                        <HeadingBackgroundImageAndText text="Seller" />
                        <ContainerBackgroundImage text="Masters of negotiation." text1="Managing the market" text2="stalls." />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Margin">
                      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                        <div aria-hidden="true" className="absolute border-[rgba(188,173,109,0.2)] border-solid border-t inset-0 pointer-events-none" />
                        <LabelBackgroundImageAndText text="Number of Teams" />
                        <InputBackgroundImage>
                          <ContainerBackgroundImage2>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                              <ContainerBackgroundImageAndText value={sellerTeams} onChange={onSellerTeamsChange} />
                            </div>
                            <div className="flex flex-row items-center self-stretch">
                              <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                                <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
                              </div>
                            </div>
                          </ContainerBackgroundImage2>
                        </InputBackgroundImage>
                      </div>
                    </div>
                  </div>
                </BackgroundImage1>
                <BackgroundImage1 additionalClassNames="col-2">
                  <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 684 345.25\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(48.366 0 0 24.413 342 172.63)\\'><stop stop-color=\\'rgba(188,173,109,1)\\' offset=\\'0.044194\\'/><stop stop-color=\\'rgba(188,173,109,0)\\' offset=\\'0.044194\\'/></radialGradient></defs></svg>')" }} />
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Background+Shadow">
                      <div aria-hidden="true" className="absolute bg-[#a2ffc0] inset-0 pointer-events-none rounded-[16px]" />
                      <div className="h-[23.75px] relative shrink-0 w-[27.47px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4697 23.75">
                          <g id="Container">
                            <path d={svgPaths.p2d6ea180} fill="var(--fill-0, #006A3B)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Margin">
                      <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
                        <HeadingBackgroundImageAndText text="Customer" />
                        <ContainerBackgroundImage text="Strategic shoppers" text1="looking for the best daily" text2="deals." />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Margin">
                      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
                        <div aria-hidden="true" className="absolute border-[rgba(188,173,109,0.2)] border-solid border-t inset-0 pointer-events-none" />
                        <LabelBackgroundImageAndText text="Number of Teams" />
                        <InputBackgroundImage>
                          <ContainerBackgroundImage2>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                              <ContainerBackgroundImageAndText value={customerTeams} onChange={onCustomerTeamsChange} />
                            </div>
                            <div className="flex flex-row items-center self-stretch">
                              <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                                <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
                              </div>
                            </div>
                          </ContainerBackgroundImage2>
                        </InputBackgroundImage>
                      </div>
                    </div>
                  </div>
                </BackgroundImage1>
              </div>
            </div>
            <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_527px] relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#fbe997] col-1 justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Section 2: Team & Round Setup">
                <div aria-hidden="true" className="absolute border-[#ffcb2d] border-b-8 border-solid inset-0 pointer-events-none rounded-[32px]" />
                <div className="content-stretch flex flex-col gap-[32px] items-start pb-[185px] pt-[32px] px-[32px] relative w-full">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Section 2: Team & Round Setup:shadow" />
                  <div className="relative shrink-0 w-full" data-name="Heading 3">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                          <g id="Container">
                            <path d={svgPaths.pe40b59c} fill="var(--fill-0, #725800)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] w-[248.23px]">
                        <p className="leading-[32px]">{`Team & Round Setup`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
                      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[rgba(114,88,0,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
                          <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16">
                              <g id="Container">
                                <path d={svgPaths.p86d6a84} fill="var(--fill-0, #725800)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
                          <LabelBackgroundImageAndText1 text="Players per Team" />
                          <InputBackgroundImage1>
                            <ContainerBackgroundImage2>
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                                <ContainerBackgroundImageAndText1 value={playersPerTeam} onChange={onPlayersPerTeamChange} />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                                  <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
                                </div>
                              </div>
                            </ContainerBackgroundImage2>
                          </InputBackgroundImage1>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[rgba(114,88,0,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
                          <div className="h-[21.25px] relative shrink-0 w-[20px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.25">
                              <g id="Container">
                                <path d={svgPaths.p2a51aa20} fill="var(--fill-0, #725800)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
                          <LabelBackgroundImageAndText1 text="Number of Rounds (max 5)" />
                          <InputBackgroundImage1>
                            <ContainerBackgroundImage2>
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                                <ContainerBackgroundImageAndText1 value={numberOfRounds} onChange={onNumberOfRoundsChange} />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                                  <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
                                </div>
                              </div>
                            </ContainerBackgroundImage2>
                          </InputBackgroundImage1>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[rgba(114,88,0,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
                          <BackgroundImage2>
                            <g id="Container">
                              <path d={svgPaths.p80f7ec0} fill="var(--fill-0, #725800)" id="Icon" />
                            </g>
                          </BackgroundImage2>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
                          <LabelBackgroundImageAndText1 text="Round Duration (minutes)" />
                          <InputBackgroundImage1>
                            <ContainerBackgroundImage2>
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
                                <ContainerBackgroundImageAndText1 value={roundDuration} onChange={onRoundDurationChange} />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
                                  <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
                                </div>
                              </div>
                            </ContainerBackgroundImage2>
                          </InputBackgroundImage1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Section 3 & 4: Financials & Devices">
                <div className="bg-[#fbe997] relative rounded-[32px] shrink-0 w-full" data-name="Section">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
                        <ContainerBackgroundImage1>
                          <path d={svgPaths.p1fd78800} fill="var(--fill-0, #725800)" id="Icon" />
                        </ContainerBackgroundImage1>
                        <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] w-[124.72px]">
                          <p className="leading-[32px]">Financials</p>
                        </div>
                      </div>
                      <div className="absolute h-[64px] right-[16px] top-[16px] w-[88px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 64">
                          <g id="Container" opacity="0.1">
                            <path d={svgPaths.p17772000} fill="var(--fill-0, #372E00)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                        <LabelBackgroundImageAndText1 text="Starting Cash on Hand" />
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#f1dd83] relative rounded-[16px] shrink-0 w-full" data-name="Input">
                            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-start justify-center pb-[20px] pl-[40px] pr-[16px] pt-[16px] relative w-full">
                                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                                    <input
                                      type="number"
                                      value={startingCash}
                                      onChange={(e) => onStartingCashChange?.(parseInt(e.target.value) || 0)}
                                      className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#725800] text-[24px] tracking-[-0.6px] w-full bg-transparent border-none outline-none leading-[32px] p-0"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border-[#006a3b] border-b-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
                          </div>
                          <div className="absolute bottom-0 content-stretch flex items-center left-[16px] top-0" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                              <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#725800] text-[20px] w-[12.61px]">
                                <p className="leading-[28px]">$</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#675b24] text-[12px] w-full">
                            <p className="leading-[16px]">Suggested for a balanced 15-minute round</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f6e38d] relative rounded-[32px] shrink-0 w-full" data-name="Section">
                  <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
                      <ContainerBackgroundImage1>
                        <path d={svgPaths.p172b9974} fill="var(--fill-0, #725800)" id="Icon" />
                      </ContainerBackgroundImage1>
                      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] w-[185.08px]">
                        <p className="leading-[32px]">Device Options</p>
                      </div>
                    </div>
                    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_119px] relative shrink-0 w-full" data-name="Container">
                      <div className="bg-[rgba(255,196,186,0.3)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Label">
                        <div aria-hidden="true" className="absolute border-2 border-[#b02317] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <BackgroundImage3>
                          <div className="h-[22.5px] relative shrink-0 w-[20px]" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.5">
                              <path d={svgPaths.p36ae6e00} fill="var(--fill-0, #B02317)" id="Icon" />
                            </svg>
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.75px] px-[17.69px] relative">
                              <BackgroundImage text="Teams on Shared" text1="Devices" additionalClassNames="w-[120.62px]" />
                            </div>
                          </div>
                        </BackgroundImage3>
                      </div>
                      <div className="bg-[#fbe997] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Label">
                        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <BackgroundImage3>
                          <div className="h-[27.5px] relative shrink-0 w-[18.75px]" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 27.5">
                              <path d={svgPaths.p3ee39400} fill="var(--fill-0, #B02317)" id="Icon" />
                            </svg>
                          </div>
                          <div className="relative shrink-0" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.75px] pl-[12px] pr-[12.02px] relative">
                              <BackgroundImage text="Teams on Personal" text1="Devices" additionalClassNames="w-[131.98px]" />
                            </div>
                          </div>
                        </BackgroundImage3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end pt-[50px] relative shrink-0 w-full" data-name="Footer Action">
              <div aria-hidden="true" className="absolute border-[rgba(188,173,109,0.3)] border-solid border-t-2 inset-0 pointer-events-none" />
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.01px] items-start relative">
                  <div className="content-stretch flex flex-col items-center justify-center px-[34px] py-[22px] relative rounded-[16px] shrink-0" data-name="Button">
                    <div aria-hidden="true" className="absolute border-2 border-[#b02317] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#b02317] text-[16px] text-center tracking-[1.6px] uppercase w-[167.42px]">
                      <p className="leading-[24px]">Reset Defaults</p>
                    </div>
                  </div>
                  <div className="bg-[#b02317] content-stretch flex gap-[11.99px] items-center justify-center px-[48px] py-[22px] relative rounded-[16px] shrink-0" data-name="Button">
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.25px_0_0] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(176,35,23,0.3),0px_8px_10px_-6px_rgba(176,35,23,0.3)]" data-name="Button:shadow" />
                    <div className="h-[19.769px] relative shrink-0 w-[19.77px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7704 19.7694">
                        <g id="Container">
                          <path d={svgPaths.p14e4ec00} fill="var(--fill-0, #FFEFED)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffefed] text-[16px] text-center tracking-[1.6px] uppercase w-[228.22px]">
                      <p className="leading-[24px]">{`Save & Launch Lobby`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[-100px] size-[225px] top-[160px]" data-name="Background Lantern Decoration">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 225">
          <g id="Background Lantern Decoration" opacity="0.1">
            <path d={svgPaths.p3c850e00} fill="var(--fill-0, #725800)" id="Icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}