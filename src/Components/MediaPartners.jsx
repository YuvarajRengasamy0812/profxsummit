import React from 'react'
import { Link } from 'react-router-dom'

const mediaPartners = [
  {
    url: 'https://coinstelegram.com/',
    img: 'assets/images/partners/coins-telegram.png',
  },
  {
    url: 'https://www.coingabbar.com/?srsltid=AfmBOoohB4diKfxQ1cyobnAC4851gRkrf1l8RFhdGAoAo5AZe3JipX-B',
    img: 'assets/images/partners/coin-gabbar.png',
  },
  {
    url: 'https://www.financialmarkets.media/',
    img: 'assets/images/partners/financial-markets-media.png',
  },
  {
    url: 'https://cryptoken.media/',
    img: 'assets/images/partners/cryptoken.png',
  },
  {
    url: 'https://yourmindmedia.com/',
    img: 'assets/images/partners/ymm.png',
  },
  {
    url: 'https://coinscapture.com/',
    img: 'assets/images/partners/coins-capture.png',
  },
  {
    url: '#',
    img: 'assets/images/partners/cryptonomist.png',
  },
  {
    url: '#',
    img: 'assets/images/partners/coinnewsspan.png',
  },
]

const MediaPartners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partner-inner">
          <div className="partner-title text-center pb-6 w-lg-60 m-auto">
            <p className="mb-1 pink">OUR MEDIA PARTNERS</p>
            <h2 className="mb-1">
              MEDIA <span className="pink">PARTNERS</span>
            </h2>
            <p className="m-0">
              We are proud to collaborate with a diverse group of media partners.
            </p>
          </div>

          <div className="partner-img pb-6">
            <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5">
              {mediaPartners.map((partner, index) => (
                <div className="col p-0" key={index}>
                  <div className="p-2 partner-img-box text-center rounded">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={partner.img}
                        alt="partner-img"
                        className="opacity-75 w-lg-100 w-md-100 w-75"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partner-button text-center">
            <Link to="/Contact" className="btn">
              Become a Media Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaPartners
