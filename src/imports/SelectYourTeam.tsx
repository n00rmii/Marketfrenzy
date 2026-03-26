import clsx from "clsx";
import svgPaths from "./svg-l2ijyn96wm";
import { imgBackground } from "./svg-fzskw";
type BackgroundImageProps = {
  text: string;
};

function BackgroundImage({ children, text }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties} className="flex h-[37.196px] items-center justify-center relative shrink-0 w-full">
      <div className="-rotate-1 flex-none w-full">
        <div className="relative w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#372e00] text-[24px] tracking-[-0.6px] uppercase w-full">
              <p className="leading-[32px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BackgroundHorizontalBorderBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundHorizontalBorderBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundHorizontalBorderBackgroundImageProps>) {
  return (
    <div className={clsx("bg-[#fbe997] relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[rgba(131,119,60,0.2)] border-b-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[13.5px] items-start pb-[28px] pt-[24px] px-[24px] relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8.005px] relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">{children}</div>
    </div>
  );
}

function LinkBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[7px] relative shrink-0 w-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">{children}</g>
      </svg>
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
type BackgroundBorderBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundBorderBackgroundImage({ additionalClassNames = "" }: BackgroundBorderBackgroundImageProps) {
  return (
    <div className={clsx("bg-[#f95630] relative rounded-[9999px] shrink-0 size-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function MarginBackgroundImage() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[32px]">
      <BackgroundBorderBackgroundImage />
    </div>
  );
}

export default function SelectYourTeam() {
  return (
    <div className="bg-[#fff6dc] content-stretch flex flex-col isolate items-center pb-[96px] relative size-full" data-name="Select Your Team">
      <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(255,246,220,0.8)] bottom-0 content-stretch flex gap-[60.6px] items-center left-1/2 pb-[24px] pl-[62.33px] pr-[62.36px] pt-[15px] rounded-tl-[32px] rounded-tr-[32px] w-[390px] z-[3]" data-name="BottomNavBar">
        <div aria-hidden="true" className="absolute border-[rgba(114,88,0,0.1)] border-solid border-t-3 inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_-8px_32px_0px_rgba(114,88,0,0.08)]" />
        <LinkBackgroundImage>
          <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
              <g id="Container">
                <path d={svgPaths.p12a32500} fill="var(--fill-0, #725800)" fillOpacity="0.4" id="Icon" />
              </g>
            </svg>
          </div>
        </LinkBackgroundImage>
        <div className="h-[56px] relative shrink-0 w-[48px]" data-name="Link:margin">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
            <div className="bg-[#725800] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Link">
              <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
                  <g id="Container">
                    <path d={svgPaths.p5df3d80} fill="var(--fill-0, #FFF6DC)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <LinkBackgroundImage>
          <ContainerBackgroundImage>
            <path d={svgPaths.p85bff00} fill="var(--fill-0, #725800)" fillOpacity="0.4" id="Icon" />
          </ContainerBackgroundImage>
        </LinkBackgroundImage>
      </div>
      <div className="bg-gradient-to-b from-[#fff6dc] relative shrink-0 to-[#f5e9c4] w-full z-[2]" data-name="Header - TopAppBar">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_32px_32px_-12px_rgba(114,88,0,0.06)]" data-name="Header - TopAppBar:shadow" />
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
                <ContainerBackgroundImage>
                  <path d={svgPaths.p300a1100} fill="var(--fill-0, #725800)" id="Icon" />
                </ContainerBackgroundImage>
              </div>
              <div className="content-stretch flex flex-col items-start relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Heading 1">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[24px] tracking-[2.4px] uppercase whitespace-nowrap">
                  <p className="leading-[32px]">market FRENZY</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
              <ContainerBackgroundImage1>
                <path d={svgPaths.p8f89580} fill="var(--fill-0, #725800)" id="Icon" />
              </ContainerBackgroundImage1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[672px] relative shrink-0 w-full z-[1]" data-name="Main">
        <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[inherit] px-[24px] py-[32px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section Header">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#725800] text-[36px] text-center tracking-[-0.9px] w-[307.45px]">
                  <p className="leading-[40px]">Select Your Team</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[48px] justify-center leading-[0] relative shrink-0 text-[#675b24] text-[16px] text-center w-[324.88px]">
                  <p className="leading-[24px] mb-0">Claim your spot in the market. Limited slots</p>
                  <p className="leading-[24px]">available!</p>
                </div>
              </div>
              <div className="absolute flex h-[118.65px] items-center justify-center left-[-17.93px] top-[-24.93px] w-[115.332px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
                <div className="flex-none rotate-12">
                  <div className="content-stretch flex flex-col items-center opacity-10 pl-[2.035px] pt-[4.792px] relative" data-name="Container">
                    <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[96px] justify-center leading-[0] not-italic relative shrink-0 text-[#372e00] text-[96px] text-center w-[94.45px]">
                      <p className="leading-[96px]">storefront</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[____224px_216px_216px_216px] relative shrink-0 w-full" data-name="Team Notice Board Grid">
              <div className="bg-[#fff1b8] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Team Card 1: Team Dragon Fruit">
                <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
                  <div className="absolute inset-[0_0_0.2px_0] opacity-5 rounded-[12px]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 224\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 15.839 177 112)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')" }} />
                  <BackgroundHorizontalBorderBackgroundImage>
                    <ContainerBackgroundImage3>
                      <div className="relative shrink-0 size-[48px]" data-name="Mask Group">
                        <div className="absolute bg-[#725800] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
                          <div className="h-[19.018px] relative shrink-0 w-[14px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19.0181">
                              <g id="Container">
                                <path d={svgPaths.p2e0be640} fill="var(--fill-0, #FFF1D7)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f6e38d] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
                        <ContainerBackgroundImage2>
                          <path d={svgPaths.pd3433a0} fill="var(--fill-0, #725800)" id="Icon" />
                        </ContainerBackgroundImage2>
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#725800] text-[12px] w-[75.98px]">
                          <p className="leading-[16px]">2/4 PLAYERS</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage3>
                    <BackgroundImage text="Team Dragon Fruit" />
                    <ContainerBackgroundImage4>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
                        <div className="bg-[#f1dd83] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                          <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[10px] text-center w-[11.34px]">
                            <p className="leading-[15px]">JD</p>
                          </div>
                        </div>
                        <div className="h-[32px] relative shrink-0 w-[24px]" data-name="Margin">
                          <div className="absolute bg-[#a2ffc0] content-stretch flex items-center justify-center left-[-8px] pb-[9px] pt-[8px] px-[2px] rounded-[9999px] size-[32px] top-0" data-name="Background+Border">
                            <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[10px] text-center w-[12.56px]">
                              <p className="leading-[15px]">AL</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#725800] content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#fff1d7] text-[14px] text-center tracking-[1.4px] uppercase w-[37.69px]">
                          <p className="leading-[20px]">Join</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage4>
                  </BackgroundHorizontalBorderBackgroundImage>
                </div>
              </div>
              <div className="col-1 h-[216px] justify-self-stretch relative row-2 shrink-0" data-name="Team Card 2: Lotus Guild:margin">
                <div className="absolute bg-[#fff1b8] content-stretch flex flex-col items-start left-0 p-[4px] right-0 rounded-[12px] top-[-8px]" data-name="Team Card 2: Lotus Guild">
                  <div className="absolute inset-[0_0_0.2px_0] opacity-5 rounded-[12px]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 224\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 15.839 177 112)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')" }} />
                  <BackgroundHorizontalBorderBackgroundImage>
                    <ContainerBackgroundImage3>
                      <div className="relative shrink-0 size-[48px]" data-name="Mask Group">
                        <div className="absolute bg-[#b02317] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
                          <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                              <g id="Container">
                                <path d={svgPaths.p35f7f710} fill="var(--fill-0, #FFEFED)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f6e38d] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
                        <ContainerBackgroundImage2>
                          <path d={svgPaths.pd3433a0} fill="var(--fill-0, #B02317)" id="Icon" />
                        </ContainerBackgroundImage2>
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#b02317] text-[12px] w-[76.14px]">
                          <p className="leading-[16px]">3/4 PLAYERS</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage3>
                    <BackgroundImage text="Lotus Guild" />
                    <ContainerBackgroundImage4>
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Container">
                        <div className="bg-[#ffcb2d] content-stretch flex items-center justify-center mr-[-8px] pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                          <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[10px] text-center w-[14.36px]">
                            <p className="leading-[15px]">MT</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[32px]" data-name="Margin">
                          <div className="bg-[#ffc4ba] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                            <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[10px] text-center w-[14.75px]">
                              <p className="leading-[15px]">HN</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[32px]" data-name="Margin">
                          <div className="bg-[#a2ffc0] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                            <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[10px] text-center w-[13.27px]">
                              <p className="leading-[15px]">SK</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#b02317] content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ffefed] text-[14px] text-center tracking-[1.4px] uppercase w-[37.69px]">
                          <p className="leading-[20px]">Join</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage4>
                  </BackgroundHorizontalBorderBackgroundImage>
                </div>
              </div>
              <div className="col-1 h-[216px] justify-self-stretch relative row-3 shrink-0" data-name="Team Card 3: Pho Kings:margin">
                <div className="absolute bg-[#fff1b8] content-stretch flex flex-col items-start left-0 p-[4px] right-0 rounded-[12px] top-[-8px]" data-name="Team Card 3: Pho Kings">
                  <div className="absolute inset-[0_0_0.2px_0] opacity-5 rounded-[12px]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 224\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 15.839 177 112)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')" }} />
                  <BackgroundHorizontalBorderBackgroundImage>
                    <ContainerBackgroundImage3>
                      <div className="relative shrink-0 size-[48px]" data-name="Mask Group">
                        <div className="absolute bg-[#006a3b] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
                          <div className="h-[20px] relative shrink-0 w-[18.615px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6145 20">
                              <g id="Container">
                                <path d={svgPaths.p13674480} fill="var(--fill-0, #CCFFD8)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f6e38d] content-stretch flex gap-[3.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
                        <ContainerBackgroundImage2>
                          <path d={svgPaths.pd3433a0} fill="var(--fill-0, #006A3B)" id="Icon" />
                        </ContainerBackgroundImage2>
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#006a3b] text-[12px] w-[73.66px]">
                          <p className="leading-[16px]">1/4 PLAYERS</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage3>
                    <BackgroundImage text="Pho Kings" />
                    <ContainerBackgroundImage4>
                      <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
                        <div className="bg-[#ffcb2d] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
                          <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#372e00] text-[10px] text-center w-[13.77px]">
                            <p className="leading-[15px]">VK</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#006a3b] content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ccffd8] text-[14px] text-center tracking-[1.4px] uppercase w-[37.69px]">
                          <p className="leading-[20px]">Join</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage4>
                  </BackgroundHorizontalBorderBackgroundImage>
                </div>
              </div>
              <div className="col-1 h-[216px] justify-self-stretch relative row-4 shrink-0" data-name="Team Card 4: Chili Raiders:margin">
                <div className="absolute bg-[#fff1b8] content-stretch flex flex-col items-start left-0 p-[4px] right-0 rounded-[12px] top-[-8px]" data-name="Team Card 4: Chili Raiders">
                  <div className="absolute inset-[0_0_0.2px_0] opacity-5 rounded-[12px]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 224\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 15.839 177 112)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')" }} />
                  <BackgroundHorizontalBorderBackgroundImage additionalClassNames="opacity-75">
                    <ContainerBackgroundImage3>
                      <div className="relative shrink-0 size-[48px]" data-name="Mask Group">
                        <div className="absolute bg-[#b02500] content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
                          <div className="h-[20.05px] relative shrink-0 w-[13px]" data-name="Container">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 20.05">
                              <g id="Container">
                                <path d={svgPaths.pd31a000} fill="var(--fill-0, #FFEFEC)" id="Icon" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f95630] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
                        <div className="h-[12.25px] relative shrink-0 w-[9.333px]" data-name="Container">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 12.25">
                            <g id="Container">
                              <path d={svgPaths.p27c49100} fill="var(--fill-0, #520C00)" id="Icon" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#520c00] text-[12px] w-[52.59px]">
                          <p className="leading-[16px]">4/4 FULL</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage3>
                    <BackgroundImage text="Chili Raiders" />
                    <ContainerBackgroundImage4>
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Container">
                        <BackgroundBorderBackgroundImage additionalClassNames="mr-[-8px]" />
                        <MarginBackgroundImage />
                        <MarginBackgroundImage />
                        <MarginBackgroundImage />
                      </div>
                      <div className="bg-[#83773c] content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#fff6dc] text-[14px] text-center tracking-[1.4px] uppercase w-[39.06px]">
                          <p className="leading-[20px]">Full</p>
                        </div>
                      </div>
                    </ContainerBackgroundImage4>
                  </BackgroundHorizontalBorderBackgroundImage>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[70px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Decorative Element">
              <div className="bg-[#f6e38d] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+HorizontalBorder">
                <div aria-hidden="true" className="absolute border-[rgba(131,119,60,0.1)] border-b-2 border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[11.99px] h-full items-center pb-[18px] pt-[16px] px-[24px] relative">
                    <ContainerBackgroundImage1>
                      <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #725800)" id="Icon" />
                    </ContainerBackgroundImage1>
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
                        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#675b24] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                          <p className="leading-[16px]">wait for the host to start the game</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}