import { useState, useCallback, useLayoutEffect } from "react";

const getDimensionObject = (node) => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
};

const useSize = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionObject(node));
      measure();
    }
  }, [node]);

  return [ref, dimensions];
};

const Media = ({ url, active, x, y }) => {
  //   console.log(x, y);

  const [ref, { width, height }] = useSize();

  return (
    <img
      ref={ref}
      style={{
        transform: `translate(${x - width / 2}px, ${y - height / 2}px)`,
      }}
      src={url}
      className={active ? "is-active" : ""}
      alt="image"
    />
  );
};

export default Media;
