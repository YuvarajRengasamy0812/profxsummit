import React, { useEffect, useMemo, useState } from "react";
import BoothModal from "./BoothModal";
import API from "../api/api";

const palette = {
  floor: "#ffffff",
  wall: "#cfe4ec",
  wallDark: "#6da8bd",
  text: "#101828",
  official: "#a64fd0",
  exclusive: "#2ecc71",
  diamond: "#67cfe3",
  gold: "#ffe39a",
  silver: "#dfe4e8",
  cafe: "#a95f45",
  cocktail: "#7894d6",
  photoWall: "#35342e",
  stage: "#76869d",
  screen: "#3d2aa4",
  reserved: "#343a40",
  pillar: "#ff7c5b",
};

// Horizontal stretch so the plan fills a wide screen while the height stays the same.
const K = 1.5;
const sx = (x) => x * K;
const toPath = (points) => `M${points.map(([x, y]) => `${sx(x)} ${y}`).join(" L")} Z`;

// Room outline (Falcon A + B) with the restroom block cut out of the lower-left corner.
const floorPathD = toPath([
  [110, 46],
  [1264, 46],
  [1264, 1032],
  [944, 1032],
  [768, 864],
  [644, 864],
  [644, 696],
  [372, 696],
  [372, 472],
  [110, 200],
]);
const restroomPathD = toPath([
  [372, 696],
  [644, 696],
  [644, 872],
  [452, 872],
  [372, 792],
]);
const leftWallX = sx(110);
const exitWallX = sx(372);
const restroomRightX = sx(644);
const rightWallX = sx(1264);
const viewWidth = rightWallX + 16;
const boothScale = 0.92;

const reservedPalette = {
  official: "#6d3a7f",
  exclusive: "#27b965",
  diamond: "#4b929d",
  gold: "#a89759",
  silver: "#8f969a",
  standard: "#9f513c",
};

// 3m booth = 132 wide, 4m = 176 wide; depth (3m) = 104
const unit = 132;
const bigUnit = 176;
const depth = 104;

const boothTitles = {
  official: "Official\nSponsor\nBooth",
  exclusive: "Exclusive\nSponsor\nBooth",
  gold: "Gold Booth",
  silver: "Silver Booth",
};

const makeBooth = (boothNo, boothType, x, y, width = unit, height = depth) => ({
  boothNo: String(boothNo),
  boothId: `${boothType.toUpperCase()}-${String(boothNo).padStart(2, "0")}`,
  boothType,
  title: boothTitles[boothType],
  size: boothType === "official" || boothType === "exclusive" ? "4 x 3" : "3 x 3",
  x,
  y,
  width,
  height,
  color: palette[boothType],
});

const topRowX = restroomRightX + 4;
const topRowY = 552;
const gridX = rightWallX - 34 - unit * 4;
const gridY = 712;

const boothList = [
  makeBooth(1, "official", topRowX, topRowY, bigUnit, depth),
  ...[3, 4, 5, 6, 7].map((no, index) => makeBooth(no, "silver", topRowX + bigUnit + index * unit, topRowY)),
  makeBooth(2, "exclusive", topRowX, 712, unit, 146),
  ...[8, 9, 10, 11].map((no, index) => makeBooth(no, index === 0 ? "gold" : "silver", gridX + index * unit, gridY)),
  ...[12, 13, 14, 15].map((no, index) =>
    makeBooth(no, index === 0 ? "gold" : "silver", gridX + index * unit, gridY + depth)
  ),
];

const pillars = [
  [154, 66],
  [1250, 98],
  [1250, 382],
  [1242, 470],
  [358, 428],
  [385, 496],
  [418, 681],
  [640, 702],
  [1242, 622],
  [1250, 705],
  [1250, 966],
  [960, 1014],
  [1198, 1014],
].map(([x, y]) => [sx(x), y]);

function TextLines({
  x,
  y,
  lines,
  fontSize = 10,
  fill = palette.text,
  weight = 700,
  lineHeight = 13,
}) {
  return (
    <text x={x} y={y} textAnchor="middle" fontSize={fontSize} fill={fill} fontWeight={weight}>
      {String(lines)
        .split("\n")
        .map((line, index) => (
          <tspan key={line + index} x={x} dy={index === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
    </text>
  );
}

function LockIcon({ x, y, size = 20 }) {
  const shackleX = x + size * 0.25;
  const shackleY = y + size * 0.08;
  const shackleW = size * 0.5;
  const shackleH = size * 0.42;
  const bodyY = y + size * 0.38;

  return (
    <g>
      <path
        d={`M ${shackleX} ${bodyY} V ${shackleY + shackleH * 0.55} C ${shackleX} ${shackleY} ${shackleX + shackleW} ${shackleY} ${shackleX + shackleW} ${shackleY + shackleH * 0.55} V ${bodyY}`}
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x={x + size * 0.15} y={bodyY} width={size * 0.7} height={size * 0.5} rx="3" fill="#ffffff" />
      <circle cx={x + size * 0.5} cy={bodyY + size * 0.24} r="2" fill={palette.reserved} />
    </g>
  );
}

function FloorBooth({ booth, reservedInfo, onSelect }) {
  const isReserved = Boolean(reservedInfo);
  const [showReservedTip, setShowReservedTip] = useState(false);
  const width = Math.round(booth.width * boothScale);
  const height = Math.round(booth.height * boothScale);
  const x = booth.x + (booth.width - width) / 2;
  const y = booth.y + (booth.height - height) / 2;
  const centerX = x + width / 2;
  const fill = isReserved ? reservedPalette[booth.boothType] || palette.reserved : booth.color;
  const headerFill = isReserved ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.35)";
  const borderColor = isReserved ? "rgba(0,0,0,0.24)" : "rgba(0,0,0,0.22)";
  const tipX = centerX - 70;
  const tipY = Math.max(18, y - 84);

  return (
    <g
      onMouseEnter={() => isReserved && setShowReservedTip(true)}
      onMouseLeave={() => setShowReservedTip(false)}
      onTouchStart={() => isReserved && setShowReservedTip(true)}
      onClick={() => {
        if (isReserved) {
          setShowReservedTip(true);
          return;
        }

        onSelect(booth);
      }}
      style={{ cursor: "pointer" }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="6"
        fill={fill}
        stroke={borderColor}
        strokeWidth="2"
        filter="url(#boothShadow)"
      />
      <rect x={x + 3} y={y + 3} width={width - 6} height="22" rx="5" fill={headerFill} />
      {!isReserved && (
        <text x={centerX} y={y + 18} textAnchor="middle" fontSize="12" fill={palette.text} fontWeight="800">
          Booth No. {booth.boothNo.padStart(2, "0")}
        </text>
      )}

      {isReserved ? (
        <>
          <LockIcon x={centerX - 13} y={y + height / 2 - 26} size={26} />
          <text x={centerX} y={y + height / 2 + 18} textAnchor="middle" fontSize="12" fill="#ffffff" fontWeight="800">
            RESERVED
          </text>
          {showReservedTip && (
            <g pointerEvents="none">
              <rect
                x={tipX}
                y={tipY}
                width="140"
                height="68"
                rx="8"
                fill="#ffffff"
                stroke="#e4e7ec"
                filter="url(#boothTipShadow)"
              />
              <polygon
                points={`${centerX - 8},${tipY + 68} ${centerX + 8},${tipY + 68} ${centerX},${tipY + 78}`}
                fill="#ffffff"
              />
              {reservedInfo?.logo ? (
                <image
                  href={reservedInfo.logo}
                  x={tipX + 18}
                  y={tipY + 12}
                  width="104"
                  height="30"
                  preserveAspectRatio="xMidYMid meet"
                />
              ) : (
                <text x={centerX} y={tipY + 31} textAnchor="middle" fontSize="12" fill={palette.text} fontWeight="800">
                  Reserved
                </text>
              )}
              <text x={centerX} y={tipY + 55} textAnchor="middle" fontSize="10" fill="#344054" fontWeight="700">
                {reservedInfo?.companyName || "Reserved Company"}
              </text>
            </g>
          )}
        </>
      ) : (
        <>
          <TextLines
            x={centerX}
            y={y + height / 2 - (booth.title.includes("\n") ? 2 : -4)}
            lines={booth.title}
            fontSize={booth.title.includes("\n") ? 9 : 10}
            lineHeight={13}
          />
          <text x={centerX} y={y + height - 9} textAnchor="middle" fontSize="12" fill={palette.text}>
            {booth.size}
          </text>
        </>
      )}
    </g>
  );
}

function SeatBlock({ x, y, rows = 5, cols = 16, colGap = 20, rowGap = 22 }) {
  const seats = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      seats.push({ x: x + col * colGap, y: y + row * rowGap, key: `${row}-${col}` });
    }
  }

  return (
    <g>
      {seats.map((seat) => (
        <g key={seat.key} transform={`rotate(90 ${seat.x + 5} ${seat.y + 8})`}>
          <rect x={seat.x} y={seat.y} width="10" height="13" rx="4" fill="#ffffff" stroke="#6d747b" strokeWidth="2" />
          <rect x={seat.x - 2} y={seat.y + 10} width="4" height="6" rx="1" fill="#6d747b" />
          <rect x={seat.x + 8} y={seat.y + 10} width="4" height="6" rx="1" fill="#6d747b" />
        </g>
      ))}
    </g>
  );
}

function RoundTable({ x, y }) {
  return (
    <g>
      {[0, 90, 180, 270].map((angle) => (
        <ellipse
          key={angle}
          cx={x}
          cy={y - 17}
          rx="5"
          ry="8"
          fill="#c7b09e"
          transform={`rotate(${angle}, ${x}, ${y})`}
        />
      ))}
      <circle cx={x} cy={y} r="12" fill="#e8d1b6" stroke="#b9a08c" strokeWidth="1" />
    </g>
  );
}

function DirectionLabel({ x, y, label, color = "#5b7cff" }) {
  return (
    <text
      x={x}
      y={y}
      fontSize="12"
      fill={color}
      fontWeight="800"
      textAnchor="middle"
      transform={`rotate(90, ${x}, ${y})`}
    >
      {label}
    </text>
  );
}

function ArrowPair({ x, y, direction = "right" }) {
  const rotate = direction === "left" ? 180 : 0;

  return (
    <g transform={`rotate(${rotate}, ${x}, ${y})`}>
      {[0, 18].map((offset) => (
        <path
          key={offset}
          d={`M ${x - 28} ${y + offset} H ${x} M ${x - 8} ${y + offset - 6} L ${x} ${y + offset} L ${x - 8} ${y + offset + 6}`}
          stroke="#111827"
          strokeWidth="3"
          fill="none"
        />
      ))}
    </g>
  );
}

function EntranceDoorDetail() {
  return (
    <g>
      {/* door opening in the left wall */}
      <g transform={`translate(${leftWallX - 110} 0)`}>
      <rect x="103" y="98" width="14" height="62" fill={palette.floor} />
      <path d="M110 98 C86 98 86 128 110 128" stroke={palette.wall} strokeWidth="3" fill="none" />
      <path d="M110 130 C86 130 86 160 110 160" stroke={palette.wall} strokeWidth="3" fill="none" />
      <rect x="104" y="90" width="12" height="10" fill={palette.wall} />
      <rect x="104" y="158" width="12" height="10" fill={palette.wall} />
      <rect x="62" y="52" width="18" height="18" fill={palette.pillar} />
      </g>
    </g>
  );
}

function ToiletIcon({ x, y, color = palette.pillar }) {
  return (
    <g fill={color}>
      <circle cx={x} cy={y} r="4" />
      <rect x={x - 3} y={y + 6} width="6" height="16" rx="2" />
      <rect x={x - 8} y={y + 10} width="3" height="12" rx="1.5" />
      <rect x={x + 5} y={y + 10} width="3" height="12" rx="1.5" />
      <rect x={x - 5} y={y + 22} width="4" height="12" rx="1.5" />
      <rect x={x + 1} y={y + 22} width="4" height="12" rx="1.5" />
    </g>
  );
}

function AmenityBlock({ x, y, width, height, label, color }) {
  const [showTip, setShowTip] = useState(false);
  const tipWidth = 160;
  const tipHeight = 58;
  const tipX = x + width / 2 - tipWidth / 2 + 40;
  const tipY = y - tipHeight - 14;

  return (
    <g
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onClick={() => setShowTip((visible) => !visible)}
      onTouchStart={() => setShowTip(true)}
      style={{ cursor: "pointer" }}
    >
      {showTip && (
        <g pointerEvents="none">
          <rect
            x={tipX}
            y={tipY}
            width={tipWidth}
            height={tipHeight}
            rx="8"
            fill="#ffffff"
            stroke="#e4e7ec"
            filter="url(#boothTipShadow)"
          />
          <polygon
            points={`${x + width / 2 - 10},${tipY + tipHeight} ${x + width / 2 + 10},${tipY + tipHeight} ${x + width / 2},${tipY + tipHeight + 10}`}
            fill="#ffffff"
          />
          <text x={tipX + tipWidth / 2} y={tipY + 35} textAnchor="middle" fontSize="14" fill={palette.text} fontWeight="700">
            {label.replace("\n", " ")}
          </text>
        </g>
      )}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="7"
        fill={color}
        stroke="rgba(0,0,0,0.22)"
        strokeWidth="2"
        filter="url(#boothShadow)"
      />
      <rect x={x + 3} y={y + 4} width={width - 6} height="22" rx="6" fill="rgba(255,255,255,0.2)" />
      <TextLines
        x={x + width / 2}
        y={y + height / 2 - (label.includes("\n") ? 6 : 0)}
        lines={label}
        fontSize={label.includes("\n") ? 11 : 13}
        fill="#ffffff"
        lineHeight={13}
      />
    </g>
  );
}

function ExitDoorDetail() {
  return (
    <g>
      {/* exit opening in the left wall of Falcon B */}
      <g transform={`translate(${exitWallX - 372} 0)`}>
      <rect x="365" y="592" width="14" height="58" fill={palette.floor} />
      <path d="M372 592 C398 592 398 620 372 620" stroke={palette.wall} strokeWidth="3" fill="none" />
      <path d="M372 622 C398 622 398 650 372 650" stroke={palette.wall} strokeWidth="3" fill="none" />
      <rect x="338" y="590" width="18" height="62" fill={palette.wall} />
      </g>
    </g>
  );
}

function RestroomBlock() {
  return (
    <g>
      <path d={restroomPathD} fill={palette.floor} stroke={palette.wall} strokeWidth="10" />
      <path
        d={`M${sx(436)} 742 H${sx(600)} M${sx(436)} 734 V752 M${sx(600)} 734 V752`}
        stroke={palette.wall}
        strokeWidth="5"
        fill="none"
      />
      <path d={`M${sx(518)} 742 V866`} stroke={palette.wall} strokeWidth="5" />
      <ToiletIcon x={sx(476)} y={780} />
      <ToiletIcon x={sx(580)} y={780} />
      <text x={sx(476)} y="834" textAnchor="middle" fontSize="12" fill={palette.pillar} fontWeight="800">
        Women
      </text>
      <text x={sx(580)} y="834" textAnchor="middle" fontSize="12" fill={palette.pillar} fontWeight="800">
        Men
      </text>
    </g>
  );
}

function SideDoors() {
  return (
    <g transform={`translate(${rightWallX - 1264} 0)`}>
      {[416, 568].map((y) => (
        <g key={y}>
          <rect x="1257" y={y} width="14" height="104" fill={palette.floor} />
          <path d={`M1264 ${y} C1238 ${y} 1238 ${y + 34} 1264 ${y + 34}`} stroke={palette.wall} strokeWidth="3" fill="none" />
          <rect x="1260" y={y + 36} width="12" height="32" fill={palette.wall} />
          <path d={`M1264 ${y + 70} C1238 ${y + 70} 1238 ${y + 104} 1264 ${y + 104}`} stroke={palette.wall} strokeWidth="3" fill="none" />
        </g>
      ))}
    </g>
  );
}

function Stage() {
  return (
    <g transform={`translate(${rightWallX - 112} 145)`}>
      <rect x="-14" y="124" width="14" height="50" fill="#5f6b7d" stroke="#111827" strokeWidth="1" />
      <rect x="0" y="0" width="100" height="298" fill={palette.stage} stroke="#111827" strokeWidth="1.5" />
      <TextLines x={38} y={118} lines={"Speaker,\nAwards\n& League"} fontSize={13} fill="#ffffff" lineHeight={15} />
      <text x="38" y="164" textAnchor="middle" fontSize="13" fill="#ffffff">Stage</text>
      <text x="38" y="188" textAnchor="middle" fontSize="13" fill="#ffffff">10 x 3</text>

      <rect x="76" y="10" width="20" height="48" fill={palette.screen} stroke="#111827" />
      <rect x="76" y="74" width="20" height="150" fill={palette.screen} stroke="#111827" />
      <rect x="76" y="240" width="20" height="48" fill={palette.screen} stroke="#111827" />
      <text x="86" y="34" textAnchor="middle" fontSize="6" fill="#ffffff" transform="rotate(-90 86 34)">
        <tspan x="86" dy="-2">Side Screen</tspan>
        <tspan x="86" dy="7">1.5w x 2.5h</tspan>
      </text>
      <text x="89" y="149" textAnchor="middle" fontSize="9" fill="#ffffff" transform="rotate(-90 89 149)">
        Main Screen 6w x 2.5h
      </text>
      <text x="86" y="264" textAnchor="middle" fontSize="6" fill="#ffffff" transform="rotate(-90 86 264)">
        <tspan x="86" dy="-2">Side Screen</tspan>
        <tspan x="86" dy="7">1.5w x 2.5h</tspan>
      </text>
    </g>
  );
}

const FloorPlanDubai = () => {
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [reservedBooths, setReservedBooths] = useState([]);

  useEffect(() => {
    API.get("floorplanList")
      .then((res) => {
        const tickets = res.data?.details?.tickets?.data || [];
        const reserved = tickets
          .filter((ticket) => ticket.boothno)
          .map((ticket) => ({
            boothNo: String(ticket.boothno),
            companyName: ticket.company || "",
            logo: ticket.company_logo || "assets/images/booth-reserved/v-process.png",
            url: ticket.company_url || "#",
            title: ticket.boothtitle || "Reserved Booth",
            size: ticket.boothsize || "",
            approved: Boolean(ticket.company_logo),
          }));

        setReservedBooths(reserved);
      })
      .catch((err) => {
        console.error("Error fetching floorplan:", err);
      });
  }, []);

  const reservedByBoothNo = useMemo(() => {
    return reservedBooths.reduce((map, booth) => {
      map[String(booth.boothNo)] = booth;
      return map;
    }, {});
  }, [reservedBooths]);

  const handleReserve = ({ company }) => {
    if (!selectedBooth) return;

    setReservedBooths((prev) => [
      ...prev,
      {
        boothNo: selectedBooth.boothNo,
        companyName: company || "Reserved",
        logo: "assets/images/booth-reserved/v-process.png",
        url: "#",
        title: selectedBooth.title,
        size: selectedBooth.size,
        approved: false,
      },
    ]);
  };

  return (
    <>
      <div className="floor-plan-section py-2">
        <div className="floor-plan-heading text-center mb-2">
          <p className="mb-2 pink" style={{ fontSize: "20px", fontWeight: 500 }}>
            Floor Plan
          </p>
          <h2 className="mb-3" style={{ fontSize: "48px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "0" }}>
            PROFX SUMMIT <span className="pink">DUBAI 2026</span>
          </h2>
          <p className="mx-auto mb-0" style={{ maxWidth: "860px", fontSize: "21px", lineHeight: 1.25, color: "#5f6673" }}>
            Choose from 4 powerful tiers - designed for trend explorers, skill builders, networkers, and deal-closers.
          </p>
        </div>

        <div
          className="mx-auto bg-white floor-plan-dubai"
          style={{
            width: "100%",
            maxWidth: "calc(100vw - 8px)",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            border: "0",
            borderRadius: "0",
            padding: "0",
          }}
        >
          <svg
            viewBox={`-6 30 ${viewWidth + 6} 1015`}
            width="100%"
            height="auto"
            role="img"
            aria-label="Updated ProFx Summit Dubai 2026 floor plan"
            preserveAspectRatio="xMidYMin meet"
            style={{ display: "block", background: "#ffffff" }}
          >
            <rect x="-10" y="0" width={viewWidth + 20} height="1060" fill="#ffffff" />
            <defs>
              <clipPath id="floor-room-clip">
                <path d={floorPathD} />
              </clipPath>
              <filter id="boothShadow" x="-12%" y="-12%" width="124%" height="124%">
                <feDropShadow dx="0" dy="2" stdDeviation="1.2" floodColor="#101828" floodOpacity="0.18" />
              </filter>
              <filter id="boothTipShadow" x="-18%" y="-18%" width="136%" height="136%">
                <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#101828" floodOpacity="0.18" />
              </filter>
            </defs>

            {/* Room */}
            <path d={floorPathD} fill={palette.floor} stroke={palette.wall} strokeWidth="10" strokeLinejoin="miter" />
            <path d={`M${leftWallX + 40} 46 H${rightWallX}`} stroke={palette.wall} strokeWidth="16" />
            <path d={`M${exitWallX} 547 H${rightWallX}`} stroke={palette.wallDark} strokeWidth="4" />
            <RestroomBlock />
            <EntranceDoorDetail />
            <ExitDoorDetail />
            <SideDoors />

            {pillars.map(([x, y], index) => (
              <rect
                key={`pillar-${index}`}
                x={x - 5.5}
                y={y - 5.5}
                width="11"
                height="11"
                fill={palette.pillar}
                transform={`rotate(45 ${x} ${y})`}
              />
            ))}

            <DirectionLabel x={leftWallX - 46} y="129" label="ENTRANCE" />
            <ArrowPair x={leftWallX - 66} y="118" />
            <DirectionLabel x={exitWallX - 25} y="621" label="EXIT" color={palette.text} />
            <ArrowPair x={exitWallX - 44} y="610" direction="left" />

            {/* Audience seating: 6 blocks x 5 rows x 18 seats */}
            <g clipPath="url(#floor-room-clip)">
              {[83, 235, 387].map((y) => (
                <React.Fragment key={y}>
                  <SeatBlock x={630} y={y} cols={18} colGap={28} />
                  <SeatBlock x={1196} y={y} cols={18} colGap={28} />
                </React.Fragment>
              ))}
            </g>

            <Stage />

            {/* Photo wall along the diagonal wall, outside the room */}
            <g transform="translate(278 325) rotate(34.7)">
              <rect x="-62" y="-6" width="124" height="56" fill="#f1f1f1" />
              <rect x="-62" y="-32" width="124" height="26" fill={palette.photoWall} />
              <text x="0" y="-14" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="800">
                Photo Wall
              </text>
            </g>

            <AmenityBlock x={0} y={405} width={90} height={110} label="Cafe" color={palette.cafe} />
            <AmenityBlock x={0} y={590} width={90} height={110} label={"Cocktail\nLounge"} color={palette.cocktail} />
            <RoundTable x={sx(178)} y={470} />
            <RoundTable x={sx(264)} y={470} />
            <RoundTable x={sx(178)} y={668} />
            <RoundTable x={sx(264)} y={668} />
            <RoundTable x={sx(178)} y={771} />
            <RoundTable x={sx(264)} y={771} />

            {boothList.map((booth) => (
              <FloorBooth
                key={booth.boothId}
                booth={booth}
                reservedInfo={reservedByBoothNo[booth.boothNo]}
                onSelect={setSelectedBooth}
              />
            ))}
          </svg>
        </div>
      </div>

      {selectedBooth && (
        <BoothModal
          booth={selectedBooth}
          onClose={() => setSelectedBooth(null)}
          onReserve={handleReserve}
        />
      )}
    </>
  );
};

export default FloorPlanDubai;
