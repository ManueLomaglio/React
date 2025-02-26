import { useState } from "react";

function useLocation() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    
};
    return { location, getLocation };
}

export default useLocation;
