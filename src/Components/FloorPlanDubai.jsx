import React from "react";
import { Users } from "lucide-react";
import Booth from "./Booth";
import FloorBorder from "./FloorBorder";
import { createPortal } from "react-dom";
import BoothModal from "./BoothModal";

const FloorPlanDubai = () => {
  const [selectedBooth, setSelectedBooth] = React.useState(null);
  const [reservedBooths, setReservedBooths] = React.useState({});

  // Layout constants based on grid
  const startX = 50;
  const startY = 50;
  // Arrow constants
  const dx = -95;
  const dy = 18;
  const up = 60;
  // Speaker Hall
  const hallX = startX + 710;
  const hallY = startY + 475;
  const hallW = 370;
  const hallH = 400;

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
    photoWallStage: "#F1F3F3",     // Gray
    backdrop: "#d4d8dc87",      // Light gray
    ledWall: "#e74c3c"        // Red
  };

  return (

    <>
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

            {/* Inner fine grid for main floor area */}
            <rect x={startX + 90} y={startY} width="1020" height="900" fill="url(#gridDense)" />

            {/* Floor Border */}
            <FloorBorder
              style={{
                position: "absolute",
                top: startY,
                left: startX,
                width: 80,
                height: 80,
              }}
            />


            {/* ===== ENTRANCE - Top Left ===== */}
            <g>
              <text x={startX - 10} y={startY + 20} fontSize="9" fill="#333" fontWeight="600" transform={`rotate(-90, ${startX + 75}, ${startY + 55})`}>
                ENTRANCE
              </text>

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

            {/* ===== TOP ROW ===== */}

            {/* Official Sponsor */}
            <Booth
              boothId="OFFICIAL-01"
              boothType="official"
              x={startX + 180}
              y={startY + 50}
              width={120}
              height={90}
              color={colors.official}
              title={"Official\nSponsor"}
              subtitle="4 x 3"
              textColor="#ffffff"
              fontSize={11}
              isReserved={reservedBooths[`OFFICIAL-01`] === true}
              onClick={setSelectedBooth}
            />

            {/* Silver Booths Row - 9 booths */}
            {Array.from({ length: 9 }).map((_, i) => (
              <Booth
                key={`silver-top-${i}`}
                boothId={`SILVER-${i + 3}`} // starts after vertical (2)
                boothType="Silver Booth"
                x={startX + 330 + i * 78}   // step = width (no gap)
                y={startY + 52}
                width={78}                 // ⬆ increased
                height={72}
                color={colors.silver}
                title={"Silver\nBooth"}
                subtitle="3 x 2"
                fontSize={10}
                isReserved={reservedBooths[`SILVER-${i + 3}`] === true}
                onClick={setSelectedBooth}
              />
            ))}



            {/* LED Exposure Wall - Top Right */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 1060}
                y={startY + 100}
                width={30}
                height={90}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX + 1005}
                y={startY + 50}
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
                y={startY + 80}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="7"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 1085}, ${startY + 85})`}
              >
                2.5w × 3h
              </text>
            </g>

            {/* ===== SECOND SECTION ===== */}

            {/* Exclusive Sponsor */}
            <Booth
              boothId="EXCLUSIVE-01"
              boothType="exclusive"
              x={startX + 180}
              y={startY + 180}
              width={120}
              height={90}
              color={colors.exclusive}
              title="Exclusive Sponsor"
              subtitle="4 x 3"
              textColor="#ffffff"
              fontSize={11}
              isReserved={reservedBooths[`EXCLUSIVE-01`] === true}
              onClick={setSelectedBooth}
            />

            {/* Photo Wall - Diagonal */}
            <g>
              {/* Photo Wall rectangle */}
              <rect
                x={startX + 0}
                y={startY + 215}
                width={100}
                height={25}
                fill={colors.photoWall}
                rx={4}
                transform={`rotate(45, ${startX + 25}, ${startY + 420})`} // pivot at rect center
              />
              <rect
                x={startX + 10}
                y={startY + 240}
                width={80}
                height={25}
                fill={colors.photoWallStage}       // fill color
                rx={4}                             // rounded corners
                stroke="#000"                      // border color
                strokeWidth={1}                    // border thickness
                transform={`rotate(45, ${startX + 25}, ${startY + 420})`} // pivot at rect center
              />


              {/* Photo Wall text */}
              <text
                x={startX + 48}            // center of rect before rotation
                y={startY + 226}           // center of rect before rotation
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="600"
                transform={`rotate(45, ${startX + 25}, ${startY + 420})`}
              >
                Photo Wall
              </text>
            </g>

            {/* Gold Booths - 2x2 grid (4 booths) */}
            {[0, 1, 2, 3].map((i) => (
              <Booth
                key={`gold-grid-${i}`}
                boothId={`GOLD-${i + 1}`}
                boothType="Gold Booth"
                x={startX + 330 + (i % 2) * 104}     // step = width
                y={startY + 180 + Math.floor(i / 2) * 82} // step = height
                width={104}                          // ⬇ narrower
                height={82}
                color={colors.gold}
                title="Gold Booth"
                subtitle="4 x 3"
                fontSize={11}
                isReserved={reservedBooths[`GOLD-${i + 1}`] === true}
                onClick={setSelectedBooth}
              />
            ))}


            {/* Gold Booths - 2 vertical */}
            {[0, 1].map((i) => (
              <Booth
                key={`gold-vert-${i}`}
                boothId={`GOLD-${i + 5}`}   // continues after 4
                boothType="Gold Booth"
                x={startX + 588}
                y={startY + 180 + i * 82}   // step = height (no gap)
                width={76}                 // smaller width
                height={82}
                color={colors.gold}
                title="Gold Booth"
                subtitle="4 x 3"
                fontSize={11}
                isReserved={reservedBooths[`GOLD-${i + 5}`] === true}
                onClick={setSelectedBooth}
              />
            ))}


            {/* Silver Booths - 2 vertical */}
            {[0, 1].map((i) => (
              <Booth
                key={`silver-vert-${i}`}
                boothId={`SILVER-${i + 1}`}
                boothType="Silver Booth"
                x={startX + 725 - 60}
                y={startY + 180 + i * 82}   // step = height
                width={76}                  // slightly slimmer
                height={82}
                color={colors.silver}
                title={`Silver\nBooth`}
                subtitle="3 x 2"
                fontSize={10}
                isReserved={reservedBooths[`SILVER-${i + 1}`] === true}
                onClick={setSelectedBooth}
              />
            ))}

            {/* Standard Booths - Left 6 */}
            {Array.from({ length: 6 }).map((_, i) => {
              const col = i % 2;            // 2 columns
              const row = Math.floor(i / 2); // 3 rows

              return (
                <Booth
                  key={`std-left-${i}`}
                  boothId={`STANDARD-${i + 1}`}
                  boothType="Standard Booth"
                  x={startX + 790 + col * 60}   // step = width
                  y={startY + 180 + row * 55}  // step = height
                  width={60}                   // slightly smaller
                  height={55}
                  color={colors.standard}
                  title={"Standard\nBooth"}
                  subtitle="2 x 2"
                  subtitleOffsetY={8}
                  fontSize={8}
                  textColor="#ffffff"
                  isReserved={reservedBooths[`STANDARD-${i + 1}`] === true}
                  onClick={setSelectedBooth}
                />
              );
            })}


            {/* Standard Booths - Right 3 */}
            {Array.from({ length: 3 }).map((_, i) => (
              <Booth
                key={`std-right-${i}`}
                boothId={`STANDARD-${i + 7}`}
                boothType="Standard Booth"
                x={startX + 845 + 2 * 60 + 8}  // aligned to right of left grid
                y={startY + 180 + i * 55}      // step = height
                width={60}
                height={55}
                color={colors.standard}
                title={"Standard\nBooth"}
                subtitle="2 x 2"
                subtitleOffsetY={8}
                fontSize={8}
                isReserved={reservedBooths[`STANDARD-${i + 7}`] === true}
                onClick={setSelectedBooth}
              />
            ))}



            {/* LED Exposure Wall - Second Right */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 1060}
                y={startY + 320}
                width={30}
                height={90}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX + 1025}
                y={startY + 290}
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
                x={startX + 1045}
                y={startY + 320}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="7"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 1085}, ${startY + 325})`}
              >
                2.5w × 3h
              </text>
            </g>

            {/* ===== DIAMOND + SILVER ROW ===== */}

            {/* Diamond Sponsors - 2 horizontal */}
            {Array.from({ length: 2 }).map((_, i) => (
              <Booth
                boothId={`DIAMOND-${i + 1}`}
                boothType="Diamond Sponsor"
                x={startX + 375 + i * 120}
                y={startY + 410}
                width={120}
                height={95}
                color={colors.diamond}
                title="Diamond Sponsor"
                subtitle="4 x 3"
                textColor="#ffffff"
                fontSize={11}
                isReserved={reservedBooths[`DIAMOND-${i + 1}`]}
                onClick={setSelectedBooth}
              />
            ))}


            {/* Silver Booths after Diamond - 4 horizontal */}
            {Array.from({ length: 4 }).map((_, i) => (
              <Booth
                key={`silver-diamond-${i}`}
                x={startX + 710 + i * 82}
                y={startY + 410}
                width={82}
                height={60}
                color={colors.silver}
                title="Silver Booth"
                subtitle="3 x 2"
                fontSize={9}
                isReserved={reservedBooths[`SILVER-${i + 1}`]}
                onClick={setSelectedBooth}
              />
            ))}

            {/* ===== LEFT SIDE - Cafe, Cocktail, People Icons ===== */}

            {/* Cafe */}
            <Booth
              x={startX - 15}
              y={startY + 320 + 30}
              width={70}
              height={90}
              color={colors.cafe}
              title="Café"
              subtitle=""
              textColor="#ffffff"
              fontSize={13}
            />

            {/* Cafe Tables - Only 2 */}
            {[0, 1].map((i) => (
              <g key={`cafe-table-${i}`}>
                <circle
                  cx={startX + 160 + i * 40}  // horizontal spacing
                  cy={startY + 400}           // same row
                  r={10}
                  fill="#d4a574"
                  stroke="#8b5a2b"
                  strokeWidth={1}
                />
                <circle
                  cx={startX + 160 + i * 40}
                  cy={startY + 400}
                  r={4}
                  fill="#8b4513"
                />
              </g>
            ))}


            {/* Cocktail Lounge */}
            <Booth
              x={startX - 15}
              y={startY + 430 + 30}
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
                      cx={startX + 160 + col * 40}
                      cy={startY + 600 + row * 40}
                      r={10}
                      fill="#7986cb"
                      stroke="#5b6bc0"
                      strokeWidth="1"
                    />
                    <circle cx={startX + 160 + col * 40} cy={startY + 600 + row * 40} r={4} fill="#3f51b5" />
                  </g>
                ))}
              </g>
            ))}

            {/* ===== EXIT ===== */}
            <g>
              {/* Left-pointing arrows stacked next to EXIT */}
              {/* arrows in front of EXIT — spaced correctly */}
              {[0, 10].map((offset, i) => (
                <path
                  key={i}
                  d={`
                    M ${startX + 315 - 95 - offset} ${startY + 235 + 150}
                    L ${startX + 315 - 95 - offset} ${startY + 210 + 150}

                    M ${startX + 315 - 95 - offset} ${startY + 210 + 150}
                    L ${startX + 310 - 95 - offset} ${startY + 215 + 150}

                    M ${startX + 315 - 95 - offset} ${startY + 210 + 150}
                    L ${startX + 320 - 95 - offset} ${startY + 215 + 150}
                  `}
                  stroke="#555"
                  strokeWidth="1.5"
                  fill="none"
                  transform={`rotate(-90, ${startX + 320}, ${startY + 428})`}
                />
              ))}


              <text x={startX + 228} y={startY + 400} fontSize="9" fill="#333" fontWeight="600" transform={`rotate(-90, ${startX + 330}, ${startY + 440})`}>
                EXIT
              </text>
            </g>

            {/* ===== NETWORKING LOUNGE ===== */}
            <Booth
              x={startX + 550}
              y={startY + 555}
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
              x={startX + 550}
              y={startY + 675}
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
              {/* ===== SPEAKER HALL WITH CUT BOTTOM-LEFT ===== */}
              <path
                d={`
                  M ${hallX + 6} ${hallY}
                  H ${hallX + hallW - 6}
                  Q ${hallX + hallW} ${hallY} ${hallX + hallW} ${hallY + 6}
                  V ${hallY + hallH - 6}
                  Q ${hallX + hallW} ${hallY + hallH} ${hallX + hallW - 6} ${hallY + hallH}
                  H ${hallX + 90}
                  L ${hallX + 20} ${hallY + hallH - 65}
                  V ${hallY + 40}
                  Q ${hallX} ${hallY + 40} ${hallX} ${hallY + 34}
                  V ${hallY + 6}
                  Q ${hallX} ${hallY} ${hallX + 6} ${hallY}
                  Z
                `}
                fill={colors.speakerHall}
              />


              {/* Jagged/Stepped entrance on left side — moved right and down */}
              <path
                d={`
                  M ${startX + 670 + 65} ${startY + 380 + 115}
                  L ${startX + 670 + 65} ${startY + 410 + 115}
                  L ${startX + 655 + 65} ${startY + 410 + 115}
                  L ${startX + 655 + 65} ${startY + 470 + 115}
                  L ${startX + 670 + 65} ${startY + 470 + 115}
                  L ${startX + 670 + 65} ${startY + 620 + 115}
                  L ${startX + 655 + 65} ${startY + 620 + 115}
                  L ${startX + 655 + 65} ${startY + 680 + 115}
                  L ${startX + 670 + 65} ${startY + 680 + 115}
                  L ${startX + 670 + 65} ${startY + 900 + 115}
                `}
                fill={colors.speakerHall}
              />

              {/* Speaker Hall Title */}
              <text
                x={startX + 905}
                y={startY + 550}
                textAnchor="middle"
                fontSize="26"
                fill="#fff"
                fontWeight="bold"
                fontFamily="Inter, system-ui, sans-serif"
              >
                Speaker Hall
              </text>

              <text
                x={startX + 905}
                y={startY + 585}
                textAnchor="middle"
                fontSize="18"
                fill="rgba(255,255,255,0.9)"
                fontFamily="Inter, system-ui, sans-serif"
              >
                13 × 16
              </text>


              {/* Seating rows visualization */}

              {/* users */}
              {[0, 1, 2, 3, 4, 5].map((row) =>
                [0, 1, 2, 3, 4].map((col) => {
                  const isCenterCol = col === 2; // skip all seats in center column
                  const seatWidth = 40;  // smaller width
                  const seatHeight = 20; // smaller height
                  const userSize = 16;   // smaller user icon

                  return (
                    <React.Fragment key={`left-${row}-${col}`}>
                      <rect
                        x={startX + 745 + col * 70} // keep original spacing
                        y={startY + 600 + row * 32}
                        width={seatWidth}
                        height={seatHeight}
                        rx={3}
                        fill="rgba(255,255,255,0.06)"
                      />
                      {!isCenterCol && (
                        <Users
                          x={startX + 745 + col * 70 + (seatWidth - userSize) / 2} // center user in smaller seat
                          y={startY + 600 + row * 32 + 2}
                          size={userSize}
                          color="#fff"
                        />
                      )}
                    </React.Fragment>
                  );
                })
              )}


              {/* Speaker Stage Container */}
              <rect
                x={startX + 798}
                y={startY + 790}
                width={270}
                height={80}
                rx={4}
                fill="#6c7a89"
              />

              <text
                x={startX + 930}
                y={startY + 810}
                textAnchor="middle"
                fontSize="13"
                fill="#ffffff"
                fontWeight="bold"
              >
                Speaker Stage
              </text>
              <text
                x={startX + 930}
                y={startY + 822}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(255,255,255,0.8)"
              >
                9 x 3
              </text>

              {/* Three Screens */}
              {/* Left Screen */}
              <rect x={startX + 765 + 45} y={startY + 828 - 2} width={70} height={40} rx={3} fill="#1a1a3e" />
              <text x={startX + 800 + 45} y={startY + 844 - 2} textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="600">
                Side Screen
              </text>
              <text x={startX + 800 + 45} y={startY + 855 - 2} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.7)">
                1.5 w X 2.5 h
              </text>

              {/* Main Screen */}
              <rect x={startX + 855 + 45} y={startY + 828 - 2} width={70} height={40} rx={3} fill="#1a1a3e" />
              <text x={startX + 890 + 45} y={startY + 844 - 2} textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="600">
                Main Screen
              </text>
              <text x={startX + 890 + 45} y={startY + 855 - 2} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.7)">
                5 w x 2.5 h
              </text>

              {/* Right Screen */}
              <rect x={startX + 945 + 45} y={startY + 828 - 2} width={70} height={40} rx={3} fill="#1a1a3e" />
              <text x={startX + 980 + 45} y={startY + 844 - 2} textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="600">
                Side Screen
              </text>
              <text x={startX + 980 + 45} y={startY + 855 - 2} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.7)">
                1.5 w X 2.5 h
              </text>
            </g>

            {/* ===== LEGEND ===== */}
            <g transform={`translate(${startX + 140}, ${startY + 700})`}>
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

      {selectedBooth && (
        <BoothModal
          booth={selectedBooth}
          onClose={() => setSelectedBooth(null)}
          onReserve={({ name, company, phone }) => {
            // Mark booth as reserved
            setReservedBooths(prev => ({
              ...prev,
              [selectedBooth.boothId]: true
            }));

            // SweetAlert confirmation
            import("sweetalert2").then((Swal) => {
              Swal.default.fire({
                title: "Reservation Submitted!",
                html: `
                  Name: ${name}<br/>
                  Company: ${company}<br/>
                  Phone: ${phone}<br/>
                  Please wait for approval.
                `,
                icon: "info",
                confirmButtonText: "Ok",
              });
            });
          }}
        />
      )}


    </>
  );
};

export default FloorPlanDubai;