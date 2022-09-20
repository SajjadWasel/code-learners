import React, { createContext } from 'react';
import Father from '../Father/Father';


export const MyContext = createContext();

const GrandPa = () => {

const watchs = ['rolex', "naviforce"]

    const ornaments = "golden ring";
    return (
        <MyContext.Provider value={watchs}>
            <div style={{ border: "7px solid blue", padding: "2%", margin: "20px", width: "50%" }}>
                <h3 >
                    Grand Pa
                </h3>
                <Father ornaments={ornaments}></Father>
            </div>
        </MyContext.Provider>
    );
};

export default GrandPa;