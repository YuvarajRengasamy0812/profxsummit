import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
const speakersData = [
    {
        id: 1,
        name: "Khalid Al Abdulla",
        designation: "Head of UAE Trading",
        company: "Financial Market Online",
        image: "assets/images/speakers/1.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/john",
            instagram: "https://instagram.com/john"
        }
    },
    {
        id: 2,
        name: "Amira Soliman",
        designation: "Founder & Ceo",
        company: "Time Guardian | ATHAR",
        image: "assets/images/speakers/2.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/sarah",
            instagram: "https://instagram.com/sarah"
        }
    },
    {
        id: 3,
        name: "Tommaso Caratelli",
        designation: "Ceo",
        company: "Investetica Holding",
        image: "assets/images/speakers/3.jpg",
        socials: {
            linkedin: "#",
            instagram: "#"
        }
    },
    {
        id: 4,
        name: "Dawood Shah",
        designation: "Founder & Ceo",
        company: "Finxcart",
        image: "assets/images/speakers/4.jpg",
        socials: {
            linkedin: "#",
            instagram: "#"
        }
    },
    {
        id: 5,
        name: "Ahmed Tahsin",
        designation: "Founder & Ceo",
        company: "TIC - Tahsin Investment & Co",
        image: "assets/images/speakers/5.jpg",
        socials: {
            linkedin: "#",
            instagram: "#"
        }
    }
];


const Speakersection = () => {
    return (
        <>
            <section className="speakers">
                {/* Title */}
                <div className="text-center mb-2 px-3">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-uppercase fw-medium mb-3"
                        style={{ letterSpacing: "0.2em", fontSize: "0.85rem", color: "#e91e63" }}
                    >
                        PROFX SUMMIT 2026 SPEAKERS
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.10, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="fw-light"
                        style={{ color: "#223645", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                        OUR{" "}
                        <span className="fw-semibold" style={{ color: "#e91e63" }}>
                            SPEAKERS
                        </span>
                    </motion.h2>
                </div>
                <div className="container">
                    <div className="speaker-inner">
                        <div className="speaker-title text-center">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="title-content text-lg-center mb-4">
                                        <h4 className="mb-1">
                                            MEET OUR <span className="pink">Speakers: 30+ Industry Leaders & Experts</span>
                                        </h4>
                                        <p className="m-0">
                                            Expert from global finance, trading, FinTech, and Forex companies - CEOs, founders,
                                            regulators, and innovators. Filter, connect, and collaborate with thought-leaders shaping
                                            the future of global finance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="speaker-list text-center text-white">
                            <div className="row">
                                {speakersData.map((speaker) => (
                                    <div className="col-lg-3 col-md-6 p-2" key={speaker.id}>
                                        <div className="speaker-box position-relative overflow-hidden text-white" style={{ borderRadius: '25px' }}>

                                            <img
                                                className="speaker-image rounded w-100"
                                                src={speaker.image}
                                                alt={speaker.name}
                                            />

                                            {/* 👇 Small text overlay (always visible) */}
                                            <div className="profx-speakers-overlay">
                                                <h6 className="mb-0">{speaker.name}</h6>
                                                <span>{speaker.designation}</span>
                                                <small>{speaker.company}</small>
                                            </div>

                                            {/* 👇 Existing hover content (UNCHANGED) */}
                                            <div className="box-content position-absolute bottom-0 z-1">
                                                <h6 className="speaker-title d-block text-white pb-1">
                                                    <Link to="#">{speaker.name}</Link>
                                                </h6>

                                                <span className="speaker-post d-block pb-2">
                                                    {speaker.designation} <br />
                                                    {speaker.company}
                                                </span>

                                                {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                                    {Object.entries(speaker.socials).map(([icon, url], idx) => (
                                                        <li key={idx} className="d-inline-block">
                                                            <a href={url} target="_blank" rel="noreferrer" className="rounded d-block">
                                                                <i className={`fa fa-${icon}`}></i>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul> */}
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Speakersection