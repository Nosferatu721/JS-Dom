const d = document,
  n = navigator;

const getGeolocation = (id) => {
  const ID = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    ID.innerHTML = `<p>Tu posicion actual es: </p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${coords.accuracy}</b> metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},14z" target="_blank" rel="noopener">Ver mapa</a>
    `;
    console.log(position);
  };
  const error = (err) => {
    ID.innerHTML = `<p>Error: ${err.code} - ${err.message}</p>`;
    console.log(err);
  };

  n.geolocation.getCurrentPosition(success, error, options);
};

export default getGeolocation;
