import React, { useEffect, useMemo, useState } from "react";
import BoothModal from "./BoothModal";
import API from "../api/api";

const palette = {
  floor: "#ffffff",
  wall: "#cfe4ec",
  wallDark: "#8fb7c8",
  text: "#101828",
  official: "#2ecc71",
  exclusive: "#6d3a7f",
  diamond: "#67cfe3",
  gold: "#ffe39a",
  silver: "#dfe4e8",
  cafe: "#a95f45",
  cocktail: "#7894d6",
  photoWall: "#35342e",
  stage: "#76869d",
  screen: "#3d2aa4",
  reserved: "#343a40",
};

const floorPathD =
  "M260 20 H1268 V780 L1132 842 L962 746 H610 L512 648 V578 H492 V448 L250 206 V92 H260 Z";
const boothScale = 0.86;

const reservedPalette = {
  official: "#27b965",
  exclusive: "#6d3a7f",
  diamond: "#4b929d",
  gold: "#a89759",
  silver: "#8f969a",
  standard: "#9f513c",
};

const boothList = [
  {
    boothNo: "1",
    boothId: "OFFICIAL-01",
    boothType: "official",
    title: "Official\nSponsor\nBooth",
    size: "4 x 3",
    x: 710,
    y: 468,
    width: 105,
    height: 80,
    color: palette.official,
  },
  {
    boothNo: "3",
    boothId: "SILVER-03",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 815,
    y: 468,
    width: 80,
    height: 80,
    color: palette.silver,
  },
  {
    boothNo: "4",
    boothId: "SILVER-04",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 895,
    y: 468,
    width: 80,
    height: 80,
    color: palette.silver,
  },
  {
    boothNo: "5",
    boothId: "SILVER-05",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 975,
    y: 468,
    width: 80,
    height: 80,
    color: palette.silver,
  },
  {
    boothNo: "6",
    boothId: "SILVER-06",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1055,
    y: 468,
    width: 80,
    height: 80,
    color: palette.silver,
  },
  {
    boothNo: "7",
    boothId: "SILVER-07",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1135,
    y: 468,
    width: 80,
    height: 80,
    color: palette.silver,
  },
  {
    boothNo: "2",
    boothId: "EXCLUSIVE-02",
    boothType: "exclusive",
    title: "Exclusive\nSponsor\nBooth",
    size: "4 x 3",
    x: 820,
    y: 566,
    width: 80,
    height: 100,
    color: palette.exclusive,
  },
  {
    boothNo: "8",
    boothId: "GOLD-08",
    boothType: "gold",
    title: "Gold Booth",
    size: "3 x 3",
    x: 930,
    y: 566,
    width: 80,
    height: 72,
    color: palette.gold,
  },
  {
    boothNo: "9",
    boothId: "SILVER-09",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1010,
    y: 566,
    width: 80,
    height: 72,
    color: palette.silver,
  },
  {
    boothNo: "10",
    boothId: "SILVER-10",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1090,
    y: 566,
    width: 80,
    height: 72,
    color: palette.silver,
  },
  {
    boothNo: "11",
    boothId: "SILVER-11",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1170,
    y: 566,
    width: 80,
    height: 72,
    color: palette.silver,
  },
  {
    boothNo: "12",
    boothId: "GOLD-12",
    boothType: "gold",
    title: "Gold Booth",
    size: "3 x 3",
    x: 930,
    y: 638,
    width: 80,
    height: 72,
    color: palette.gold,
  },
  {
    boothNo: "13",
    boothId: "SILVER-13",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1010,
    y: 638,
    width: 80,
    height: 72,
    color: palette.silver,
  },
  {
    boothNo: "14",
    boothId: "SILVER-14",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1090,
    y: 638,
    width: 80,
    height: 72,
    color: palette.silver,
  },
  {
    boothNo: "15",
    boothId: "SILVER-15",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1170,
    y: 638,
    width: 80,
    height: 72,
    color: palette.silver,
  },
  {
    boothNo: "16",
    boothId: "DIAMOND-16",
    boothType: "diamond",
    title: "Diamond\nSponsor\nBooth",
    size: "4 x 3",
    x: 1010,
    y: 710,
    width: 80,
    height: 70,
    color: palette.diamond,
  },
  {
    boothNo: "17",
    boothId: "SILVER-17",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1090,
    y: 710,
    width: 80,
    height: 70,
    color: palette.silver,
  },
  {
    boothNo: "18",
    boothId: "SILVER-18",
    boothType: "silver",
    title: "Silver Booth",
    size: "3 x 3",
    x: 1170,
    y: 710,
    width: 80,
    height: 70,
    color: palette.silver,
  },
];

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
      <rect x={x + 2} y={y + 3} width={width - 4} height="18" rx="5" fill={headerFill} />
      {!isReserved && (
        <text x={centerX} y={y + 15} textAnchor="middle" fontSize="7" fill={palette.text} fontWeight="800">
          Booth no: {booth.boothNo}
        </text>
      )}

      {isReserved ? (
        <>
          <LockIcon x={centerX - 9} y={y + height / 2 - 20} size={18} />
          <text x={centerX} y={y + height / 2 + 14} textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="800">
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
            y={y + height / 2 - 4}
            lines={booth.title}
            fontSize={booth.title.includes("\n") ? 8 : 9}
            lineHeight={10}
          />
          <text x={centerX} y={y + height - 10} textAnchor="middle" fontSize="8" fill={palette.text}>
            {booth.size}
          </text>
        </>
      )}
    </g>
  );
}

function SeatBlock({ x, y, rows = 5, cols = 15 }) {
  const seats = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      seats.push({ x: x + col * 20, y: y + row * 20, key: `${row}-${col}` });
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

function DirectionLabel({ x, y, label }) {
  return (
    <text x={x} y={y} fontSize="12" fill="#5b7cff" fontWeight="800" transform={`rotate(-90, ${x}, ${y})`}>
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
      <path d="M250 92 H212 V150 H250" fill="#ffffff" stroke={palette.wall} strokeWidth="8" />
      <path d="M250 102 C222 102 222 122 250 122" stroke={palette.wall} strokeWidth="3" fill="none" />
      <path d="M250 122 C222 122 222 142 250 142" stroke={palette.wall} strokeWidth="3" fill="none" />
      <rect x="244" y="82" width="16" height="18" fill={palette.wall} />
      <rect x="244" y="150" width="16" height="18" fill={palette.wall} />
    </g>
  );
}

function ToiletIcon({ x, y, color = "#ff7c5b" }) {
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
  const tipX = x + width / 2 - tipWidth / 2;
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
          <text x={x + width / 2} y={tipY + 35} textAnchor="middle" fontSize="14" fill={palette.text} fontWeight="700">
            {label}
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
      <path
        d="M492 448 H795 V648 H610 L512 550 V448 Z"
        fill="#ffffff"
        stroke="none"
      />
      <path
        d="M512 578 H795 V648 H610 L512 550 Z"
        fill="#ffffff"
        stroke={palette.wall}
        strokeWidth="8"
      />
      <path d="M492 452 V578" stroke={palette.wall} strokeWidth="8" fill="none" />
      <path d="M492 520 H560" stroke={palette.wall} strokeWidth="8" fill="none" />
      <path d="M492 472 C526 472 526 498 492 498" stroke={palette.wall} strokeWidth="3" fill="none" />
      <path d="M492 498 C526 498 526 524 492 524" stroke={palette.wall} strokeWidth="3" fill="none" />
      <rect x="492" y="448" width="18" height="22" fill={palette.wall} />
      <rect x="492" y="572" width="18" height="26" fill={palette.wall} />

      <path d="M598 640 H760" stroke={palette.wall} strokeWidth="6" fill="none" />
      <path d="M600 662 V746 M688 662 V746 M760 662 V746" stroke={palette.wall} strokeWidth="5" />
      <path d="M600 662 H760" stroke={palette.wall} strokeWidth="5" fill="none" />
      <path d="M585 662 H775" stroke={palette.wall} strokeWidth="5" fill="none" />
      <ToiletIcon x={646} y={698} />
      <ToiletIcon x={724} y={698} />
      <text x="646" y="740" textAnchor="middle" fontSize="10" fill="#ff7c5b" fontWeight="800">
        Women
      </text>
      <text x="724" y="740" textAnchor="middle" fontSize="10" fill="#ff7c5b" fontWeight="800">
        Men
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
      <div className="floor-plan-section py-4">
        <div className="floor-plan-heading text-center mb-5">
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
            maxWidth: "1760px",
            overflowX: "auto",
            backgroundColor: "#ffffff",
            border: "0",
            borderRadius: "0",
            padding: "0",
          }}
        >
          <svg
            viewBox="55 0 1285 845"
            width="100%"
            height="auto"
            role="img"
            aria-label="Updated ProFx Summit Dubai 2026 floor plan"
            preserveAspectRatio="xMidYMin meet"
            style={{ minWidth: "1280px", display: "block", background: "#ffffff" }}
          >
            <rect x="0" y="0" width="1360" height="930" fill="#ffffff" />
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

            <path
              d={floorPathD}
              fill="#ffffff"
              stroke={palette.wall}
              strokeWidth="10"
            />
            <g clipPath="url(#floor-room-clip)">
              <rect x="55" y="0" width="1285" height="845" fill="#ffffff" />
            </g>
            <path d="M300 20 H1268" stroke={palette.wall} strokeWidth="18" />
            <EntranceDoorDetail />
            <path d="M250 206 L492 448" fill="none" stroke={palette.wall} strokeWidth="8" />
            <path d="M492 448 H1270" stroke={palette.wallDark} strokeWidth="4" />
            <ExitDoorDetail />
            <rect x="470" y="458" width="34" height="9" fill="#6da8bd" />
            <rect x="562" y="458" width="64" height="9" fill="#6da8bd" />

            {[310, 1208, 1266, 480, 500, 780, 1260, 1267, 990].map((x, index) => {
              const y = [30, 62, 368, 350, 410, 625, 282, 617, 790][index];
              return (
                <rect
                  key={`marker-${index}`}
                  x={x}
                  y={y}
                  width="11"
                  height="11"
                  fill="#ff7c5b"
                  transform={`rotate(45 ${x + 5.5} ${y + 5.5})`}
                />
              );
            })}

            <DirectionLabel x="230" y="112" label="ENTRANCE" />
            <ArrowPair x="210" y="85" />
            <DirectionLabel x="472" y="527" label="EXIT" />
            <ArrowPair x="470" y="509" direction="left" />

            <g clipPath="url(#floor-room-clip)">
              <g transform="translate(330 58)">
                <SeatBlock x={0} y={0} rows={5} cols={17} />
                <SeatBlock x={370} y={0} rows={5} cols={24} />
                <SeatBlock x={0} y={120} rows={5} cols={17} />
                <SeatBlock x={370} y={120} rows={5} cols={24} />
                <SeatBlock x={118} y={240} rows={5} cols={13} />
                <SeatBlock x={370} y={240} rows={5} cols={24} />
              </g>
            </g>
            <path
              d={floorPathD}
              fill="none"
              stroke={palette.wall}
              strokeWidth="10"
              pointerEvents="none"
            />
            <path
              d="M492 448 H1270"
              stroke={palette.wallDark}
              strokeWidth="4"
              pointerEvents="none"
            />
            <EntranceDoorDetail />
            <ExitDoorDetail />

            <g transform="translate(1210 105)">
              <rect x="0" y="0" width="82" height="300" fill={palette.stage} stroke="#111827" strokeWidth="1.5" />
              <TextLines x={41} y={120} lines={"Speaker\nAwards\n& League\nStage"} fontSize={12} fill="#ffffff" lineHeight={14} />
              <text x="41" y="185" textAnchor="middle" fontSize="11" fill="#ffffff">10 x 3</text>
              <rect x="66" y="12" width="18" height="110" fill={palette.screen} stroke="#111827" />
              <rect x="66" y="134" width="18" height="110" fill={palette.screen} stroke="#111827" />
              <text x="78" y="79" textAnchor="middle" fontSize="7" fill="#ffffff" transform="rotate(-90 78 79)">
                Side Screen 5W x 2.5H
              </text>
              <text x="78" y="190" textAnchor="middle" fontSize="8" fill="#ffffff" transform="rotate(-90 78 190)">
                Main Screen 6W x 2.5H
              </text>
            </g>

            <g transform="rotate(45 270 286)">
              <rect x="214" y="269" width="112" height="70" fill="#f3f3f3" />
              <rect x="214" y="269" width="112" height="34" fill={palette.photoWall} />
              <text x="270" y="291" textAnchor="middle" fontSize="15" fill="#ffffff" fontWeight="800">
                Photo Wall
              </text>
            </g>

            <AmenityBlock x={150} y={345} width={72} height={92} label="Cafe" color="#e91e63" />
            <AmenityBlock x={150} y={522} width={72} height={92} label={"Cocktail\nLounge"} color="#6575dc" />
            <RoundTable x="310" y="392" />
            <RoundTable x="395" y="392" />
            <RoundTable x="310" y="575" />
            <RoundTable x="395" y="575" />
            <RoundTable x="310" y="675" />
            <RoundTable x="395" y="675" />

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
