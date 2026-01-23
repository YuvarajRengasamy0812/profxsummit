import React, { useEffect, useState } from "react";
import axios from "axios";
import Booth from "./Booth";

const FloorPlan = () => {
  const [reservedBooths, setReservedBooths] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/profxsummit/api/v1/floorplanList")
      .then((res) => {
        const tickets = res.data.details.tickets.data;

        const reserved = tickets
          .filter((t) => t.boothno)
          .map((t) => ({
            boothNo: String(t.boothno),
            companyName: t.company,
            logo: t.company_logo
              ? `http://localhost/profxsummit/storage/company/${t.company_logo}`
              : "/no-logo.png",
            url: t.company_url || "#",
            title: t.boothtitle,
            size: t.boothsize,
          }));

        setReservedBooths(reserved);
      });
  }, []);

  const getReservedInfo = (boothNo) =>
    reservedBooths.find((b) => b.boothNo === String(boothNo));

  return (
    <div style={{ padding: 20 }}>
      <svg width="900" height="500">
        {/* Booth 1 */}
        <Booth
          boothId={1}
          boothNo="1"
          title="Official Sponsor"
          size="4 x 3"
          x={50}
          y={50}
          width={140}
          height={90}
          color="#90caf9"
          isReserved={!!getReservedInfo("1")}
          reservedInfo={getReservedInfo("1")}
        />

        {/* Booth 2 */}
        <Booth
          boothId={2}
          boothNo="2"
          title="Café"
          size="3 x 3"
          x={220}
          y={50}
          width={120}
          height={90}
          color="#a5d6a7"
          isReserved={!!getReservedInfo("2")}
          reservedInfo={getReservedInfo("2")}
        />

        {/* Booth 3 */}
        <Booth
          boothId={3}
          boothNo="3"
          title="Available"
          size="3 x 3"
          x={370}
          y={50}
          width={120}
          height={90}
          color="#ffe082"
        />
      </svg>
    </div>
  );
};

export default FloorPlan;
