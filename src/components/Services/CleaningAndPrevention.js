import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import chair from "../../images/chair.jpg";

export default (props) => {
  console.log("Rendering Cleaning and Prevention");

  return (
    <Container className="page-body">
      <h2 className="heading-custom-2">
        <FontAwesomeIcon icon={faTooth} /> Cleaning and Prevention
      </h2>
      <div className="flex-service-container">
        <div>
          <h4 className="heading-custom-4">
            Dental cleaning is performed and followed by a thorough exam by Dr.
            Dogra.
          </h4>
          <p>
            The cleaning includes removal of plaque and tartar, inspection of
            gums, and a final polishing to buff out any stains that were not
            removed during your regular tooth brushing and flossing routine.
          </p>
          <p>
            The exam and cleaning are treated like a conference where the doctor
            will listen to your apprehensions and concerns and answer questions
            so you can be your very best with your teeth.
          </p>
          <p>
            If you have a history of oral health issues or a specific problem at
            the day of your visit, you may receive treatments beyond a typical
            dental cleaning.
          </p>
          <p>A typical dental cleaning includes:</p>
          <ul>
            <li>
              <strong>Removing plaque:</strong> Many people don’t know that
              plaque is actually a living colony of bacteria. It grows if it’s
              not removed, by feeding on food debris on the surface of your
              teeth. As it eats, it produces toxins that can inflame your gums,
              which is the cause of periodontal disease. Plaque is sticky and
              almost invisible, which makes it difficult or impossible to
              completely remove without a professional dental cleaning.
            </li>
            <li>
              <strong>Removing tartar:</strong> Tartar is located both above and
              below your gum lines and it can only be removed via professional
              dental instruments. Essentially, tartar is hardened plaque that’s
              been left on the tooth and has attached itself to the tooth.
            </li>
            <li>
              <strong>Polishing teeth:</strong> The final step is teeth
              polishing. During this step, your hygienist will use professional
              dental equipment to get rid of stains that wasn’t removed during
              your typical tooth brushing and flossing routine.
            </li>
          </ul>
        </div>
        <div>
          <img src={chair} alt="Dentist's chair" />
        </div>
      </div>
      <div className="flex-container-50">
        <div>
          <h4 className="heading-custom-4">What is Plaque?</h4>
          <p>
            Plaque is a sticky film that forms on your teeth every day: You
            know, that slippery/fuzzy coating you feel when you first wake up.
          </p>
          <p>
            Scientists call plaque a “biofilm” because it’s actually a community
            of living microbes surrounded by a gluey polymer layer. The sticky
            coating helps the microbes attach to surfaces in your mouth so they
            can grow into thriving microcolonies.
          </p>
          <h4 className="heading-custom-4">
            The Difference Between Plaque and Tartar
          </h4>
          <p>
            When plaque isn’t regularly removed, it can accumulate minerals from
            your saliva and harden into an off-white or yellow substance called
            tartar.
          </p>
          <p>
            Tartar builds up along and under your gumline on the fronts and
            backs of your teeth. Although an attentive flossing may dislodge
            some tartar buildup, you’ll probably need to visit a dentist to rid
            yourself of all of it.
          </p>
        </div>
        <div>
          <h4 className="heading-custom-4">What Causes Plaque?</h4>
          <p>
            Your mouth is a thriving ecosystem. Bacteria and other organisms
            come in when you eat, drink, and breathe. Most of the time, a
            delicate balance is maintained in your oral ecosystem, but problems
            can arise when certain strains of bacteria become overabundant.
          </p>
          <p>
            When you eat carbs and sugary foods and drinks, bacteria feed on the
            sugars, producing acids in the process. Those acids can cause
            problems like cavities, gingivitis, and other forms of tooth decay.
          </p>
          <p>
            Tooth decay from plaque can even happen under your gums where you
            can’t see it, eating away at the support for your teeth.
          </p>
          <h4 className="heading-custom-4">
            What is the Treatment for Plaque?
          </h4>
          <p>
            You can remove plaque by brushing and flossing your teeth regularly
            with a soft-bristled toothbrush. Many dentists recommend electric
            toothbrushes because they are believed to be more effective at
            removing plaque.
          </p>
          <p>
            Plaque that has hardened into tartar will have to be removed by a
            dental professional. Your dentist or oral hygienist can remove it
            when you have a regular dental checkup and cleaning. Because tartar
            can build up in hard-to-reach places, it’s very important to visit a
            dentist twice a year to keep it under control.
          </p>
        </div>
      </div>
    </Container>
  );
};
