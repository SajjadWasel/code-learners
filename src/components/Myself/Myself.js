import React, { useContext } from 'react';
import { MyContext } from '../GrandPa/GrandPa';

const Myself = (props) => {
    const value = useContext(MyContext);
    console.log(value)

    return (
        <div style={{ border: "7px solid goldenrod", padding: "2%", margin: "20px" }}>
            <h3 >MyselF</h3>
            <h3>Ornaments: {props.ornaments}</h3>
            <h3>Watch:
                {value.map(watch => <h3>{watch}</h3>)}
            </h3>
        </div>
    );
};

export default Myself;