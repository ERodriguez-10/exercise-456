import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

function FunctionComponent(props) {

  const fecha = new Date().toLocaleTimeString();
  let initialYear = 0

  const [clock, setClock] = useState(fecha);
  const [years, setYears] = useState(initialYear);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
      setYears((prevAge) => prevAge + 1)
    }, 1000);
    
    return () => {
      clearInterval(interval)
    }
  }, [years]);

  return (
    <div>
        <h1>Function Component</h1>
        <h2>Hora Actual:{clock}</h2>
        <h3>{props.name}</h3>
        <h2>Edad: {years}</h2>
    </div>
  )
}

FunctionComponent.propTypes = {
  name: PropTypes.string,
}

export default FunctionComponent
