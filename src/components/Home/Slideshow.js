import SimpleImageSlider from "react-simple-image-slider";
import React from 'react';

class Slideshow extends React.Component {
    render() {
        const images = [
            { url: "images/Plastic_1.jpg" },
            { url: "images/Plastic_2.jpg" },
            { url: "images/Plastic_1.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}
export default Slideshow;
