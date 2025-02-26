import React from "react";
import useLocation from "./UseLocation";

function Location() {
  const { location,getLocation} = useLocation();

  return (
    <div>
      <h2>Get Location</h2>
      <button onClick={getLocation}>Click</button>

      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}

export default Location;
