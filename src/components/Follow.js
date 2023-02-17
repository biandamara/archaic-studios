import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Follow() {
  const responsive = {
    0: { items: 1.2 },
    568: { items: 2.1 },
    1024: { items: 2.8 },
    1440: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <img
        src="https://res.cloudinary.com/biandamara/image/upload/v1676660540/Archaic%20Studios/archaicstudios___244969353_1228413634329544_8254455490443440839_n_rmvinz.jpg"
        alt=""
        style={{ height: "20rem", backgroundPosition: "center" }}
      ></img>
    </div>,
    <div className="item" data-value="2">
      <img
        src="https://res.cloudinary.com/biandamara/image/upload/v1676660538/Archaic%20Studios/archaicstudios___240265381_859153874720408_4978689198263995173_n_cogyt8.jpg"
        alt=""
        style={{ height: "20rem" }}
      ></img>
    </div>,
    <div className="item" data-value="3">
      <img
        src="https://res.cloudinary.com/biandamara/image/upload/v1676660457/Archaic%20Studios/archaicstudios___241206080_215745677268992_7918503445075405240_n_dvb2tf.jpg"
        alt=""
        style={{ height: "20rem" }}
      ></img>
    </div>,
    <div className="item" data-value="4">
      <img
        src="https://res.cloudinary.com/biandamara/image/upload/v1676664751/Archaic%20Studios/archaicstudios___274753370_466580675015157_6206658946177490022_n_yuqdnc.jpg"
        alt=""
        style={{ height: "20rem" }}
      ></img>
    </div>,
    <div className="item" data-value="5">
      <img
        src="https://res.cloudinary.com/biandamara/image/upload/v1676665106/Archaic%20Studios/archaicstudios___240886674_1269039276900257_8401147822032068313_n_sfgrau.jpg"
        alt=""
        style={{ height: "20rem" }}
      ></img>
    </div>,
  ];

  return (
    <div className="container my-3">
      {/* header - start */}
      <div className="row align-items-center">
        <div className="col text-start">
          <h2>
            Follow us on <br className="my-3" /> Instagram
          </h2>
        </div>
        <div className="col text-end">
          <a href="https://www.instagram.com/archaicstudios__/">
            <button
              className="btn"
              style={{
                width: "7rem",
                border: "1px solid rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                fontSize: "0.7rem",
              }}
              type="button"
            >
              Follow us
            </button>
          </a>
        </div>
      </div>
      {/* header - end */}

      <hr className="mt-4" style={{ color: "black", width: "5rem" }} />

      {/* carousel - start */}
      <div className="mt-5">
        <AliceCarousel
          mouseTracking
          touchTracking
          items={items}
          responsive={responsive}
          // controlsStrategy="alternate"
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
      {/* carousel - end */}
    </div>
  );
}

export default Follow;
