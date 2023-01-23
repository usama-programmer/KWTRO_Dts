import React from "react";
import img1 from "../../assets/images/SNC1.jpg";
import img2 from "../../assets/images/SNC2.jpg";
import img3 from "../../assets/images/SNC3.jpg";
import "../product-and-services/treatment.css";

function SparesNConsumables() {
  return (
    <div className="spares__main__container">
      {/* <h1 style={{ color: "#079ED3", fontSize: "32px" }}>
        Spares And Consumables
      </h1> */}

      <div className="i-wrapper">
        <div className="i-left">
          <img src={img1} />
        </div>
        <div className="i-right">
          <h2 style={{ color: "#079ED3", display: "flex" }}>Membrane</h2>
          <ul style={{ fontSize: "14px" }}>
            <li>
              Membrane Housings (various pressure ratings), Spares and
              consumables
            </li>
            <li>Membranes</li>
            <li>R.O Antiscalents and membrane cleaning chemicals</li>
            <li>Dosing Pumps and controllers</li>
          </ul>
        </div>
      </div>

      <br />

      <div className="i-wrapper">
        <div className="i-left">
          <img src={img2} />
        </div>
        <div className="i-right">
          <h2 style={{ color: "#079ED3", display: "flex" }}>Vessels</h2>
          <ul style={{ fontSize: "14px" }}>
            <li>Codeline pressure vessels</li>
            <li>Structural composite vessels</li>
            <li>
              Fleck valves/ Siata valves / Magnum valves ( for Filters and
              softeners)
            </li>
          </ul>
        </div>
      </div>

      <br />

      <div className="i-wrapper" style={{ display: "flex" }}>
        <div className="i-left">
          <img src={img3} />
        </div>
        <div className="i-right">
          <h2 style={{ color: "#079ED3", display: "flex" }}>
            Other Accessories
          </h2>
          <ul style={{ fontSize: "14px" }}>
            <li>Antiscalents</li>
            <li>Membrane cleaners</li>
            <li>Sand, Gravel, Garnet and Anthracite</li>
            <li>Manganese green sand</li>
            <li>Activated carbon</li>
            <li>Softener resin</li>
            <li>Filter cartridges, filter bags</li>
            <li>Jumbo cartridge and housing</li>
            <li>Pleated cartridges</li>
            <li>Bag filters and housings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SparesNConsumables;
