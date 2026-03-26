import { useState } from "react";
import { useNavigate } from "react-router";
import clsx from "clsx";
import svgPaths from "../../imports/svg-l2ijyn96wm";
import { imgBackground } from "../../imports/svg-fzskw";

type BackgroundImageProps = {
  text: string;
};

function BackgroundImage({ text }: BackgroundImageProps) {
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
  initials: string;
};

function BackgroundBorderBackgroundImage({ additionalClassNames = "", initials }: BackgroundBorderBackgroundImageProps) {
  return (
    <div className={clsx("bg-[#f95630] relative rounded-[9999px] shrink-0 size-[32px] content-stretch flex items-center justify-center", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#fff6dc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#fff6dc] text-[10px] text-center">
        <p className="leading-[15px]">{initials}</p>
      </div>
    </div>
  );
}

type Team = {
  name: string;
  icon: string;
  iconColor: string;
  currentPlayers: number;
  maxPlayers: number;
  status: "available" | "full";
  players: string[];
};

export default function SelectYourTeam() {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const playerName = localStorage.getItem("playerName") || "Player";
  const selectedParty = localStorage.getItem("selectedParty") || "seller";

  const sellerTeams: Team[] = [
    {
      name: "Team Dragon Fruit",
      icon: svgPaths.p2e0be640,
      iconColor: "#725800",
      currentPlayers: 2,
      maxPlayers: 4,
      status: "available",
      players: ["JD", "AL"]
    },
    {
      name: "LOTUS GUILD",
      icon: svgPaths.p38fbbc00,
      iconColor: "#b02317",
      currentPlayers: 3,
      maxPlayers: 4,
      status: "available",
      players: ["HT", "HN", "SK"]
    },
    {
      name: "PHO KINGS",
      icon: svgPaths.p2e0be640,
      iconColor: "#006a3b",
      currentPlayers: 1,
      maxPlayers: 4,
      status: "available",
      players: ["YK"]
    },
    {
      name: "CHILI RAIDERS",
      icon: svgPaths.p38fbbc00,
      iconColor: "#b02317",
      currentPlayers: 4,
      maxPlayers: 4,
      status: "full",
      players: ["AB", "CD", "EF", "GH"]
    }
  ];

  const restaurantTeams: Team[] = [
    {
      name: "Pho Central",
      icon: svgPaths.p2e0be640,
      iconColor: "#b02317",
      currentPlayers: 2,
      maxPlayers: 3,
      status: "available",
      players: ["PC", "VN"]
    },
    {
      name: "Banh Mi Hub",
      icon: svgPaths.p38fbbc00,
      iconColor: "#725800",
      currentPlayers: 1,
      maxPlayers: 3,
      status: "available",
      players: ["BM"]
    },
    {
      name: "Lotus Diner",
      icon: svgPaths.p12cee600,
      iconColor: "#006a3b",
      currentPlayers: 3,
      maxPlayers: 3,
      status: "full",
      players: ["LD", "RC", "TH"]
    }
  ];

  const teams = selectedParty === "seller" ? sellerTeams : restaurantTeams;

  const handleJoinTeam = (teamIndex: number) => {
    const team = teams[teamIndex];
    if (team.status === "full") return;

    setSelectedTeam(teamIndex);
    localStorage.setItem("selectedTeam", team.name);
    localStorage.setItem("teamIndex", teamIndex.toString());

    // In a real app, this would update the team roster
    // For now, we'll just navigate back to the lobby or wait screen
  };

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
              <button onClick={() => navigate("/choose-party")} className="content-stretch flex flex-col items-center justify-center relative shrink-0 cursor-pointer bg-transparent border-none p-0" data-name="Button">
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
            </div>
            <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] relative shrink-0 w-full" data-name="Team Notice Board Grid">
              {teams.map((team, index) => (
                <div key={index} className="bg-[#fff1b8] col-1 justify-self-stretch relative rounded-[12px] shrink-0" data-name={`Team Card ${index + 1}`}>
                  <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
                    <div className="absolute inset-[0_0_0.2px_0] opacity-5 rounded-[12px]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 354 224\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(25.032 0 0 15.839 177 112)\\'><stop stop-color=\\'rgba(114,88,0,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(114,88,0,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')" }} />
                    <BackgroundHorizontalBorderBackgroundImage>
                      <ContainerBackgroundImage3>
                        <div className="relative shrink-0 size-[48px]" data-name="Mask Group">
                          <div className="absolute content-stretch flex items-center justify-center left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_48px] size-[48px] top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')`, backgroundColor: team.iconColor }}>
                            <div className="h-[19.018px] relative shrink-0 w-[14px]" data-name="Container">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19.0181">
                                <g id="Container">
                                  <path d={team.icon} fill="var(--fill-0, #FFF1D7)" id="Icon" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className={clsx("content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0", team.status === "full" ? "bg-[#f95630]" : "bg-[#f6e38d]")} data-name="Background">
                          <ContainerBackgroundImage2>
                            <path d={svgPaths.pd3433a0} fill={team.status === "full" ? "var(--fill-0, #fff6dc)" : "var(--fill-0, #725800)"} id="Icon" />
                          </ContainerBackgroundImage2>
                          <div className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px]", team.status === "full" ? "text-[#fff6dc]" : "text-[#725800]")}>
                            <p className="leading-[16px]">{team.status === "full" ? `${team.currentPlayers}/${team.maxPlayers} FULL` : `${team.currentPlayers}/${team.maxPlayers} PLAYERS`}</p>
                          </div>
                        </div>
                      </ContainerBackgroundImage3>
                      <BackgroundImage text={team.name} />
                      <ContainerBackgroundImage4>
                        <div className="content-stretch flex items-start gap-[-8px] relative shrink-0" data-name="Container">
                          {team.players.map((player, playerIndex) => (
                            <BackgroundBorderBackgroundImage key={playerIndex} initials={player} additionalClassNames="ml-[-8px] first:ml-0" />
                          ))}
                          {selectedTeam === index && (
                            <BackgroundBorderBackgroundImage initials={playerName.substring(0, 2).toUpperCase()} additionalClassNames="ml-[-8px] bg-[#a2ffc0]" />
                          )}
                        </div>
                        <button
                          onClick={() => handleJoinTeam(index)}
                          disabled={team.status === "full"}
                          className={clsx(
                            "content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0 border-none cursor-pointer transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50",
                            team.status === "full" ? "bg-[#bcad6d]" : selectedTeam === index ? "bg-[#006a3b]" : "bg-[#725800]"
                          )}
                          data-name="Button"
                        >
                          <div className={clsx("flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[1.4px] uppercase", team.status === "full" ? "text-[#675b24]" : "text-[#fff1d7]")}>
                            <p className="leading-[20px]">{team.status === "full" ? "FULL" : selectedTeam === index ? "JOINED" : "JOIN"}</p>
                          </div>
                        </button>
                      </ContainerBackgroundImage4>
                    </BackgroundHorizontalBorderBackgroundImage>
                  </div>
                </div>
              ))}
            </div>
            {selectedTeam !== null && (
              <div className="bg-[#fff1b8] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage1>
                  <path d={svgPaths.p1c987e00} fill="var(--fill-0, #725800)" id="Icon" />
                </ContainerBackgroundImage1>
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#725800] text-[14px] text-center">
                  <p className="leading-[20px]">WAIT FOR THE HOST TO START THE GAME</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
