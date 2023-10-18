import React from "react";
import {
  DescriptionEmptyState,
  DescriptionText,
} from "@Modules/Description/styles";
import { Profile } from "@Shared/types/profile";
import Usps from "@Modules/Description/components/Usps";
import HTMLConverter from "@Shared/components/HTMLConverter/HTMLConverter";

const Description = ({ profile }: { profile: Profile | null }) => {
  if (!profile) return null;
  const { description, usps = [] } = profile;

  return (
    <>
      <Usps usps={usps} />
      {description ? (
        <DescriptionText>
          <HTMLConverter text={description} />
        </DescriptionText>
      ) : (
        usps.length < 1 && (
          <DescriptionEmptyState>
            Für die Firma liegt uns noch keine Beschreibung vor. Kontaktieren
            Sie die Firma gerne direkt für mehr Informationen.
          </DescriptionEmptyState>
        )
      )}
    </>
  );
};

export default Description;
