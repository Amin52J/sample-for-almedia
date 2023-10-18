import React from "react";
import { LocationProps } from "@Modules/PartnersFilter/PartnersFilter.d";
import {
  ImageListItem,
  List,
  ListContainer,
  ListItem,
  StickyImage,
} from "@Modules/PartnersFilter/PartnersFilter.styles";

const LocationList = ({ locations, onSelectItem, activeIndex }) => {
  const handleClick = (
    _e: React.MouseEvent<Element, MouseEvent>,
    item: LocationProps,
  ) => {
    onSelectItem(item);
  };

  return (
    <ListContainer>
      <List>
        {locations.map((item: LocationProps, index: number) => (
          <ListItem
            key={item.label}
            index={index}
            activeIndex={activeIndex}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
              handleClick(e, item)
            }
          >
            {item.label}
          </ListItem>
        ))}
        {locations.length !== 0 && (
          <ImageListItem key="powered_by_google">
            <StickyImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/powered_by_google.png`}
              alt="powered_by_google"
            />
          </ImageListItem>
        )}
      </List>
    </ListContainer>
  );
};

export default LocationList;
