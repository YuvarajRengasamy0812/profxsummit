import React, { useState } from "react";

const Booth = ({boothId, boothType, x, y, width, height, color, title, subtitle, borderRadius = 6, textColor = "#1a1a2e", fontSize = 14, subtitleOffsetY = 0, onClick, isReserved = false }) => {
  const [hover, setHover] = useState(false);
  const tooltipWidth = 160;
  const tooltipHeight = 60;

  // Calculate if tooltip should flip (near top edge)
  const showTooltipBelow = y < 80;

  return (
    <g
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick && onClick({ boothId, boothType, title, subtitle })}
      style={{ cursor: "pointer" }}
    >
      {/* RESERVED overlay */}
      {isReserved && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 18}
          textAnchor="middle"
          fontSize={fontSize - 2}
          fill="#fff"
          fontWeight="bold"
        >
          RESERVED
        </text>
      )}

      {/* Shadow */}
      <rect
        x={x + 3}
        y={y + 3}
        width={width}
        height={height}
        rx={borderRadius}
        fill="rgba(0,0,0,0.1)"
      />

      {/* Booth rectangle */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        fill={hover ? "#e91e63" : color}
        stroke={hover ? "#c2185b" : "rgba(0,0,0,0.15)"}
        strokeWidth={hover ? 3 : 1.5}
        style={{
          transition: "all 0.2s ease",
          filter: hover ? "brightness(1.05)" : "none"
        }}
      />

      {/* Inner highlight */}
      <rect
        x={x + 2}
        y={y + 2}
        width={width - 4}
        height={height / 3}
        rx={borderRadius - 1}
        fill="rgba(255,255,255,0.2)"
      />

      {/* Title */}
      <text
        x={x + width / 2}
        y={y + height / 2 - (subtitle ? 8 : 0)}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={hover ? "#ffffff" : textColor}
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif"
        style={{ transition: "fill 0.2s ease" }}
      >
        {title.split("\n").map((line, i) => (
          <tspan key={i} x={x + width / 2} dy={i === 0 ? 0 : fontSize + 2}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Subtitle */}
      {subtitle && (
        <text
          x={x + width / 2}
          y={y + height - 12 + subtitleOffsetY}
          textAnchor="middle"
          fill={hover ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.6)"}
          fontSize={11}
          fontFamily="Inter, system-ui, sans-serif"
          style={{ transition: "fill 0.2s ease" }}
        >
          {subtitle}
        </text>
      )}

      {/* Tooltip on hover */}
      {hover && (
        <g style={{ pointerEvents: "none" }}>
          {/* Tooltip background */}
          <rect
            x={x + width / 2 - tooltipWidth / 2}
            y={showTooltipBelow ? y + height + 12 : y - tooltipHeight - 12}
            width={tooltipWidth}
            height={tooltipHeight}
            rx={8}
            fill="#ffffff"
            stroke="#e0e0e0"
            strokeWidth="1"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
          />

          {/* Tooltip arrow */}
          <polygon
            points={
              showTooltipBelow
                ? `${x + width / 2 - 8},${y + height + 12} ${x + width / 2 + 8},${y + height + 12} ${x + width / 2},${y + height + 4}`
                : `${x + width / 2 - 8},${y - 12} ${x + width / 2 + 8},${y - 12} ${x + width / 2},${y - 4}`
            }
            fill="#ffffff"
          />

          {/* Tooltip text */}
          <text
            x={x + width / 2}
            y={showTooltipBelow ? y + height + 32 : y - tooltipHeight + 8}
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#1a1a2e"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {title.replace("\n", " ")}
          </text>

          {subtitle && (
            <text
              x={x + width / 2}
              y={showTooltipBelow ? y + height + 50 : y - tooltipHeight + 28}
              textAnchor="middle"
              fontSize="11"
              fill="#666"
              fontFamily="Inter, system-ui, sans-serif"
            >
              Size: {subtitle}
            </text>
          )}
        </g>
      )}
    </g>
  );
};

export default Booth;