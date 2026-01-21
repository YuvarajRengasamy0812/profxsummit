import React from "react";
import { motion } from "framer-motion";

const sponsors = {
    official: {
        name: "UltraTrend FX",
        logo: "assets/images/sponsors/official-sponsor.png",
        url: "https://www.ultratrendfx.com/"
    },
    exclusive: {
        name: "NXG Markets",
        logo: "assets/images/sponsors/exclusive-sponsor.png",
        url: "https://www.nxgmarkets.com/"
    },
    diamond: {
        name: "FinXCart",
        logo: "assets/images/sponsors/diamond-sponsor.png",
        url: "https://finxcart.com/"
    },
    silver: {
        name: "https://zylostar.com/",
        logo: "assets/images/sponsors/silver-sponsor.png",
        url: "https://zylostar.com/"
    },
    lanyard: {
        name: "CFI Trade",
        logo: "assets/images/sponsors/lanyard-sponsor.png",
        url: "https://cfi.trade/en/uae"
    }
};

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
                {/* Official Sponsor */}
                <div className="text-center mb-5">
                    <h5 className="profx-sponsors-title mb-3">Official Sponsor</h5>
                    <a
                        href={sponsors.official.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profx-sponsors-card mx-auto"
                    >
                        <img src={sponsors.official.logo} alt={sponsors.official.name} />
                    </a>
                </div>

                {/* Other Sponsors */}
                <div className="row g-4 justify-content-center align-items-center">

                    {[
                        { label: "Exclusive Sponsor", data: sponsors.exclusive },
                        { label: "Diamond Sponsor", data: sponsors.diamond },
                        { label: "Silver Sponsor", data: sponsors.silver },
                        { label: "Lanyard Sponsor", data: sponsors.lanyard }
                    ].map((item, index) => (
                        <div key={index} className="col-12 col-md-6 text-center d-flex flex-column align-items-center">
                            <h5 className="profx-sponsors-title mb-3">{item.label}</h5>
                            <a
                                href={item.data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profx-sponsors-card"
                            >
                                <img src={item.data.logo} alt={item.data.name} />
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
