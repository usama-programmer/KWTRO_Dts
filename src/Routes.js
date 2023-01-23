import React from "react";
import "./App.css";
import { Routes as DomRoutes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Career,
  Services,
  About,
  Covid,
  Contact,
  InfoCenter,
} from "./pages";
import { Footer, Header } from "./component";
import WaterTreatment from "./component/product-and-services/WaterTreatment";
import AboutSaleServices from "./component/product-and-services/AfterSaleServices";
import ProcessWaterTreatment from "./component/product-and-services/ProcessWaterTreatment";
import SparesNConsumables from "./component/product-and-services/SparesAndComsumbles";
import SpecialtyChemical from "./component/product-and-services/SpecialityChemical";
import Waste from "./component/product-and-services/WasteWaterTreatment";

function Routes() {
  return (
    <>
      <Header />
      <DomRoutes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/about" element={<About />} />
        <Route path="/infoCenter" element={<InfoCenter />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/waterTreatment" element={<WaterTreatment />} />
        <Route path="/afterSaleService" element={<AboutSaleServices />} />
        <Route
          path="/processWaterTreatment"
          element={<ProcessWaterTreatment />}
        />
        <Route path="/spareAndConsumables" element={<SparesNConsumables />} />
        <Route path="/specialtyChemicals" element={<SpecialtyChemical />} />
        <Route path="/wasteWaterTreatment" element={<Waste />} />
      </DomRoutes>
      <Footer />
    </>
  );
}
export default Routes;
