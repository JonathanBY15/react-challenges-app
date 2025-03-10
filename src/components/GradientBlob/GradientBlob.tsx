import React from "react";

interface GradientBlobProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  animationDelay?: string;
  colors?: [string, string, string]; // Array of 3 colors
}

const GradientBlob: React.FC<GradientBlobProps> = ({
  size = 250,
  top,
  left,
  right,
  bottom,
  opacity = 0.6,
  animationDelay = "0s",
  colors = ["#0d6efd", "#00d4ff", "#6a0dad"], // Default blue-purple
}) => {
  const blobStyle: React.CSSProperties = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
    borderRadius: "50%",
    filter: "blur(90px)",
    opacity,
    top,
    left,
    right,
    bottom,
    animation: "moveBlobs 6s infinite alternate ease-in-out",
    animationDelay,
  };

  return <div style={blobStyle} className="gradient-blob"></div>;
};

export default GradientBlob;
