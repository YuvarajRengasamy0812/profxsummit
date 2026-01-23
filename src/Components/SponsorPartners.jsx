import React from "react";
import { motion } from "framer-motion";

const sponsors = {
    official: [
        {
            name: "UltraTrend FX",
            logo: "assets/images/sponsors/official-sponsor.png",
            url: "https://www.ultratrendfx.com/"
        }
    ],
    exclusive: [
        {
            name: "NXG Markets",
            logo: "assets/images/sponsors/exclusive-sponsor.png",
            url: "https://www.nxgmarkets.com/"
        }
    ],
    diamond: [
        {
            name: "FinXCart",
            logo: "assets/images/sponsors/diamond-sponsor.png",
            url: "https://finxcart.com/"
        }
    ],
    gold: [
        { name: "Gold 1", logo: "assets/images/sponsors/leveragemarkets.png", url: "https://leveragemarkets.com/" },
    ],
    silver: [
        { name: "ZyloStar", logo: "assets/images/sponsors/silver-sponsor.png", url: "https://zylostar.com/" },
    ],
    other: [
    {
        name: "CFI Trade",
        logo: "assets/images/sponsors/lanyard-sponsor.png",
        url: "https://cfi.trade/en/uae",
        subTitle: "Lanyard Sponsor"
    },
]

};

const SponsorSection = ({ title, items, single = false }) => (
    <div className="text-center mb-5">
        <h5 className="profx-sponsors-title mb-4">{title}</h5>

        <div className={`row justify-content-center ${single ? "" : "g-4"}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={single
                        ? "col-12 d-flex justify-content-center"
                        : "col-12 col-md-4 d-flex justify-content-center"}
                >
                    <div className="text-center">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profx-sponsors-card d-block"
                        >
                            <img src={item.logo} alt={item.name} />
                        </a>

                        {/* Sub title below each sponsor */}
                        {item.subTitle && (
                            <p className="mt-3 mb-0 fw-bold pink">
                                {item.subTitle}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);



export default function SponsorPartners() {
    return (
        <section className="profx-sponsors-section py-5 bg-white">
            {/* Title */}
            <div className="text-center mb-5 px-3 py-5">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-uppercase fw-medium mb-3"
                    style={{ letterSpacing: "0.2em", fontSize: "0.85rem", color: "#e91e63" }}
                >
                    PROFX SUMMIT SPONSORS
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.10, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="fw-light"
                    style={{ color: "#223645", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                    CHECK{" "}
                    <span className="fw-semibold" style={{ color: "#e91e63" }}>
                        OUR SPONSORS
                    </span>{" "}
                    WHO MAKE IT
                    <br className="d-none d-md-block" />
                    <span className="fw-semibold"> POSSIBLE</span>
                </motion.h2>
            </div>
            <div className="container">

                <SponsorSection
                    title="Official Sponsors"
                    items={sponsors.official}
                    single
                />

                <SponsorSection
                    title="Exclusive Sponsors"
                    items={sponsors.exclusive}
                    single
                />

                <SponsorSection
                    title="Diamond Sponsors"
                    items={sponsors.diamond}
                    single
                />

                <SponsorSection
                    title="Gold Sponsors"
                    items={sponsors.gold}
                />

                <SponsorSection
                    title="Silver Sponsors"
                    items={sponsors.silver}
                />

                <SponsorSection
                    title="Other Sponsors"
                    items={sponsors.other}
                />

            </div>
        </section>
    );
}

