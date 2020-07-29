import React from "react";
import { Link } from "react-router-dom";
import ServiceBox from "../ServiceBox/ServiceBox";
import "./ServiceBoxContainer.css";

export default (props) => {
  console.log("Rendering Services");

  return (
    <div className="flex-services-container">
      <div>
        <ServiceBox
          name="Cleaning & Prevention"
          body=" Dental cleaning is performed by one of our registered dental hygienists, followed by a thorough exam by Dr. Dogra. An x-ray of teeth and mouth is done on a semi-annual basis to evaluate the health of your teeth and mouth. "
        />
        <Link to="/Services/CleaningAndPrevention">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Restorations"
          body="We offer a full range of teeth restoration procedures including porcelain composite fillings and full zirconia crowns. We work with labs that produce state-of-the-art porcelain to match your existing tooth enamel. "
        />
        <Link to="/Services/Restorations">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Veneers"
          body="Veneers are a great option to enhance your smile. Veneers are thin porcelain coverings over your teeth that will provide the desired shade and shape that generally requires little removal of tooth structure. "
        />
        <Link to="/Services/Veneers">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Implants & Bridges"
          body="After a tooth loss, dental implants offer  a lifetime of better chewing and confidence as they function like real teeth. A dental bridge is an alternative fixed appliance designed to replace missing teeth. "
        />
        <Link to="/Services/ImplantsAndBridges">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Root Canals"
          body="Due to an unfortunate accidents or the decaying process of a tooth, occasionally the pulp and the nerve of teeth die or become infected. To treat infection and curb its potential spread, a root canal may be necessary."
        />
        <Link to="/Services/RootCanals">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Extractions"
          body=" In certain situations, tooth extraction may be necessary. Tooth extraction should be performed by a qualified dentist or maxillofacial surgeon, who has the experience to extract a tooth in a professional manner without unnecessary pain. "
        />
        <Link to="/Services/Extractions">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Invisalign"
          body="Everyone wants a great smile, but many of us need help to get there. Clear aligners are often effective in correcting a smile. We offer Invisalign&reg;, a series of custom made clear aligners that gradually straighten teeth."
        />
        <Link to="/Services/Invisalign">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Dentures"
          body="Dentures are used when teeth are missing. We provide both partial and complete dentures. A partial denture fills in the spaces created by missing teeth. Complete dentures are used when all of the teeth are missing. "
        />
        <Link to="/Services/Dentures">Learn More</Link>
      </div>
    </div>
  );
};
