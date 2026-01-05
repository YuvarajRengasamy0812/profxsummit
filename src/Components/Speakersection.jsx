import React from 'react'
import { Link } from 'react-router-dom'

const Speakersection = () => {
    return (
        <>
            <section className="speakers">
                <div className="container">
                    <div className="speaker-inner">
                        <div className="speaker-title text-center p-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="title-content text-lg-start mb-2">
                                        <p className="mb-1 pink"><b>PROFX SUMMIT 2026</b> SPEAKERS</p>
                                        <h2 className="mb-1">
                                            MEET OUR <span className="pink">Speakers: 100+ Industry Leaders & Experts</span>
                                        </h2>
                                        <p className="m-0">
                                            Curated from global finance, trading, FinTech, and blockchain companies - CEOs, founders,
                                            regulators, and innovators. Filter, connect, and collaborate with thought-leaders shaping
                                            the future of global finance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="speaker-button text-lg-end">
                                        <Link to="/Speakerlists" className="btn my-2">
                                            VIEW MORE SPEAKERS
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="speaker-list text-center text-white">
                            <div className="row">
                                {[1, 2, 3, 4].map((i) => (
                                    <div className="col-lg-3 col-md-6 p-2" key={i}>
                                        <div className="speaker-box position-relative overflow-hidden text-white">
                                            <img
                                                className="speaker-image rounded w-100"
                                                src={`assets/images/speakers/${i}.jpg`}
                                                alt={`speaker-${i}`}
                                            />
                                            <div className="box-content position-absolute bottom-0 z-1">
                                                <h6 className="speaker-title d-block text-white pb-1">
                                                    <Link to="/Speakerdetail">Speaker Name {i}</Link>
                                                </h6>
                                                <span className="speaker-post d-block pb-2">
                                                    Industry Expert
                                                </span>
                                                <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                                    {["facebook", "twitter", "linkedin", "instagram"].map((icon, idx) => (
                                                        <li key={idx} className="d-inline-block">
                                                            <a href="#" className="rounded d-block">
                                                                <i className={`fa fa-${icon}`}></i>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
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