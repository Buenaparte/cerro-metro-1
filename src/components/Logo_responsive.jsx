import React, {useState} from 'react'
import PropTypes from "prop-types"
import logo_default from "../assets/logo_default.svg"
import logo_variant2 from "../assets/logo_variant2.svg"
import logo_variant3 from "../assets/logo_variant3.svg"

export const Logo_responsive = ({ property1, className }) => {
    const [currentLogo, setCurrentLogo] = useState(logo_default);

    const handleMouseEnter = () => {
        setCurrentLogo(logo_variant2);
    };

    const handleMouseLeave = () => {
        setCurrentLogo(logo_default);
    };

    const handleMouseDown = () => {
        setCurrentLogo(logo_variant3);
    };

    const handleMouseUp = () => {
        setCurrentLogo(logo_variant2);
    };

    return (
        <img
            className={`w-[202px] left-0 top-0 h-11 absolute ${className} transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-gray-700`}
            alt="Property default"
            src={currentLogo}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        />
    );
};

Logo_responsive.propTypes = {
    property1: PropTypes.oneOf([
        "default-logo",
        "logo_variant2",
    ]),
    className: PropTypes.string,
};
