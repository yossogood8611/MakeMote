import React from "react";
import { SvgXml } from "react-native-svg";

const plus = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="10" y1="1" x2="10" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
<line x1="1" y1="10" x2="19" y2="10" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>

`;

const PlusSvg = () => {
    const PlusSvg = () => <SvgXml xml={plus} width="75%" height="75%" />;
    return <PlusSvg />;
};

export default PlusSvg;