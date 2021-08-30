/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmRlYm9vIiwiYSI6ImNrc3VxOHM3NDFpY3Qyd29kOTFzMnlsb2kifQ.ptPFv8SFS0_qM0HaVFGKhw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/fdeboo/cksuqqo3n25ch17qu8lq5gb1h',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 8,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker to mapbox
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      right: 100,
      left: 100,
    },
  });
};
