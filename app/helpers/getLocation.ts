const getLocation = (data: google.maps.GeocoderResult) => {
  const formattedAddress = data?.formatted_address;
  const location = data?.address_components.find((ac) =>
    ac.types.includes("locality"),
  )?.long_name;
  // TODO: use formattedAddress to show on chips
  return { location, formattedAddress };
};

export default getLocation;
