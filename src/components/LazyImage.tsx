import React, { useRef, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage = ({src, alt}: LazyImageProps) => {
    const _ref: any = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    _ref.current.src = src;
                    observer.unobserve(_ref.current);
                }
            })
        })
        observer.observe(_ref.current);
        return () => {
            observer.disconnect()
        }
    }, [src])

  return (
    <Card.Img ref={_ref} alt={alt} loading="lazy" style={{ width: '100%', height: '100%'}} />
  );
};

export default LazyImage;
