import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "Amana Capital Ltd", logo: "assets/images/partners/amana-capital.png", url: "https://amanacapital.com.cy/" },
    { name: "Anjouan Corporate Services", logo: "assets/images/partners/anjouan-corporate.png", url: "https://anjouancorporateservices.com/" },
    { name: "Arabic Broker", logo: "assets/images/partners/arabic-broker.png", url: "https://www.arabicbroker.com/" },
    { name: "Artificial Intelligence Solutions", logo: "assets/images/partners/artificial-intelligence.png", url: "https://www.aibi.global/" },
    { name: "Avora Markets", logo: "assets/images/partners/avora-market.png", url: "https://avoramarkets.com/" },
    { name: "Bakara Invest", logo: "assets/images/partners/bakara-invest.png", url: "https://bakinv.com/" },
    { name: "Big Bull", logo: "assets/images/partners/bigbull.png", url: "https://thebigbull.co/merchandising/" },
    { name: "Bridging FX", logo: "assets/images/partners/bridgingfx.png", url: "https://www.bridgingfx.net/" },
    { name: "BSX", logo: "assets/images/partners/bsx.png", url: "https://www.bsxdao.com/" },
    { name: "BullSouq", logo: "assets/images/partners/bullsouq.png", url: "https://bullsouq.com/" },
    { name: "CentFX", logo: "assets/images/partners/centfx.png", url: "https://centfx.com/" },
    { name: "Centroid Solutions", logo: "assets/images/partners/centroid.png", url: "https://centroidsol.com/" },
    { name: "CFI Financial", logo: "assets/images/partners/cfi.png", url: "https://cfi.trade/en/uae" },
    { name: "Codegene Technologies", logo: "assets/images/partners/codegene.png", url: "https://codegene.io/" },
    { name: "Dominion Funding", logo: "assets/images/partners/dominion-funding.png", url: "https://dominionfunding.trade/" },
    { name: "Dominion Markets", logo: "assets/images/partners/Dominion-Markets.png", url: "https://www.dominionmarkets.com/" },
    { name: "Dyntech", logo: "assets/images/partners/dyntech.png", url: "https://dyntech.io/" },
    { name: "Fast One", logo: "assets/images/partners/fast-one.png", url: "https://www.fastoneglobalmarkets.com/" },
    { name: "Financial Markets", logo: "assets/images/partners/financial-markets.png", url: "https://financialmarketsonline.com/" },
    { name: "Finx Cart", logo: "assets/images/partners/finxcart.png", url: "https://finxcart.com/" },
    { name: "Forexer", logo: "assets/images/partners/forexer.png", url: "https://www.forexer.com/" },
    { name: "FX Brokers Startup", logo: "assets/images/partners/fx-broker-startup.png", url: "https://fxbrokerstartup.com/" },
    { name: "GoDo CM", logo: "assets/images/partners/godo-cm.png", url: "https://www.godocm.com/" },
    { name: "GTC FX", logo: "assets/images/partners/gtc-fx.png", url: "https://www.gtcfx.com/lp-static/free-demo-account-v2?gc_id=21508590124&h_ga_id=164561836265&h_ad_id=717428554696&h_keyword_id=kwd-401109200134&h_keyword=gtcfx&h_placement=&gad_source=1&gclid=CjwKCAiAmMC6BhA6EiwAdN5iLfBkWzECIM8YcZG9dhISfOGIWTB0sde4t3rG5F6Ak-6Rv55H16yScxoCnVQQAvD_BwE" },
    { name: "Hybrid Solutions", logo: "assets/images/partners/hybridsolution.png", url: "https://hybridsolutions.com/" },
    { name: "Hyro Trader", logo: "assets/images/partners/hyrotrader.png", url: "https://www.hyrotrader.com/" },
    { name: "Knight Market", logo: "assets/images/partners/knight_market.png", url: "#" },
    { name: "Leverage Markets", logo: "assets/images/partners/leveragemarkets.png", url: "https://leveragemarkets.com/" },
    { name: "Liberty Markets", logo: "assets/images/partners/libertymarkets.png", url: "https://www.libertygroups.com/" },
    { name: "MYMAA Markets", logo: "assets/images/partners/mymarkets.png", url: "https://www.mymaamarkets.com/" },
    { name: "Nine Solutions", logo: "assets/images/partners/nine-solution.png", url: "https://nine.solutions/" },
    { name: "NXG Markets", logo: "assets/images/partners/nxg-markets.png", url: "https://www.nxgmarkets.com/" },
    { name: "Pipstone Capital", logo: "assets/images/partners/pipstones.png", url: "https://pipstonecapital.com/" },
    { name: "Premier Financial", logo: "assets/images/partners/premier-financial.png", url: "https://www.premierfinservices.com/" },
    { name: "Pride Funding", logo: "assets/images/partners/pride-funding.png", url: "https://thepride-funding.com/" },
    { name: "Prime X", logo: "assets/images/partners/primex.png", url: "https://www.primexcapital.com/en" },
    { name: "ProFX Club", logo: "assets/images/partners/hybridsolution.png", url: "https://www.profxclub.com/" },
    { name: "ProFX Media", logo: "assets/images/partners/profxmedia.png", url: "https://profxmedia.com/" },
    { name: "ProFX League", logo: "assets/images/partners/profxleague.png", url: "https://profxleague.com/" },
    { name: "PU Prime", logo: "assets/images/partners/puprime.png", url: "https://www.puprime.com/" },
    { name: "Radhika FX", logo: "assets/images/partners/radhika-fx.png", url: "https://www.radhikafx.com/" },
    { name: "Salma Markets", logo: "assets/images/partners/salma-markets.png", url: "https://www.salmamarkets.com/" },
    { name: "Scan Global", logo: "assets/images/partners/scan-global.png", url: "https://scanglobal.me/" },
    { name: "Setup FX", logo: "assets/images/partners/setupfx.png", url: "https://setupfx.com/" },
    { name: "STP Trading", logo: "assets/images/partners/spt-trading.png", url: "https://www.stptrading.io/" },
    { name: "Succedo Markets", logo: "assets/images/partners/succedo-markets.png", url: "https://succedomarkets.com/lander?oref=https%3A%2F%2Fprofxexpo.com%2F" },
    { name: "Supreme FX", logo: "assets/images/partners/supremefx.png", url: "https://supremefxtrading.com/" },
    { name: "Swiset", logo: "assets/images/partners/swiset.png", url: "https://swiset.com/" },
    { name: "Swiss", logo: "assets/images/partners/swiss.png", url: "https://sifxmarkets.sa.com/" },
    { name: "Taurex", logo: "assets/images/partners/taurex.png", url: "https://www.tradetaurex.com/" },
    { name: "TradeFX Funds", logo: "assets/images/partners/tradefx-funds.png", url: "https://tradefxfunds.com/" },
    { name: "Trade Ultra", logo: "assets/images/partners/tradeultra.png", url: "https://www.tradeultra.com/" },
    { name: "Uno FX", logo: "assets/images/partners/uno-fx.png", url: "https://unofx.university/" },
    { name: "Wizense Global", logo: "assets/images/partners/wizense-global.png", url: "https://wizensefx.com/" },
    { name: "XChief", logo: "assets/images/partners/xchief.png", url: "https://www.xchief.com/" },
    { name: "Xtreme Next", logo: "assets/images/partners/xtreme-next.png", url: "https://www.xtremenext.com/" },
    { name: "Yamarkets", logo: "assets/images/partners/yamarkets.png", url: "https://www.yamarkets.com/" },
    { name: "Zylostar", logo: "assets/images/partners/zylostar.png", url: "https://zylostar.com/" },
];



export default function TrustedPartners() {
    const [isPaused, setIsPaused] = React.useState(false);
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="bg-white py-5 overflow-hidden">
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
                    Our Partners
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="fw-light"
                    style={{ color: "#223645", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                    Trusted By{" "}
                    <span className="fw-semibold" style={{ color: "#e91e63" }}>
                        100+
                    </span>{" "}
                    Forex & Fintech
                    <br className="d-none d-md-block" />
                    <span className="fw-semibold"> Titans Worldwide</span>
                </motion.h2>
            </div>

            {/* Marquee */}
            <div
                className="position-relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradients */}
                <div
                    className="position-absolute top-0 start-0 h-100"
                    style={{
                        width: "80px",
                        background: "linear-gradient(to right, #fff, transparent)",
                        zIndex: 10,
                    }}
                />
                <div
                    className="position-absolute top-0 end-0 h-100"
                    style={{
                        width: "80px",
                        background: "linear-gradient(to left, #fff, transparent)",
                        zIndex: 10,
                    }}
                />

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {duplicatedPartners.map((partner, index) => (
                            <a
                                key={`${partner.name}-${index}`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="partner-card d-flex flex-column align-items-center justify-content-center px-4 px-md-5 py-4 rounded-4 text-decoration-none"
                            >
                                <div className="logo-box d-flex align-items-center justify-content-center">
                                    <img src={partner.logo} alt={partner.name} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
