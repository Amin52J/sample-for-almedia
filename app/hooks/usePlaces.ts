import { useState, useEffect } from "react";
import { GOOGLE_API_URL } from "@Modules/PartnersListing/PartnersListing.constants";

interface PlacesProps {
  debounce?: number;
}

let autoComplete: google.maps.places.AutocompleteService;
let geocoder: google.maps.Geocoder;
let getSuggestionsDebounce: ReturnType<typeof setTimeout>;

const loadScript = (callback: () => void) => {
  if (!document.querySelector(".google-places")) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = callback;
    script.src = `${GOOGLE_API_URL}/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`;
    script.classList.add("google-places");
    document.querySelector("head").appendChild(script);
  }
};

const handleScriptLoad = () => {
  if (typeof window !== "undefined" && window.google) {
    autoComplete = new window.google.maps.places.AutocompleteService();
    geocoder = new window.google.maps.Geocoder();
  }
};

const usePlaces = ({ debounce = 700 }: PlacesProps = {}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);

  useEffect(() => {
    loadScript(handleScriptLoad);
    if (!autoComplete || !geocoder) {
      handleScriptLoad();
    }

    return () => {
      if (getSuggestionsDebounce) {
        clearTimeout(getSuggestionsDebounce);
      }
    };
  }, []);

  const onPlacesSelect = async (selectedItemId: string) => {
    const { results } = await geocoder.geocode({
      placeId: selectedItemId,
    });
    if (results[0]) {
      setQuery(results[0].formatted_address);
      setSuggestions([]);

      return {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
        data: results[0],
      };
    }
    return null;
  };

  const getSuggestions = (value: string) => () => {
    autoComplete.getPlacePredictions(
      {
        input: value,
        types: ["geocode"],
        componentRestrictions: { country: "de" },
      },
      (data) => setSuggestions(data || []),
    );
  };

  const onPlacesChange = (place: string) => {
    setQuery(place);
    setSuggestions([]);

    if (getSuggestionsDebounce) {
      clearTimeout(getSuggestionsDebounce);
    }
    getSuggestionsDebounce = setTimeout(getSuggestions(place), debounce);
  };

  const resetQuery = () => {
    setQuery("");
  };

  return {
    placesQuery: query,
    placesSuggestions: suggestions,
    onPlacesChange,
    onPlacesSelect,
    resetQuery,
  };
};

export default usePlaces;
