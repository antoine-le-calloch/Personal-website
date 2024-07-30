import {useEffect, useRef} from "react";

const AnimateOnScroll = ( props ) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, options);

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return <div {...props} ref={elementRef}>{props.children}</div>;
}

export default AnimateOnScroll;
