import React from "react";
import { Collapse } from "antd";
import img1 from "../../assets/images/img1wt.jpg";
import img2 from "../../assets/images/img2wt.jpg";
import img3 from "../../assets/images/img3wt.jpg";

import img4 from "../../assets/images/img4wt.jpg";
import img5 from "../../assets/images/img5wt.jpg";
import img6 from "../../assets/images/img6wt.jpg";
import img7 from "../../assets/images/img7wt.jpg";
import img8 from "../../assets/images/img8wt.jpg";
import img9 from "../../assets/images/img9wt.jpg";
import img10 from "../../assets/images/img10wt.jpg";
import img11 from "../../assets/images/img11wt.jpg";
import img12 from "../../assets/images/img12wt.jpg";

import img13 from "../../assets/images/img13wt.jpg";
import img14 from "../../assets/images/img14wt.jpg";
import img15 from "../../assets/images/img15wt.jpg";
import img16 from "../../assets/images/img16wt.jpg";
// import "../info-centre-page/collapse.css";
import "../product-and-services/treatment.css";

const { Panel } = Collapse;

const WaterTreatment = () => {
  const genExtre = (name) => (
    <span style={{ color: "#079ED3", fontWeight: "bold" }}>{name}</span>
  );
  return (
    <Collapse
      className="fix"
      accordion={true}
      defaultActiveKey={["1"]}
      style={{ margin: "20px auto 20px auto", width: "100%", height: "100%" }}
    >
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("REVERSE OSMOSIS SYSTEMS")}
        key="1"
      >
        <div>
          <h1 className="services-page1-heading">Water Treatment</h1>
          <div>
            <img className="services-page1-image" src={img1} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Reverse osmosis, also known as hyper filtration, is used by
              Brackish Water Reverse Osmosis Systems to purify water and remove
              salts and other impurities. It is also capable of rejecting
              bacteria, sugars, proteins, particles, dyes, and other
              constituents that have a molecular weight of greater than 150-250
              Dalton.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Sea Water</h1>
          <div>
            <img className="services-page1-image" src={img2} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              From Water makers to Industrial Sized seawater reverse osmosis
              systems, we offer a full range of Seawater Desalination Reverse
              Osmosis Systems. <br />
              <br />
              Our seawater reverse osmosis systems feature advanced and high
              rejection Reverse Osmosis (R/O) technology. Our designs are
              state-of-the-art, optimizing efficiency, reliability, product
              water quality, and overall low cost per unit of water.
            </p>
          </div>
        </div>
        <br />

        <div>
          <h1 className="services-page1-heading">
            Skid mounted and containerized
          </h1>
          <div>
            <img className="services-page1-image" src={img3} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              We engineer any water treatment system in a containerized version
              with various available options.
              <br />
              {/* <br /> */}
              Containerization of a water treatment plant includes the container
              and complete installation of the plant including:
              <br />
              <br />
              <ul>
                <li>Interconnecting piping between components and systems</li>
                <li>
                  Cabling and wiring of instrumentation inside the container to
                  main control cabinet.
                </li>
                <li>Operations and Maintenance manuals</li>
                <li>General Arrangement 3D/2D CAD drawings</li>
              </ul>
            </p>
          </div>
        </div>
      </Panel>
      <Panel header={genExtre("WATER FILTERS")} key="2">
        <div>
          <h1 className="services-page1-heading">
            Multimedia / Sand / Dual Media Filter
          </h1>
          <div>
            <img className="services-page1-image" src={img4} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Multimedia Filter Systems also known as depth filters or turbidity
              filters contain two or more types of media and gravel
              under-bedding. The gravel is used as a support to keep smaller
              medias out of the distribution system and to stop channeling of
              water. Our multimedia system is designed for the removal of
              turbidity in the water caused by sand, silt, iron and oxidized
              manganese or sulfur. They are used in applications such as
              chlorination filtration systems, general turbidity removal and
              prior to ultraviolet sterilizers or water softeners.
            </p>
          </div>
        </div>
        <br />

        <div>
          <h1 className="services-page1-heading">Carbon Filter</h1>
          <div>
            <img className="services-page1-image" src={img5} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Carbon is a substance that has a long history of being used to
              absorb impurities and is perhaps the most powerful absorbent known
              to man. One pound of carbon contains a surface area of roughly 125
              acres and can absorb literally thousands of different chemicals.
              Activated carbon is carbon which has a slight electro-positive
              charge added to it, making it even more attractive to chemicals
              and impurities. As the water passes over the positively charged
              carbon surface, the negative ions of the contaminants are drawn to
              the surface of the carbon granules..
              <br />
              <br />
              Activated carbon filters used for home water treatment typically
              contain either granular activated carbon (GAC) or powdered block
              carbon. Although both are effective, carbon block filters
              generally have a higher contaminant removal ratio. The two most
              important factors affecting the efficiency of activated carbon
              filtration are the amount of carbon in the unit and the amount of
              time the contaminant spends in contact with it. The more carbon
              the better. Similarly, the lower the flow rate of the water, the
              more time that contaminants will be in contact with the carbon,
              and the more absorption that will take place. Particle size also
              affects removal rates.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Iron removal filter</h1>
          <div>
            <img className="services-page1-image" src={img6} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Most iron filtration systems operate on the principal of oxidizing
              the iron (oxidation) to convert it from a ferrous (dissolved or
              soluble) to a ferric or undissolved state. Once in the ferric
              state, iron can be filtered.
              <br />
              <br /> Water filters are the most widely used equipment in
              removing iron. Its popularity comes from its versatility due to
              the various media products available and the process involved with
              each media.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Bag Filter</h1>
          <div>
            <img className="services-page1-image" src={img7} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Bag Filters are the workhorse of the filtration industry. Finer
              and more carefully controlled construction in the manufacturing of
              filter bags have moved bag filters into filtration areas that they
              had never seen before. In general, Felt Type Filter Bags are finer
              and offer higher solids loading capacity at 150 microns and below.
              Above 150 Microns Mesh Type Filter Bags dominate in their more
              traditional straining applications. Most Bag filters are also
              designed disposable, which means that they have to be replaced
              when the filter is clogged.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Automatic and manual Control valves
          </h1>
          <div>
            <img className="services-page1-image" src={img8} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              We offer more than 20 models with 90 different options and over
              1,000 configurations. That way, you have a valve that sets you
              apart – something unique to use as you target specific customer
              needs.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Self Cleaning Filters</h1>
          <div>
            <img className="services-page1-image" src={img9} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Self-cleaning water filters, automatic water filters and
              strainers, for use as industrial water filters, irrigation
              filters, cooling tower filters and more.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Centrifugal Separators</h1>
          <div>
            <img className="services-page1-image" src={img10} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Centrifugal Separators employ centrifugal action to remove
              troublesome solids from liquids which will:
              <br />
              <br />
              <ul>
                <li>Extend the effective life of process liquids.</li>
                <li>
                  Protect process equipment from abrasive wear and fouling.
                </li>
                <li>Control or eliminate waste/solids.</li>
                <li>Reduce downtime and maintenance.</li>
                <li>
                  Keep your fluids systems operating at optimum efficiency.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Ultrafiltration</h1>
          <div>
            <img className="services-page1-image" src={img11} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Ultrafiltration (UF) is a variety of membrane filtration in which
              hydrostatic pressure forces a liquid against a semipermeable
              membrane. Suspended solids and solutes of high molecular weight
              are retained, while water and low molecular weight solutes pass
              through the membrane. This separation process is used in industry
              and research for purifying and concentrating macromolecular (103 –
              106 Da) solutions, especially protein solutions. Ultrafiltration
              is not fundamentally different from microfiltration or
              nanofiltration, except in terms of the size of the molecules it
              retains. Ultrafiltration is applied in cross-flow or dead-end mode
              and separation in ultrafiltration undergoes concentration
              polarization.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Nano filtration</h1>
          <div>
            <img className="services-page1-image" src={img12} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              Nanofiltration is a relatively recent membrane filtration process
              used most often with low total dissolved solids water such as
              surface water and fresh groundwater, with the purpose of softening
              (polyvalent cation removal) and removal of disinfection by-product
              precursors such as natural organic matter and synthetic organic
              matter. <br /> <br />
              Nanofiltration is also becoming more widely used in food
              processing applications such as dairy, for simultaneous
              concentration and partial (monovalent ion) demineralisation.
            </p>
          </div>
        </div>
      </Panel>
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("WATER SOFTENERS")}
        key="3"
      >
        <div>
          <h1 className="services-page1-heading">Water softeners</h1>

          <div className="services-page1">
            <p className="services-page1-text">
              We call water “hard” if it contains a lot of calcium or magnesium
              dissolved in it. Hard water causes two problems:.
              <br />
              <ul>
                <li>
                  It can cause “scale” to form on the inside of pipes, water
                  heaters, tea kettles and so on. The calcium and magnesium
                  precipitate out of the water and stick to things. The scale
                  doesn’t conduct heat well and it also reduces the flow through
                  pipes. Eventually, pipes can become completely clogged.
                </li>
                <li>
                  It reacts with soap to form a sticky scum, and also reduces
                  the soap’s ability to lather. Since most of us like to wash
                  with soap, hard water makes a bath or shower less productive..
                </li>
              </ul>
              <br />
              <img className="services-page1-image" src={img13} />
              <div className="services-page1">
                <p>
                  The solution to hard water is either to filter the water by
                  distillation or reverse osmosis to remove the calcium and
                  magnesium, or to use a water softener. Filtration would be
                  extremely expensive to use for all the water in a house, so
                  water softener is usually a less costly solution.
                  <br /> <br />
                  The idea behind a water softener is simple. The calcium and
                  magnesium ions in the water are replaced with sodium ions.
                  Since sodium does not precipitate out in pipes or react badly
                  with soap, both of the problems of hard water are eliminated.
                  To do the ion replacement, the water in the house runs through
                  a bed of small plastic beads or through a chemical matrix
                  called zeolite. The beads or zeolite are covered with sodium
                  ions. As the water flows past the sodium ions, they swap
                  places with the calcium and magnesium ions. Eventually, the
                  beads or zeolite contain nothing but calcium and magnesium and
                  no sodium, and at this point they stop softening the water. It
                  is then time to regenerate the beads or zeolite.
                </p>
              </div>
              <br />
              {/* <br /> */}
              <p>
                Regeneration involves soaking the beads or zeolite in a stream
                of sodium ions. Salt is sodium chloride, so the water softener
                mixes up a very strong brine solution and flushes it through the
                zeolite or beads (this is why you load up a water softener with
                salt). The strong brine displaces all of the calcium and
                magnesium that has built up in the zeolite or beads and replaces
                it again with sodium. The remaining brine plus all of the
                calcium and magnesium is flushed out through a drain pipe.
                Regeneration can create a lot of salty water, by the way —
                something like 25 gallons (95 liters).
              </p>
            </p>
          </div>
        </div>
      </Panel>
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("WATER DEIONISERS")}
        key="4"
      >
        <div>
          <h1 className="services-page1-heading">
            Demineralizers, Mixed Bed & Separate Bed
          </h1>
          <div>
            <img className="services-page1-image" src={img14} />
          </div>
          <div className="services-page1">
            <p className="services-page1-text">
              We are a leading manufacturer of industrial water demineralizer
              and deionizer (DI) equipment designed for the economical and
              efficient removal of dissolved salts and minerals. These water
              treatment systems produce high purity water for commercial and
              industrial applications. Our design manufactures a complete line
              of DI systems to meet your water quality requirements.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">De Alkalinizer</h1>
          <img className="services-page1-image" src={img15} />
          <div className="services-page1">
            <p className="services-page1-text">
              Dealkalization refers to the removal of alkalinity ions from
              water. There are different methods that can be used for alkalinity
              removal, chloride cycle. Dealkalization is perhaps the simplest
              and can prove to be very cost effective in many situations.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Electrodeionization (EDI)</h1>
          <img className="services-page1-image" src={img16} />
          <div className="services-page1">
            <p className="services-page1-text">
              Electrodeionization (EDI) is usually considered a water treatment
              technology that utilizes an electrode to ionize water atoms and
              separate dissolved ions (impurities) from water. It differs from
              other water purification technologies, that it is done without the
              use of chemicals and is usually a tertiary treatment to reverse
              osmosis(RO).
            </p>
          </div>
        </div>
        <br />
      </Panel>
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("WATER DISINFECTION")}
        key="5"
      >
        <div>
          <h1 className="services-page1-heading">Chlorination</h1>
          <img className="services-page1-image" src={img14} />
          <div className="services-page1">
            <p className="services-page1-text">
              Chlorination is the process of adding the element Chlorine to
              water as a method of water purification to make it fit for human
              consumption as drinking water. Water which has been treated with
              chlorine is effective in preventing the spread of water born
              disease.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">UV systems</h1>
          <img className="services-page1-image" src={img15} />
          <div className="services-page1">
            <p className="services-page1-text">
              Our tried and tested systems for the treatment of drinking water
              and process water: also ideal for reduction of ozone, chlorine or
              chlorine dioxide in production water in the food and cosmetic
              industry, and for reduction of chlorine in smaller swimming pools.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Chlorine dioxide systems</h1>
          <img className="services-page1-image" src={img16} />
          <div className="services-page1">
            <p className="services-page1-text">
              Chlorine dioxide is an extremely reactive gas, because of its
              instability cannot be stored, and must only be produced in the
              required quantities in special plants on the site where it is to
              be used. Chlorine dioxide offers a number of advantages for water
              disinfection compared with chlorine, the disinfectant mainly used.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Electrolytic chlorine generators
          </h1>
          <img className="services-page1-image" src={img16} />
          <div className="services-page1">
            <p className="services-page1-text">
              This generator produces chlorine directly in to the pool or spa
              from a low concentration of salt added to the pool water. (The
              pool has salt added to it). Electrolysis takes place in an
              electrolytic cell installed “in-line” in the re-circulation
              system. Thus the name. Inside the cell are layers of plates that
              are electrically charged by a separate power supply. Depending on
              the generator you need to maintain a salt concentration of about
              2500-6000 parts per million in the pool or spa for the unit to
              operate effectively. This means adding 100-250 kg of salt per
              40,000 liters of water .
            </p>
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default WaterTreatment;
