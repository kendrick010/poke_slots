import { ReactNode, useEffect, useState } from "react";

import { BLUE_LIGHT_ARRAY, GREEN_LIGHT_ARRAY, YELLOW_LIGHT_ARRAY } from "./lightShineConfig";

import "@styles/fade.css";

function TopRowPattern() {
    const topRowLights = GREEN_LIGHT_ARRAY.slice(0, 6);
    return (
        <>
        {topRowLights.map((lightPackage, index) => (
          <div
            key={`top-row-lights-${index.toString()}`}
            style={{
                position: "absolute",
                left: `${lightPackage.position.x.toString()}px`,
                top: `${lightPackage.position.y.toString()}px`,
                width: `${lightPackage.size.width.toString()}px`,
                height: `${lightPackage.size.height.toString()}px`,
                backgroundImage: `url(${lightPackage.shineSpriteUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          />
        ))}
        </>
    );
}

function MiddleRowPattern() {
    return (
        <>
        {BLUE_LIGHT_ARRAY.map((lightPackage, index) => (
          <div
            key={`middle-row-lights-${index.toString()}`}
            style={{
                position: "absolute",
                left: `${lightPackage.position.x.toString()}px`,
                top: `${lightPackage.position.y.toString()}px`,
                width: `${lightPackage.size.width.toString()}px`,
                height: `${lightPackage.size.height.toString()}px`,
                backgroundImage: `url(${lightPackage.shineSpriteUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          />
        ))}
        </>
    );
}

function BottomRowPattern() {
    const bottomRowLights = GREEN_LIGHT_ARRAY.slice(6, 12);
    return (
        <>
        {bottomRowLights.map((lightPackage, index) => (
          <div
            key={`bottom-row-lights-${index.toString()}`}
            style={{
                position: "absolute",
                left: `${lightPackage.position.x.toString()}px`,
                top: `${lightPackage.position.y.toString()}px`,
                width: `${lightPackage.size.width.toString()}px`,
                height: `${lightPackage.size.height.toString()}px`,
                backgroundImage: `url(${lightPackage.shineSpriteUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          />
        ))}
        </>
    );
}

function LeftDiagonalPattern() {
    const leftDiagonalLights = YELLOW_LIGHT_ARRAY.slice(0, 6);
    return (
        <>
        {leftDiagonalLights.map((lightPackage, index) => (
          <div
            key={`left-diagonal-lights-${index.toString()}`}
            style={{
                position: "absolute",
                left: `${lightPackage.position.x.toString()}px`,
                top: `${lightPackage.position.y.toString()}px`,
                width: `${lightPackage.size.width.toString()}px`,
                height: `${lightPackage.size.height.toString()}px`,
                backgroundImage: `url(${lightPackage.shineSpriteUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          />
        ))}
        </>
    );
}

function RightDiagonalPattern() {
    const leftDiagonalLights = YELLOW_LIGHT_ARRAY.slice(6, 12);
    return (
        <>
        {leftDiagonalLights.map((lightPackage, index) => (
          <div
            key={`right-diagonal-lights-${index.toString()}`}
            style={{
                position: "absolute",
                left: `${lightPackage.position.x.toString()}px`,
                top: `${lightPackage.position.y.toString()}px`,
                width: `${lightPackage.size.width.toString()}px`,
                height: `${lightPackage.size.height.toString()}px`,
                backgroundImage: `url(${lightPackage.shineSpriteUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          />
        ))}
        </>
    );
}

type CycleTogglesProps = {
	patterns: ReactNode[];
	delay?: number;
};
  
function CyclePatterns({
	patterns,
	delay=750
} : CycleTogglesProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % patterns.length);
	  }, delay);
  
	  return () => { clearInterval(interval); }
	}, []);
  
	return (
	  <div key={currentIndex} className="fade">
		{patterns[currentIndex]}
	  </div>
	);
}

export function AllOffPattern() {
  return <></>
}

export function AllOnPattern() {
    return (
        <>
            <TopRowPattern />
            <MiddleRowPattern />
            <BottomRowPattern />
            <LeftDiagonalPattern />
            <RightDiagonalPattern />
        </>
    );
}

export const toggleTopRow = <CyclePatterns patterns={[<TopRowPattern/>]} />;
export const toggleMiddleRow = <CyclePatterns patterns={[<MiddleRowPattern/>]} />;
export const toggleBottomRow = <CyclePatterns patterns={[<BottomRowPattern/>]} />;
export const toggleLeftDiagonal = <CyclePatterns patterns={[<LeftDiagonalPattern/>]} />;
export const toggleRightDiagonal = <CyclePatterns patterns={[<RightDiagonalPattern/>]} />;

const idlePattern = [
    <div><LeftDiagonalPattern key="leftDiagonal" /><RightDiagonalPattern key="rightDiagonal" /></div>,
    <div><TopRowPattern key="topRow" /><BottomRowPattern key="bottomRow" /></div>,
    <MiddleRowPattern key="middleRow" />,
    <div><TopRowPattern key="topRow" /><BottomRowPattern key="bottomRow" /></div>,
];
export const toggleIdle = <CyclePatterns patterns={idlePattern} />;

export type LightShineRef = {
  showTopRow: () => void;
  showMiddleRow: () => void;
  showBottomRow: () => void;
  showLeftDiagonal: () => void;
  showRightDiagonal: () => void;
  showAllON: () => void;
  showAllOFF: () => void;
  showIdle: () => void;
};