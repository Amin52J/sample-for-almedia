import React from "react";

import Mail from "@aroundhome/around-kit/icons/Mail";

import SearchIcon from "./SearchIcon";
import {
  NoPartnersButton,
  NoPartnersContainer,
  NoPartnersGreyText,
  NoPartnersInfoBox,
  NoPartnersLabel,
  NoPartnersPhone,
  NoPartnersText,
  NoPartnersTitle,
} from "@Modules/PartnersListing/PartnersListing.styles";

const NoPartners = () => (
  <NoPartnersContainer>
    <SearchIcon />
    <NoPartnersTitle>
      Wir haben leider keine passenden Fachfirmen gefunden.
    </NoPartnersTitle>
    <NoPartnersText>
      <strong>Tipps für bessere Ergebnisse:</strong> <br />
      Entfernen Sie einen Filter für mehr Resultate.
    </NoPartnersText>
    <NoPartnersInfoBox>
      <NoPartnersText hasNoMargin>
        <strong>Nichts gefunden? </strong>
        Rufen Sie uns an:
      </NoPartnersText>
      <NoPartnersPhone href="tel:+49308145263444">
        +49 30 814 526 3444
      </NoPartnersPhone>
      <NoPartnersLabel>
        (Mo.-Fr. 8:00-20:00 Uhr & Sa. 9-18:00 Uhr).
      </NoPartnersLabel>
      <NoPartnersGreyText>-oder-</NoPartnersGreyText>
      <NoPartnersButton
        iconLeft={Mail}
        color="green"
        component="a"
        href="mailto:kundenservice@aroundhome.de"
      >
        Nachricht schreiben
      </NoPartnersButton>
    </NoPartnersInfoBox>
  </NoPartnersContainer>
);

export default NoPartners;
