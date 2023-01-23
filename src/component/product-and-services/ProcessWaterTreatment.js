import React from "react";
import { Collapse } from "antd";
import p2p1 from "../../assets/images/p2p1.jpg";
import p2p2 from "../../assets/images/p2p2.jpg";
import p2p3 from "../../assets/images/p2p3.jpg";
import p2p4 from "../../assets/images/p2p4.jpg";
import p2p5 from "../../assets/images/p2p5.jpg";
import p2p6 from "../../assets/images/p2p6.jpg";
import "../product-and-services/treatment.css";

const { Panel } = Collapse;

const ProcessWaterTreatment = () => {
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
        header={genExtre("CHILLED WATER CIRCUITS")}
        key="1"
      >
        <div>
          <h1 className="services-page1-heading">
            Cleaning chemical ( neutral pH cleaners)
          </h1>
          <img className="services-page1-image" src={p2p1} />
          <div className="services-page1">
            <p className="services-page1-text">
              Most chillers use water for heat transfer, so the water must be
              properly treated to prevent scale, corrosion and biological
              growth. A one-time chemical treatment is required for closed-water
              systems, which are typical of chilled-water systems connected to
              the chiller evaporator.
              <br />
              <br />
              Open systems typically are used for condenser-water systems
              connected to the chiller condenser. Condenser systems that use
              sources such as cooling towers require continuous chemical water
              treatment. Managers should work with a chemical-treatment vendor
              familiar with local water supplies and can provide full-service
              maintenance for all facility water systems.
            </p>
          </div>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Corrosion Inhibitor (Nitrate and Molybdate based)
          </h1>
          <img className="services-page1-image" src={p2p2} />
          <div className="services-page1">
            <p className="services-page1-text">
              Most chillers use water for heat transfer, so the water must be
              properly treated to prevent scale, corrosion and biological
              growth. A one-time chemical treatment is required for closed-water
              systems, which are typical of chilled-water systems connected to
              the chiller evaporator.
              <br />
              <br />
              Open systems typically are used for condenser-water systems
              connected to the chiller condenser. Condenser systems that use
              sources such as cooling towers require continuous chemical water
              treatment. Managers should work with a chemical-treatment vendor
              familiar with local water supplies and can provide full-service
              maintenance for all facility water systems.
            </p>
          </div>
        </div>
        <br />

        <div>
          <img className="services-page1-image" src={p2p3} />
          <h1 className="services-page1-heading">Micro Biocide</h1>
          <div className="services-page1">
            <p className="services-page1-text">
              Water Treatment Microbiocide is a synergistic blend of
              glutaraldehyde and quaternary ammonium salt which is specially
              formulated to provide a surface-active product that can clean and
              penetrate microbiologically-fouled surfaces. It is effective in
              controlling slime-forming and sulfate-reducing bacteria and algae.
              The ease of handling and high potency of Water Treatment
              Microbiocide facilitate its use in recirculating cooling towers,
              air washer systems, recirculating process water and closed loop
              cooling systems. It kills microbes such as bacteria, viruses, and
              fungi and used in disinfectant or antibacterial products.
            </p>
          </div>
        </div>
        <br />

        <div>
          <img className="services-page1-image" src={p2p4} />
          <h1 className="services-page1-heading">Manual Dosing Pot</h1>
          <div className="services-page1">
            <p className="services-page1-text">
              Range of Dosing Pots for adding liquid chemicals such as corrosion
              inhibitors and anti freeze solutions – to sealed heating and
              chilled circuits. The Pot should be connected between the main
              flow and return pipes, with the flow in at the bottom (PF) to aid
              venting.
            </p>
          </div>
        </div>

        <div>
          <img className="services-page1-image" src={p2p5} />
          <h1 className="services-page1-heading">Automatic Dosing System</h1>
          <div className="services-page1">
            <p className="services-page1-text">
              By the use of dosing systems the dosing task becomes increasingly
              easier. Pre-mounted complete solutions made by ProMinent are
              immediately available and ready for the use in important
              applications of dosage. Sensor technology, controllers and
              metering pumps form a unit with the necessary tanks and are ready
              for operation without installation work.
              <br />
              <br />
              Dosing systems have three main advantages for the dosage of fluids
              compared to single components:
            </p>
          </div>
          <div>
            <ul>
              <li>Only one supplier and contact partner</li>
              <li>No interface problems between single components</li>
              <li>
                No own mounting works necessary. On demand, the whole system
                will be supplied as premounted and ready for operation or it
                will be commissioned by our technicians at the spot.
              </li>
            </ul>
            <p>
              Our customers are provided a final solution that has only to be
              connected to hydraulic and electrical supply lines. On demand,
              even that will be effected by ProMinent.
              <br />
              <br />
              All dosing systems are produced in our own factories, i.e. not
              only the main components such as metering pumps, controllers,
              sensor technology and tanks but also the mounting of the systems
              is effected from ProMinent staff. Thus ProMinent Quality is
              granted.
            </p>
          </div>
        </div>

        <div>
          <img className="services-page1-image" src={p2p6} />
          <h1 className="services-page1-heading">Side Stream filtration</h1>
          <div className="services-page1">
            <p className="services-page1-text">
              The most effective filter system for cooling towers and process
              water is a permanent media unit with side stream filtration. With
              side-stream filtration, a portion of the water filters
              continuously, while the whole system is filtered every hour.
              Side-stream filtration works on the principle that continuous
              particle removal will keep the system clean. The filtration goal
              is not to make drinking water but to remove the fine dirt, dust,
              smoke and organic particles that collect in water.
            </p>
          </div>
        </div>

        <div>
          <h1 className="services-page1-heading">Flushing Operation</h1>
          <div className="services-page1">
            {/* <img className="services-page1-image" src={p2p4} /> */}
            <p className="services-page1-text">
              The CHILLED system will be flushed with a cleansing agent. Then
              when the entire agent is removed, a corrosion inhibitor will be
              added to the heating/chilled systems.
              <br />
              <br />
              Rectifying dirty/ Turbid System
            </p>
          </div>
          <div>
            <h1 className="services-page1-heading">Test Kits</h1>
            <p>Lovibond Domestic Test Kits & Reagents</p>
          </div>
        </div>
      </Panel>
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("CONDENSOR WATER CIRCUITS")}
        key="2"
      >
        <div className="span-div">
          <span>® Scale / Corrosion Inhibitor</span>
          <p>Lovibond Domestic Test Kits & Reagents</p>
          <br />

          <span>® Micro Biocides</span>
          <p>Products to control a broad spectrum of organic microorganisms</p>

          <br />
          <span>® Dispersant</span>
          <p>
            When used appropriately, dispersants can be an effective method of
            response to an oil spill. They are capable of rapidly removing large
            amounts of certain oil types from the sea surface by transferring it
            into the water column.
          </p>

          <br />
          <span>® Decaling chemical</span>
          <p>Heat exchanger treatment chemicals</p>
          <br />

          <span>® Automatic Dosing System</span>
          <p>Prominnet dosing system</p>
          <br />

          <span>® Side Stream / Full Stream Filtration</span>
          <p>
            The most effective filter system for cooling towers and process
            water is a permanent media unit with side stream filtration. With
            side-stream filtration, a portion of the water filters continuously,
            while the whole system is filtered every hour. Side-stream
            filtration works on the principle that continuous particle removal
            will keep the system clean. The filtration goal is not to make
            drinking water but to remove the fine dirt, dust, smoke and organic
            particles that collect in water.
          </p>
          <br />

          <span>® Flushing operation</span>
          <p>
            The CHILLED system will be flushed with a cleansing agent. Then when
            the entire agent is removed, a corrosion inhibitor will be added to
            the heating/chilled systems.
          </p>
          <br />
          <span>® Cooling Towers</span>
          <p>Mixed</p>
          <br />

          <span>® Test Kits</span>
          <p>Lovibond Domestic Test Kits & Reagents</p>
        </div>
      </Panel>
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("BOILER FEED WATER")}
        key="3"
      >
        <div>
          <h1 className="services-page1-heading">Oxygen Scavenger</h1>
          <p>
            Oxygen is a highly reactive gaseous element. In the presence of
            steel, the corrosion rate of oxygen doubles for each 30°F rise in
            temperature. For example, in a boiler system operating at 400 psig
            and 444°F, the corrosion rate for oxygen is 256 times more reactive
            than at room temperature. Oxygen forms localized corrosion areas
            referred to as “pits.” This distinctive formation is readily
            distinguishable from acid attack, caustic gouging or chelate
            corrosion Oxygen pits can rapidly “drill” through metal surfaces,
            leading to metal fatigue and failure.
            <br />
            <br />
            Oxygen control is generally both a mechanical and chemical process.
            The majority of oxygen in the boiler feedwater is typically reduced
            to less than 20 parts per billion (ppb) by heating the water to
            reduce its solubility and releasing it out of the system via venting
            (deaeration). Since even very low levels of oxygen will cause
            corrosion, a chemical scavenger is used to supplement mechanical
            eaeration to reduce the level to zero.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Scale and Corrosion Inhibitor
          </h1>
          <p>
            The goal of any water treatment programme for a chilled water system
            is minimizing corrosion and prevention of metal loss and the
            formation of corrosion products.
            <br />
            <br />
            The relatively low make-up to these systems makes this objective
            easily attainable. Once the corrosion inhibitor is added, it will
            passivate the metal surface and remain in the system, protecting it
            from further attack, therefore making high-level corrosion control
            possible at an economical cost.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Condensate line corrosion Inhibitor
          </h1>
          <p>
            Condensate is steam that has been returned to its liquid state.
            Steam, which is manufactured in the boiler, is used for various
            processes. After the steam is used, it is condensed to water and
            returns to the preboiler system through a series of pipes and
            condensate return equipment. Depending on the plant, the condensate
            system can be fairly small or very extensive in size.
            <br />
            <br />
            As water returns to the boiler from plant processes that are distant
            from the boiler, contamination by process materials or leakage in
            the system can occur. Control of the condensate system is critical
            to the overall operation of the boiler. If the condensate system is
            not protected, corrosion results. Corrosion eats away at the metal
            in the pipes and equipment in the system. This can cause leaks in
            process equipment that can result in a process shutdown
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">pH Builder</h1>
          <p>
            pH Adjusters – our range of traditional and technically advanced
            boiler water treatment chemicals includes a number of pH adjusters.
            These high performance additives have been specifically developed
            for use across a range of process and industrial boiler treatment
            applications.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Antifoam</h1>
          <p>
            A <span>defoamer </span>or an <span>anti-foaming</span> agent is a
            chemical additive that reduces and hinders the formation of foam in
            industrial process liquids. The terms anti-foam agent and defoamer
            are often used interchangeably. A defoamer is normally used in
            industrial processes to increase speed and reduce other problems. It
            addresses both problems with surface foam and entrained or entrapped
            air. A wide variety of chemical formulas are available to promote
            coalescence of foam.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Hydrazine dosing system</h1>
          <p>
            Hydrazin is a dosing system for the preparation and dosing of
            hydrazine solution. Hydracine is used as corrosion inhibitor in
            water and vapour systems. Due to its carcinogen effect, special
            preparation and metering plants are required. ProMinent DULCODOS®
            Hydrazin preparation and dosing systems are type-examination tested
            and approved by the government safety organization for the chemical
            industry.
            <br />
            <br />
            Hydracine has a hydrogen binding effect, it is vapour volatile and
            encourages the formation of protectory films on steel surfaces. As
            hydracine is carcinogenic, its decanting and metering systems must
            be gas-proof so that no hydracine vapours can escape. Our systems
            come up to these requirements.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Dosing pumps for chemical feeding
          </h1>
          <p>
            Prominent pump details
            <br />
            Metering pumps are used wherever fluids must be dosed into a medium
            with a highest possible grade of accuracy with a defined volume and
            within a defined time period.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Automatic TDS and conductivity controllers
          </h1>
          <p>Prominent controllers</p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Automatic Blowdown Systems</h1>
          <p>
            Even with the best pretreatment programs, boiler feed water often
            contains some degree of impurities, such as suspended and dissolved
            solids. The impurities can remain and accumulate inside the boiler
            as the boiler operation continues. The increasing concentration of
            dissolved solids may lead to carryover of boiler water into the
            steam, causing damage to piping, steam traps and even process
            equipment. The increasing concentration of suspended solids can form
            sludge, which impairs boiler efficiency and heat transfer
            capability.
            <br />
            To avoid boiler problems, water must be periodically discharged or
            “blown down” from the boiler to control the concentrations of
            suspended and total dissolved solids in the boiler. Surface water
            blowdown is often done continuously to reduce the level of dissolved
            solids, and bottom blowdown is performed periodically to remove
            sludge from the bottom of the boiler.
            <br />
            The importance of boiler blowdown is often overlooked. Improper
            blowdown can cause increased fuel consumption, additional chemical
            treatment requirements, and heat loss. In addition, the blowdown
            water has the same temperature and pressure as the boiler water.
            This blowdown heat can be recovered and reused in the boiler
            operations.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">Softener salt</h1>
          <p>
            Water softener salt is a product that removes ions from water that
            make water hard. Hard water refers to water with above average
            mineral content. This typically means calcium (Ca) and magnesium
            (Mg). Higher amounts of dissolved calcium and magnesium in water
            make the water less able to dissolve other solutes, such as soap.
            Hard water can also lead to clogged pipes due to increased lime
            scale build-ups. Lime scale build-ups make heating less efficient
            and produce more wear and tear on pipes and water dependent
            household machines, such as dishwashers and laundry machines.
          </p>
        </div>
        <br />
        <div>
          <h1 className="services-page1-heading">
            Softener for Boiler feed water
          </h1>
          <p>
            Boiler Water Treatment – Continuing our look at steam boilers and
            boiler water treatment problems we look at issues that surround the
            accumulation of hardness salts and preventing scale in boiler
            systems. We examine the problems caused by the accumulation of
            scale, hardness salts and how to prevent them using equipment and
            specialist antiscalants and scale inhibitors.
          </p>
        </div>
        <br />

        <div>
          <h1 className="services-page1-heading">Resins for Softner</h1>
          <p>
            The <span style={{ fontWeight: "bold" }}>water softener resin</span>{" "}
            is an integral, non-expendable part of a water softener.
            <br />
            In fact, it is the central factor that is crucial to the softening
            of what was once hard water so that it can be used by the household.
            <br />
            To summarize, the resin is responsible for removing the calcium and
            magnesium ions from the hard water. It also does the job of swapping
            sodium ions into the water that is now saturated of its calcium and
            magnesium ions..
          </p>
        </div>
      </Panel>
      <Panel
        // style={{ color: "red" }}
        className="collapse-heading"
        header={genExtre("POTABLE WATER")}
        key="4"
      >
        <div>
          <p>
            The resin acts like a pseudo-filter that prevents the magnesium and
            calcium ions from remaining in the hard water that flows into the
            mineral tank.
          </p>
          <h1 className="services-page1-heading">a) Corrosion Inhibitor</h1>
          <p>
            The goal of any water treatment programme for a chilled water system
            is minimizing corrosion and prevention of metal loss and the
            formation of corrosion products.
            <br />
            <br />
            The relatively low make-up to these systems makes this objective
            easily attainable. Once the corrosion inhibitor is added, it will
            passivate the metal surface and remain in the system, protecting it
            from further attack, therefore making high-level corrosion control
            possible at an economical cost.
          </p>
          <br />
          <h1 className="services-page1-heading">
            b) Silicate / phosphate based
          </h1>
          <p>Disinfectant</p>
          <br />
          <h1 className="services-page1-heading">
            ® Automatic dosing system for chlorine and corrosion Inhibitor
          </h1>
          <p>Prominent pump details</p>
          <br />
          <h1 className="services-page1-heading">
            ® pH and chlorine measurement and control for potable water.
          </h1>
          <p>Prominent controller details</p>
          <br />
          <h1 className="services-page1-heading">® Chlorine dioxide systems</h1>
          <p>
            Chlorine Dioxide generators provide an alternative method of
            disinfection to storage of bulk chlorine or pressurized chlorine
            gas. A chlorine dioxide generator utilizing an automated vacuum feed
            system minimizes the safety concerns ordinarily associated with
            storing and using bulk sodium hypochlorite, or chlorine gas.
          </p>
          <br />
          <h1 className="services-page1-heading">
            ® Automatic dosing system for chlorine and corrosion Inhibitor
          </h1>
          <p>Prominent pump details</p>
          <br />
          <h1 className="services-page1-heading">® Ozone Generators</h1>
          <p>
            Ozone has been used for disinfection of drinking water in the
            Municipal Water Industry in Europe for over 100 years and is used by
            a large number of Water Companies, where ozone generator capacities
            in excess of 100 kg/h are common.
          </p>
          <br />
          <h1 className="services-page1-heading">
            ® Electrolytic chlorine Generators
          </h1>
          <p>
            This generator produces chlorine directly in to the pool or spa from
            a low concentration of salt added to the pool water. (The pool has
            salt added to it). Electrolysis takes place in an electrolytic cell
            installed “in-line” in the recirculation system. Thus the name.
            Inside the cell are layers of plates that are electrically charged
            by a separate power supply. Depending on the generator you need to
            maintain a salt concentration of about 2500-6000 parts per million
            in the pool or spa for the unit to operate effectively. This means
            adding 100-250 kg of salt per 40,000 litres of water.
          </p>
          <br />
          <h1 className="services-page1-heading">® UV Sterilizers</h1>
          <p>
            The story of how ultraviolet (UV) light can guarantee safe drinking
            water is interesting. Many years ago scientists discovered that a
            special wavelength of UV light can kill disease-causing pathogens in
            our drinking water by attacking the cell DNA.
            <br />
            <br />
            It was discovered that UV light can effectively destroy all common
            bacteria, viruses and spores which are regularly found in drinking
            water including E.coli, coliform, hepatitis, influenza, cholera,
            tuberculosis, legionella, salmonella, anthrax, cryptosporidium,
            giardia and many more. And UV light does all this without damaging
            our environment, and without any risk of overdose whatsoever.
            <br />
            <br />
            Everyday we hear news of contaminated water supplies and boil-water
            orders being issued. How can you protect yourself and your family?
          </p>
          <br />
          <h1 className="services-page1-heading">
            ® Flow proportional dosing system
          </h1>
          <p>
            This Chemical Injection System controls the chemistry of some
            process fluids in order to reduce or to prevent corrosion or
            decomposition. Oxygen Scavenger is continuously injected into the
            feed-water stream in order to reduce the amount of 02 remaining
            downstream, the DE-aeration treatment of feed-water and into the
            condensate stream to reduce the corrosion problems. The scavenger
            solution is intermittently injected into the closed cooling water
            system by a common scavenger injection hardware. The dosing pumps
            are automatically controlled by a flow signal from the feed-water
            system and by residual 02 concentration signal. Ammonia is
            continuously injected into the condensate extraction pumps
            discharge. The dosing pumps are automatically controlled by a flow
            signal from the condensate system and by pH signal. Sodium Phosphate
            is injected to transform the silica content of the boiler water into
            Sodium Silicates. In case of raw water inlet into the condenser,
            Calcium and Magnesium salts are transformed into non-adherent
            precipitates.
          </p>
          <br />
          <h1 className="services-page1-heading">
            ® Polymer preparation and dosing system
          </h1>
          <p>
            CAP Series automatic polymer preparation system is designed for
            providing liquid polymer for continuous sludge dewatering equipment
            such as belt filter-press or decanter (centrifuge).
            <br />
            <br />
            Four models available from production rate 750, 1500, 3000, 6000
            liter/hour. CAP Series is completed with mixing tank, ageing tank,
            storage tank, stirrers, powder-hopper, screw-feeder, level
            electrodes, control panel and valves. CAP Series pre-wired and ready
            for use.
          </p>
        </div>
      </Panel>
      <Panel
        className="collapse-heading"
        header={genExtre("SWIMMING POOL")}
        key="5"
      >
        <div>
          <h1 className="services-page1-heading">® Disinfectants</h1>
          <br />
          <h1 className="services-page1-heading">
            a. Calcium Hypochlorite ( granular)
          </h1>

          <p>
            Calcium hypochlorite is a chemical compound with formula Ca(ClO)2.
            It is widely used for water treatment and as a bleaching agent
            (bleaching powder). This chemical is considered to be relatively
            stable and has greater available chlorine than sodium hypochlorite
            (liquid bleach).
            <br />
            <br />
            <h1 className="services-page1-heading">
              b. Stabilized chlorine (granular)
            </h1>
            Chlorine stabilizer or conditioner (cyanuric acid) is used, in
            outdoor chlorine-maintained swimming pools, as a means of helping to
            protect the chlorine from being destroyed by the Sun’s ultra-violet
            rays.
          </p>
        </div>
      </Panel>
      <Panel
        className="collapse-heading"
        header={genExtre("CHLORINE TABLETS")}
        key="6"
      >
        <div>
          <p>
            Properly maintaining pool water chemistry is perhaps the most
            important aspect of maintaining a swimming pool. Proper water
            chemistry is required to keep a swimming pool safe and clean for
            swimmers. Maintaining a swimming pool’s chemicals can save pool
            owners hundreds of dollars per year, and endless hours of time.
            Armed with a basic understanding of swimming pool chemistry, and by
            following a few simple steps, any pool owner can maintain their own
            swimming pool with the same results as the high priced
            professionals.
          </p>
          <h1 className="services-page1-heading">d. Bromine Tablets</h1>
          <p>
            Bromine tablets slowly dissolve in water to provide active bromine
            sanitiser in the form of hypobromous acid. Also there is a chlorine
            content in the most commonly available tablets made from
            1-bromo-3-chloro-5,5-dimethylhydantoin (Often abbreviated as BCDMH).
            This regenerates the hypbromous acid from bromine residues.
          </p>
          <br />
          <h1 className="services-page1-heading">® pH Correction chemicals</h1>
          <p>
            Most chemical dosing systems, particularly when incorporated into
            wastewater and water treatment processes require a high degree of
            automation and control. Our expertise lies in providing clients with
            complete chemical dosing packages including quality dosing pumps, pH
            controllers, control systems and other accessories. Our specialty is
            the design and construction of skid mounted dosing equipment.
          </p>
          <br />
          <h1 className="services-page1-heading">® Algaecides</h1>
          <p>
            An algaecide or algicide is a substance used for killing and
            preventing the growth of algae
          </p>
          <br />
          <h1 className="services-page1-heading">
            ® Flocculants and Coagulants
          </h1>
          <p>
            Coagulants and flocculant’s are formulated to assist in the
            solids/liquid separation of suspended particles in solution. Such
            particles are characteristically very small and the suspended
            stability of such particles (colloidal complex) is due to both their
            small size and to the electrical charge between particles.
            Conditioning a solution to promote the removal of suspended
            particles requires chemical coagulation and/or flocculation.
          </p>
          <br />
          <h1 className="services-page1-heading">® Test Kits</h1>
        </div>
      </Panel>
      <Panel
        className="collapse-heading"
        header={genExtre("CHEMICAL DOSING SYSTEMS")}
        key="7"
      >
        <div>
          <ul>
            <li>Dosing pump and controller</li>
            <li>Automatic pH and chlorine dosing Systems</li>
            <li>Chemical Tanks</li>
            <li>Electrical and Manual Stirrers</li>
            <li>Automatic pH and Bromine System</li>
          </ul>
        </div>
      </Panel>
      <Panel
        className="collapse-heading"
        header={genExtre("LAB INSTRUMENTS & TEST KITS")}
        key="8"
      >
        <div>
          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>1. pH meter</h1>
          <p>
            A pH meter is an electronic instrument used to measure the pH
            (acidity or alkalinity) of a liquid (though special probes are
            sometimes used to measure the pH of semi-solid substances). A
            typical pH meter consists of a special measuring probe (a glass
            electrode) connected to an electronic meter that measures and
            displays the pH reading
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            2. Conductivity meter
          </h1>
          <p>
            An electrical conductivity meter (EC meter) measures the electrical
            conductivity in a solution. Commonly used in hydroponics,
            aquaculture and freshwater systems to monitor the amount of
            nutrients, salts or impurities in the water.
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            3. Spectro Photometer
          </h1>
          <p>
            Spectrophotometry involves the use of a spectrophotometer. A
            spectrophotometer is a photometer (a device for measuring light
            intensity) that can measure intensity as a function of the color (or
            more specifically the wavelength) of light. Important features of
            spectrophotometers are spectral bandwidth and linear range of
            absorption measurement.
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            4. Turbidity Meter
          </h1>
          <p>
            Applications for the turbidity sensors include: water quality
            testing and management, river monitoring, stream measurement,
            reservoir water quality testing, groundwater testing, water and
            wastewater treatment, and effluent and industrial control.
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            5. BOD Measurement System
          </h1>
          <p>
            Biological Oxygen Demand (BOD) is an important parameter in water
            resource management. BOD is a parameter used to measure the quality
            of water and treatment results in wastewater. In addition, BOD
            analysis potential is used in the planning and design wastewater
            treatment facilities.
            <br />
            <br />
            In routine use BOD determination is used to check the wastewater in
            the inflow and discharge of wastewater treatment plants. Depending
            on the measurement site and type of wastewater the BOD value can lie
            between a few mg/l and several thousand mg/l. Several methods are
            available for carrying out the measurement
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            6. Incubators
          </h1>
          <p>For checking presence of bacteria in water</p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            7. COD Measurement System
          </h1>
          <p>
            In environmental chemistry,{" "}
            <span style={{ fontWeight: "bold" }}>
              the chemical oxygen demand (COD)
            </span>{" "}
            test is commonly used to indirectly measure the amount of organic
            compounds in water. Most applications of COD determine the amount of
            organic pollutants found in surface water (e.g. lakes and rivers),
            making COD a useful measure of water quality. It is expressed in
            milligrams per liter (mg/L), which indicates the mass of oxygen
            consumed per liter of solution. Older references may express the
            units as parts per million (ppm).
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            8. Mini test kits for Total Hardness, Alkalinity etc.
          </h1>
          <p>
            Water Hardness is a term used to express the concentration of
            predominantly calcium and magnesium ions in water. At sufficiently
            high concentrations hardness salts can precipitate, forming scale.
            <br />
            <br />
            Our Water Hardess Test Kits can determine both calcium and magnesium
            concentrations, expressing results as mg/l CaCO3. Our range of drop
            tests, microburette tests and titrator tests allow for increasing
            accuracy in testing for hardness salts on-site.
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            9. Colour comparators for chlorine, pH, etc………
          </h1>
          <p>
            The method for determining the chlorine residual of drinking water
            by means of the chlorination kit was discussed in paragraph 2-9.
            This procedure is only an approximate method, because (1) it does
            not distinguish between free available chlorine (FAC) and combined
            available chlorine (CAC); (2) there are only three color standards
            (1.0, 5.0, and 10.0ppm) between which the observer must interpolate;
            and (3) there is no way to compensate for the natural color of the
            water. The color comparator, using the modified orthotolidine-sodium
            arsenite (OTA) method or N, N-diet’hyl-P-Phenyi-enediamine (DPD),
            will provide an accurate measure of the free available chlorine from
            0.1 to 10 ppm and compensate for the natural color of the water. All
            readings should be taken within 1 minute
          </p>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            10. Hand held meter- Digital
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            11. Swimming pool test kits- Digital & Manual
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            12. Powder Pillows- test Reagents for chlorine, sulphate etc………
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            13. Filtration Units for Bacterial Tests
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            14. Bacterial filtration paper of 47 mm Dia 7 0.45 micron
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            15. SDI kit/ paper
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            16. Flock testers
          </h1>
          <br />

          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            17. Micron filtration (0.1 micron and above)
          </h1>
        </div>
      </Panel>
    </Collapse>
  );
};

export default ProcessWaterTreatment;
