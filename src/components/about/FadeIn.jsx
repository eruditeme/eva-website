import React from "react";
import './FadeIn.css'

//credit to https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
export const FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
        });

        const currentRef = domRef.current; // Store the current value of domRef.current

        observer.observe(currentRef);

        return () => {
        observer.unobserve(currentRef); // Use the stored value in the cleanup function
        };
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
        {props.children}
        </div>
    );
}