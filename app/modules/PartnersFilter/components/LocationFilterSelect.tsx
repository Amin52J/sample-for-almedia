import React, { useMemo } from "react";
import ButtonGroup from "@aroundhome/around-kit/components/ButtonGroup";
import usePlaces from "@Hooks/usePlaces";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import useLocation from "@Modules/PartnersFilter/hooks/useLocation";
import { RADIUS_ARRAY } from "@Modules/PartnersFilter/PartnersFilter.constants";
import {
  FilterSelectContainer,
  StyledAutocomplete,
} from "@Modules/PartnersFilter/PartnersFilter.styles";
import useKeyChange from "@Modules/PartnersFilter/hooks/useKeyChange";
import LocationList from "./LocationList";

const LocationFilterSelect = () => {
  const { isDesktop } = useMediaContext();
  const { placesQuery, placesSuggestions, onPlacesChange } = usePlaces();

  const { radiusInKm, onRadiusSelect, onLocationSelect } = useLocation();

  const suggestions = useMemo(() => {
    return placesSuggestions.map((suggestion) => ({
      label: suggestion.description,
      value: suggestion.place_id,
    }));
  }, [placesSuggestions]);

  const { activeIndex, onKeyChange } = useKeyChange(suggestions);

  // TODO: update AutoComplete component and move form and submit into it
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const Locations = (): JSX.Element => (
    <LocationList
      locations={suggestions}
      onSelectItem={onLocationSelect}
      activeIndex={activeIndex}
    />
  );

  return (
    <FilterSelectContainer>
      {isDesktop ? (
        <ButtonGroup
          buttons={RADIUS_ARRAY}
          setSelected={onRadiusSelect}
          defaultValue={radiusInKm}
        />
      ) : null}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <StyledAutocomplete
          data={suggestions}
          value={placesQuery}
          label="Ort, Bundesland oder PLZ"
          onChange={onPlacesChange}
          clearInputCross={false}
          component={Locations}
          onKeyDown={onKeyChange}
        />
      </form>
    </FilterSelectContainer>
  );
};
export default LocationFilterSelect;
