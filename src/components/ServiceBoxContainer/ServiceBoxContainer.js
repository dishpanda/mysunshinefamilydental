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
          body="Dental cleaning is performed and followed by a thorough exam by Dr. Dogra. An x-ray of teeth and mouth is done on a semi-annual basis to evaluate the health of your teeth and mouth. "
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
          name="Implants & Crowns"
          body="Dental implants are titanium metal posts that are surgically positioned into the jawbone to serve as artificial teeth roots for missing teeth. Once implants are properly inserted, Dr. Dogra will carefully mount the replacement teeth onto them."
        />
        <Link to="/Services/Implants">Learn More</Link>
      </div>
      <div>
        <ServiceBox
          name="Root Canals"
          body="Due to unfortunate accidents or tooth decay, the pulp and nerve of a tooth can die or become infected. Despite common thinking, a root canal procedure isn’t something to be scared of. The procedure is gentle and can relieve your tooth pain quickly."
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
