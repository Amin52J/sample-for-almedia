import React from "react";
import FilterButton from "@Shared/components/FilterButton/FilterButton";
import DropDown from "@Shared/components/DropDown";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import LocationFilterSelect from "./LocationFilterSelect";

const LocationFilter = () => {
  const { locationState } = useFilter();

  const isSelected = locationState !== DEFAULT_ALL_VALUE;
  const buttonTitle = isSelected ? locationState : "Standort";

  return (
    <DropDown
      body={<LocationFilterSelect />}
      position="left"
      header="Standort"
      openButton={<FilterButton title={buttonTitle} isSelected={isSelected} />}
    />
  );
};

export default LocationFilter;
