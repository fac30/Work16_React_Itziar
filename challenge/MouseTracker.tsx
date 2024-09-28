import { useState, useEffect } from "react";

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function update(event: MouseEvent) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
    // Add the event listener on mount(add to the DOM)
    window.addEventListener("mousemove", update);
    // Removethe event listener on unmount(remove from the DOM)
    return () => window.removeEventListener("mousemove", update);
  }, []);
  //   Empty dependency array means the effect will run once after initial render
  return (
    <output>
      {mousePosition.x},{mousePosition.y}
    </output>
  );
}
