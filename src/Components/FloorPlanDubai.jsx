import React from "react";
import { Users, Camera, Coffee, Mic2, Mars, Venus } from "lucide-react";
import Booth from "./Booth";

const FloorPlanDubai = () => {
  // Layout constants based on grid
  const gridSize = 30;
  const startX = 50;
  const startY = 50;
  // Arrow constants
  const dx = -60;
  const dy = 18;
  const up = -10;



  // Colors matching the reference PDF
  const colors = {
    official: "#2ecc71",      // Green
    exclusive: "#9b59b6",     // Purple  
    diamond: "#6fd3e7",       // Cyan/Light blue
    gold: "#f5d98e",          // Light gold/beige
    silver: "#d4d8dc",        // Light gray
    standard: "#d97556",      // Orange/coral
    speakerHall: "#a855b7",   // Purple/magenta
    networking: "#2c2f7c",    // Dark blue/navy
    cafe: "#8b5a2b",          // Brown
    cocktail: "#6c7bd9",      // Blue
    photoWall: "#6c7a89",     // Gray
    backdrop: "#d4d8dc87",      // Light gray
    ledWall: "#e74c3c"        // Red
  };

  return (
    <div className="py-3">

      {/* Section Title  */}
      <div className="col-lg-6 mx-auto">
        <div className="title-content text-lg-center mb-4">
          <p className="mb-1 pink">
            Floor Plan
          </p>
          <h2 className="mb-1">
            PROFX SUMMIT<span className="pink"> <b>DUBAI 2026</b></span>
          </h2>
          <p className="m-0">
            Choose from 4 powerful tiers - designed for trend explorers, skill builders, networkers, and deal-closers.
          </p>
        </div>
      </div>

      {/* Floor Plan Container */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-auto">
        <svg
          viewBox="0 0 1220 1000"
          width="100%"
          style={{
            background: "#e8f4fc",
            minHeight: "700px"
          }}
        >
          {/* Grid Pattern Background */}
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#b8d4e8" strokeWidth="0.5" />
            </pattern>
            <pattern id="gridDense" width="15" height="15" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#c8d8e8" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="1220" height="1100" fill="url(#grid)" />

          {/* Inner fine grid for main floor area */}
          <rect x={startX + 90} y={startY} width="1020" height="900" fill="url(#gridDense)" />

          {/* Floor Border */}
          <rect
            x={startX + 90}
            y={startY}
            width={1020}
            height={900}
            fill="none"
            stroke="#7eb8d8"
            strokeWidth="2"
            strokeDasharray="8 4"
          />

          {/* ===== ENTRANCE - Top Left ===== */}
          <g>
            <rect x={startX + 90} y={startY + 20} width={4} height={50} fill="#ef4444" />
            <text x={startX + 63} y={startY + 60} fontSize="9" fill="#333" fontWeight="600" transform={`rotate(-90, ${startX + 75}, ${startY + 55})`}>
              ENTRANCE
            </text>
            {/* <path d={`M ${startX + 105} ${startY + 45} L ${startX + 125} ${startY + 45} M ${startX + 120} ${startY + 40} L ${startX + 125} ${startY + 45} L ${startX + 120} ${startY + 50}`} stroke="#555" strokeWidth="1.5" fill="none" /> */}

            {/* Top arrow */}
            <path
              d={`
                  M ${startX + 100 + dx} ${startY + 45 + up}
                  L ${startX + 120 + dx} ${startY + 45 + up}
                  M ${startX + 115 + dx} ${startY + 40 + up}
                  L ${startX + 120 + dx} ${startY + 45 + up}
                  L ${startX + 115 + dx} ${startY + 50 + up}
                `}
              stroke="#555"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Bottom arrow */}
            <path
              d={`
                  M ${startX + 100 + dx} ${startY + 45 + dy + up}
                  L ${startX + 120 + dx} ${startY + 45 + dy + up}
                  M ${startX + 115 + dx} ${startY + 40 + dy + up}
                  L ${startX + 120 + dx} ${startY + 45 + dy + up}
                  L ${startX + 115 + dx} ${startY + 50 + dy + up}
                `}
              stroke="#555"
              strokeWidth="1.5"
              fill="none"
            />
          </g>
          {/* Squared corner */}
          <rect
            x={startX + 70}
            y={startY + 0}
            width={16}
            height={16}
            fill="#e74c3c"
            rx={2}   // optional: slightly rounded corners
          />


          {/* Corner diamonds */}
          <polygon points={`${startX + 120},${startY + 5} ${startX + 128},${startY + 13} ${startX + 120},${startY + 21} ${startX + 112},${startY + 13}`} fill="#e74c3c" />
          {/* <polygon points={`${startX + 175},${startY + 15} ${startX + 183},${startY + 23} ${startX + 175},${startY + 31} ${startX + 167},${startY + 23}`} fill="#e74c3c" /> */}

          {/* ===== TOP ROW ===== */}

          {/* Official Sponsor */}
          <Booth
            x={startX + 140}
            y={startY + 20}
            width={120}
            height={90}
            color={colors.official}
            title="Official Sponsor"
            subtitle="4 x 3"
            textColor="#ffffff"
            fontSize={11}
          />

          {/* Silver Booths Row - 9 booths */}
          {Array.from({ length: 9 }).map((_, i) => (
            <Booth
              key={`silver-top-${i}`}
              x={startX + 280 + i * 88}
              y={startY + 20}
              width={82}
              height={60}
              color={colors.silver}
              title="Silver Booth"
              subtitle="3 x 2"
              fontSize={9}
            />
          ))}

          {/* LED Exposure Wall - Top Right */}
          <g>
            {/* LED Wall Box */}
            <rect
              x={startX + 1070}
              y={startY + 100}
              width={30}
              height={90}
              fill={colors.ledWall}
              rx={3}
            />

            {/* LED Exposure Wall text */}
            <text
              x={startX + 1005}
              y={startY + 60}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fill="#fff"
              fontWeight="600"
              transform={`rotate(-90, ${startX + 1085}, ${startY + 65})`}
            >
              LED Exposure Wall
            </text>

            {/* Size text */}
            <text
              x={startX + 1025}
              y={startY + 90}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.9)"
              transform={`rotate(-90, ${startX + 1085}, ${startY + 85})`}
            >
              2.5w × 3h
            </text>
          </g>


          {/* Corner diamond - Top Right */}
          {/* <polygon points={`${startX + 1080},${startY + 15} ${startX + 1088},${startY + 23} ${startX + 1080},${startY + 31} ${startX + 1072},${startY + 23}`} fill="#e74c3c" /> */}

          <polygon
            points={`
              ${startX + 1086},${startY + 53}
              ${startX + 1094},${startY + 61}
              ${startX + 1086},${startY + 69}
              ${startX + 1078},${startY + 61}
            `}
            fill="#e74c3c"
          />


          {/* ===== SECOND SECTION ===== */}

          {/* Exclusive Sponsor */}
          <Booth
            x={startX + 140}
            y={startY + 140}
            width={120}
            height={90}
            color={colors.exclusive}
            title="Exclusive Sponsor"
            subtitle="4 x 3"
            textColor="#ffffff"
            fontSize={11}
          />

          {/* Photo Wall - Diagonal */}
          <g>
            {/* Photo Wall rectangle */}
            <rect
              x={startX + 0}
              y={startY + 215}
              width={80}
              height={25}
              fill={colors.photoWall}
              rx={4}
              transform={`rotate(90, ${startX + 40}, ${startY + 262})`} // pivot at rect center
            />

            {/* Photo Wall text */}
            <text
              x={startX + 40}            // center of rect before rotation
              y={startY + 227}           // center of rect before rotation
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="600"
              transform={`rotate(90, ${startX + 40}, ${startY + 262})`}
            >
              Photo Wall
            </text>
          </g>


          {/* Corner diamond */}
          {/* <polygon points={`${startX + 290},${startY + 290} ${startX + 298},${startY + 298} ${startX + 290},${startY + 306} ${startX + 282},${startY + 298}`} fill="#e74c3c" /> */}
          <polygon
            points={`
              ${startX + 230 - 120},${startY + 665} 
              ${startX + 238 - 120},${startY + 673} 
              ${startX + 230 - 120},${startY + 681} 
              ${startX + 222 - 120},${startY + 673}
            `}
            fill="#e74c3c"
          />

          {/* Gold Booths - 2x2 grid (4 booths) */}
          {[0, 1, 2, 3].map((i) => (
            <Booth
              key={`gold-grid-${i}`}
              x={startX + 280 + (i % 2) * 130}
              y={startY + 140 + Math.floor(i / 2) * 95}
              width={120}
              height={85}
              color={colors.gold}
              title="Gold Booth"
              subtitle="4 x 3"
              fontSize={11}
            />
          ))}

          {/* Gold Booths - 2 vertical */}
          {[0, 1].map((i) => (
            <Booth
              key={`gold-vert-${i}`}
              x={startX + 560}
              y={startY + 140 + i * 95}
              width={120}
              height={85}
              color={colors.gold}
              title="Gold Booth"
              subtitle="4 x 3"
              fontSize={11}
            />
          ))}

          {/* Silver Booths - 2 vertical */}
          {[0, 1].map((i) => (
            <Booth
              key={`silver-vert-${i}`}
              x={startX + 725 - 40}
              y={startY + 140 + i * 95}
              width={82}
              height={85}
              color={colors.silver}
              title={`Silver\nBooth`}
              subtitle="3 x 2"
              fontSize={10}
            />
          ))}

          {/* Standard Booths - Left 6 + Right 3 */}
          {Array.from({ length: 6 }).map((_, i) => {
            const col = i % 2; // 2 columns
            const row = Math.floor(i / 2); // 3 rows
            return (
              <Booth
                key={`std-left-${i}`}
                x={startX + 790 + col * 68}   // left column
                y={startY + 140 + row * 68}
                width={62}
                height={48}                  // reduced height
                color={colors.standard}
                title={"Standard\nBooth"}
                subtitle="2 x 2"
                subtitleOffsetY={8}
                fontSize={8}
                textColor="#ffffff"
              />
            );
          })}

          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <Booth
                key={`std-right-${i}`}
                x={startX + 780 + 2 * 68 + 60} // shift right column + extra space
                y={startY + 140 + i * 68}      // vertical column
                width={62}
                height={48}                    // reduced height
                color={colors.standard}
                title={"Standard\nBooth"}
                subtitle="2 x 2"
                subtitleOffsetY={8}
                fontSize={8}
                textColor="#ffffff"
              />
            );
          })}


          {/* LED Exposure Wall - Second Right */}
          <g>
            {/* LED Wall Box */}
            <rect
              x={startX + 1070}
              y={startY + 260}
              width={30}
              height={90}
              fill={colors.ledWall}
              rx={3}
            />

            {/* LED Exposure Wall text */}
            <text
              x={startX + 1085}
              y={startY + 300}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fill="#fff"
              fontWeight="600"
              transform={`rotate(-90, ${startX + 1085}, ${startY + 305})`}
            >
              LED Exposure Wall
            </text>

            {/* Size text */}
            <text
              x={startX + 1100}
              y={startY + 330}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.9)"
              transform={`rotate(-90, ${startX + 1085}, ${startY + 325})`}
            >
              2.5w × 3h
            </text>
          </g>


          {/* Corner diamond - Right */}
          <polygon points={`${startX + 1080},${startY + 260} ${startX + 1088},${startY + 268} ${startX + 1080},${startY + 276} ${startX + 1072},${startY + 268}`} fill="#e74c3c" />

          {/* ===== DIAMOND + SILVER ROW ===== */}

          {/* Diamond Sponsors - 2 horizontal */}
          {Array.from({ length: 2 }).map((_, i) => (
            <Booth
              key={`diamond-${i}`}
              x={startX + 330 + i * 150}
              y={startY + 450}
              width={140}
              height={85}
              color={colors.diamond}
              title="Diamond Sponsor"
              subtitle="4 x 3"
              textColor="#ffffff"
              fontSize={11}
            />
          ))}

          {/* Silver Booths after Diamond - 4 horizontal */}
          {Array.from({ length: 4 }).map((_, i) => (
            <Booth
              key={`silver-diamond-${i}`}
              x={startX + 710 + i * 88}
              y={startY + 420}
              width={82}
              height={60}
              color={colors.silver}
              title="Silver Booth"
              subtitle="3 x 2"
              fontSize={9}
            />
          ))}

          {/* ===== LEFT SIDE - Cafe, Cocktail, People Icons ===== */}

          {/* Cafe */}
          <Booth
            x={startX - 15}
            y={startY + 320}
            width={70}
            height={90}
            color={colors.cafe}
            title="Café"
            subtitle=""
            textColor="#ffffff"
            fontSize={13}
          />

          {/* Cafe Tables */}
          {[0, 1].map((row) => (
            <g key={`cafe-tables-${row}`}>
              {[0, 1].map((col) => (
                <g key={`cafe-table-${row}-${col}`}>
                  <circle
                    cx={startX + 110 + col * 40}
                    cy={startY + 350 + row * 40}
                    r={10}
                    fill="#d4a574"
                    stroke="#8b5a2b"
                    strokeWidth="1"
                  />
                  <circle cx={startX + 110 + col * 40} cy={startY + 350 + row * 40} r={4} fill="#8b4513" />
                </g>
              ))}
            </g>
          ))}

          {/* Cocktail Lounge */}
          <Booth
            x={startX - 15}
            y={startY + 430}
            width={70}
            height={90}
            color={colors.cocktail}
            title={`Cocktail\nLounge`}   // <-- line break here
            subtitle=""
            textColor="#ffffff"
            fontSize={11}
          />


          {/* Cocktail Lounge Tables */}
          {[0, 1].map((row) => (
            <g key={`cocktail-row-${row}`}>
              {[0, 1].map((col) => (
                <g key={`cocktail-table-${row}-${col}`}>
                  <circle
                    cx={startX + 110 + col * 40}
                    cy={startY + 500 + row * 40}
                    r={10}
                    fill="#7986cb"
                    stroke="#5b6bc0"
                    strokeWidth="1"
                  />
                  <circle cx={startX + 110 + col * 40} cy={startY + 500 + row * 40} r={4} fill="#3f51b5" />
                </g>
              ))}
            </g>
          ))}

          {/* Additional tables below cocktail lounge */}
          {[0, 1].map((row) => (
            <g key={`extra-tables-${row}`}>
              {[0, 1].map((col) => (
                <g key={`extra-table-${row}-${col}`}>
                  <circle
                    cx={startX + 110 + col * 40}
                    cy={startY + 600 + row * 40}
                    r={10}
                    fill="#d4a574"
                    stroke="#8b5a2b"
                    strokeWidth="1"
                  />
                  <circle cx={startX + 110 + col * 40} cy={startY + 600 + row * 40} r={4} fill="#8b4513" />
                </g>
              ))}
            </g>
          ))}
          {/* ===== EXIT ===== */}
          <g>
            <rect x={startX + 90} y={startY + 410} width={4} height={50} fill="#ef4444" />
            {/* Left-pointing arrows stacked next to EXIT */}
            {/* arrows in front of EXIT — spaced correctly */}
            {[0, 10].map((offset, i) => (
              <path
                key={i}
                d={`
                    M ${startX + 315 - offset} ${startY + 235}
                    L ${startX + 315 - offset} ${startY + 210}

                    M ${startX + 315 - offset} ${startY + 210}
                    L ${startX + 310 - offset} ${startY + 215}

                    M ${startX + 315 - offset} ${startY + 210}
                    L ${startX + 320 - offset} ${startY + 215}
                  `}
                stroke="#555"
                strokeWidth="1.5"
                fill="none"
                transform={`rotate(-90, ${startX + 320}, ${startY + 428})`}
              />
            ))}


            <text x={startX + 322} y={startY + 250} fontSize="9" fill="#333" fontWeight="600" transform={`rotate(-90, ${startX + 330}, ${startY + 440})`}>
              EXIT
            </text>
          </g>
          <g>
            <rect
              x={startX + 100}
              y={startY + 690}
              width={400}
              height={200}
              fill={colors.backdrop}
              stroke="#94a3b8"
              strokeWidth="1"
              strokeDasharray="4 2"
              rx={4}
            />

            {/* Divider line */}
            <line
              x1={startX + 285}
              y1={startY + 700}
              x2={startX + 285}
              y2={startY + 880}
              stroke="#94a3b8"
              strokeWidth="1"
              strokeDasharray="4 2"
            />

            {/* Standing person icons */}
            {[
              { x: startX + 220, y: startY + 800, type: 'male' },
              { x: startX + 350, y: startY + 800, type: 'female' },
            ].map((pos, i) => (
              <g
                key={`person-${i}`}
                transform={`translate(${pos.x}, ${pos.y}) scale(3) translate(-8, -8)`}
              >
                {pos.type === 'male' ? (
                  <g>
                    <path fill="#e91e63" d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
                    <path fill="#e91e63" d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path>
                  </g>
                ) : (
                  <g>
                    <path fill="#e91e63" d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
                    <path fill="#e91e63" d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path>
                  </g>
                )}
              </g>
            ))}
          </g>



          {/* ===== NETWORKING LOUNGE ===== */}
          <Booth
            x={startX + 510}
            y={startY + 700}
            width={150}
            height={180}
            color={colors.networking}
            title={`Networking\nLounge`}
            // subtitle="4 X 5"
            textColor="#ffffff"
            borderRadius={6}
            fontSize={13}
          />
          <Booth
            x={startX + 510}
            y={startY + 820}
            width={150}
            height={50}
            color={colors.backdrop}
            title={`Backdrop`}
            subtitle="4 X 5"
            textColor="#ffffff"
            borderRadius={6}
            fontSize={13}
          />

          {/* ===== SPEAKER HALL WITH JAGGED ENTRANCE ===== */}
          <g>
            {/* Speaker Hall Main Container */}
            <rect
              x={startX + 700}
              y={startY + 490}
              width={400}
              height={400}
              rx={6}
              fill={colors.speakerHall}
            />

            {/* Jagged/Stepped entrance on left side — moved right and down */}
            <path
              d={`
                  M ${startX + 670 + 35} ${startY + 380 + 130}
                  L ${startX + 670 + 35} ${startY + 410 + 130}
                  L ${startX + 655 + 35} ${startY + 410 + 130}
                  L ${startX + 655 + 35} ${startY + 470 + 130}
                  L ${startX + 670 + 35} ${startY + 470 + 130}
                  L ${startX + 670 + 35} ${startY + 620 + 130}
                  L ${startX + 655 + 35} ${startY + 620 + 130}
                  L ${startX + 655 + 35} ${startY + 680 + 130}
                  L ${startX + 670 + 35} ${startY + 680 + 130}
                  L ${startX + 670 + 35} ${startY + 900 + 130}
                `}
              fill={colors.speakerHall}
            />


            {/* Entrance markers on right side */}
            {[530, 590, 650, 710, 760, 820].map((offsetY, i) => (
              <rect
                key={`entrance-${i}`}
                x={startX + 1104}
                y={startY + offsetY}
                width={6}
                height={35}
                fill="#ef4444"
                rx={2}
              />
            ))}

            {/* Corner diamond - Right entrance */}
            <polygon
              points={`
                ${startX + 1085},${startY + 392} 
                ${startX + 1093},${startY + 400} 
                ${startX + 1085},${startY + 408} 
                ${startX + 1077},${startY + 400}
              `}
              fill="#e74c3c"
            />

            {/* Speaker Hall Title */}
            <text
              x={startX + 900}
              y={startY + 550}
              textAnchor="middle"
              fontSize="26"
              fill="#ffffff"
              fontWeight="bold"
              fontFamily="Inter, system-ui, sans-serif"
            >
              Speaker Hall
            </text>

            <text
              x={startX + 900}
              y={startY + 585}
              textAnchor="middle"
              fontSize="18"
              fill="rgba(255,255,255,0.9)"
              fontFamily="Inter, system-ui, sans-serif"
            >
              13 X 16
            </text>

            {/* Seating rows visualization */}

            {/* users */}
            {[0, 1, 2, 3, 4, 5].map((row) =>
              [0, 1, 2, 3, 4].map((col) => {
                const isCenterCol = col === 2; // skip all seats in center column
                return (
                  <React.Fragment key={`left-${row}-${col}`}>
                    <rect
                      x={startX + 730 + col * 70} // horizontal spacing
                      y={startY + 600 + row * 32} // vertical spacing
                      width={60}
                      height={24}
                      rx={3}
                      fill="rgba(255,255,255,0.06)"
                    />
                    {!isCenterCol && (
                      <Users
                        x={startX + 730 + col * 70 + 20} // center user in seat
                        y={startY + 600 + row * 32 + 2}
                        size={20}
                        color="#fff"
                      />
                    )}
                  </React.Fragment>
                );
              })
            )}

            {/* Right side 4 rows x 5 cols */}
            {/* {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3, 4].map((col) => {
                const isCenterCol = col === 2; // skip center column
                return (
                  <React.Fragment key={`right-${row}-${col}`}>
                    <rect
                      x={startX + 1120 + col * 70} // 720 + 400 = 1120
                      y={startY + 600 + row * 32}
                      width={60}
                      height={24}
                      rx={3}
                      fill="rgba(255,255,255,0.06)"
                    />
                    {!isCenterCol && (
                      <Users
                        x={startX + 1120 + col * 70 + 20}
                        y={startY + 600 + row * 32 + 2}
                        size={20}
                        color="#fff"
                      />
                    )}
                  </React.Fragment>
                );
              })
            )} */}

            {/* Speaker Stage Container */}
            <rect
              x={startX + 705}
              y={startY + 800}
              width={390}
              height={80}
              rx={4}
              fill="#6c7a89"
            />

            <text
              x={startX + 890}
              y={startY + 820}
              textAnchor="middle"
              fontSize="13"
              fill="#ffffff"
              fontWeight="bold"
            >
              Speaker Stage
            </text>
            <text
              x={startX + 890}
              y={startY + 862}
              textAnchor="middle"
              fontSize="10"
              fill="rgba(255,255,255,0.8)"
            >
              9 x 3
            </text>

            {/* Three Screens */}
            {/* Left Screen */}
            <rect x={startX + 765} y={startY + 828} width={70} height={40} rx={3} fill="#1a1a3e" />
            <text x={startX + 800} y={startY + 844} textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="600">
              Side Screen
            </text>
            <text x={startX + 800} y={startY + 855} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.7)">
              1.5 w X 2.5 h
            </text>

            {/* Main Screen */}
            <rect x={startX + 855} y={startY + 828} width={70} height={40} rx={3} fill="#1a1a3e" />
            <text x={startX + 890} y={startY + 844} textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="600">
              Main Screen
            </text>
            <text x={startX + 890} y={startY + 855} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.7)">
              5 w x 2.5 h
            </text>

            {/* Right Screen */}
            <rect x={startX + 945} y={startY + 828} width={70} height={40} rx={3} fill="#1a1a3e" />
            <text x={startX + 980} y={startY + 844} textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="600">
              Side Screen
            </text>
            <text x={startX + 980} y={startY + 855} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.7)">
              1.5 w X 2.5 h
            </text>
          </g>

          {/* ===== LEGEND ===== */}
          <g transform={`translate(${startX - 35}, ${startY + 700})`}>
            <text x={0} y={0} fontSize="13" fontWeight="bold" fill="#1e293b">Booth Legend</text>

            {[
              { color: colors.official, label: "Official:", count: "01" },
              { color: colors.exclusive, label: "Exclusive:", count: "01" },
              { color: colors.diamond, label: "Diamond:", count: "02" },
              { color: colors.gold, label: "Gold Booth:", count: "06" },
              { color: colors.silver, label: "Silver Booth:", count: "15" },
              { color: colors.standard, label: "Standard:", count: "09" },
            ].map((item, i) => (
              <g key={`legend-${i}`} transform={`translate(0, ${22 + i * 20})`}>
                <rect x={0} y={0} width={14} height={14} rx={2} fill={item.color} stroke="#94a3b8" strokeWidth="0.5" />
                <text x={22} y={11} fontSize="11" fill="#475569">{item.label}</text>
                <text x={100} y={11} fontSize="11" fill="#1e293b" fontWeight="600">{item.count}</text>
              </g>
            ))}
          </g>

        </svg>
      </div>

      {/* Footer */}
      <div className="text-center mt-4 text-slate-400 text-sm">
        <p>Hover over any booth for details • © PROFX SUMMIT DUBAI 2026</p>
      </div>
    </div>
  );
};

export default FloorPlanDubai;