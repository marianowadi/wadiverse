import { useRef, useState } from 'react'
import { PlanetComponentProps } from './types'

export const PlanetComponent = ({
  planet,
  selectedPlanet,
  onClickHandler
}: PlanetComponentProps) => {
  const { cx, cy, baseColor, imageHref, name } = planet
  const planetRef = useRef<null | SVGCircleElement>(null)
  const [isPlanetHovered, setIsPlanetHovered] = useState(false)

  return (
    <g key={`planet-${baseColor}`}>
      <foreignObject x={cx - 90} y={cy - 150} width="200" height="160">
        <h1
          className={`font-mono text-2xl text-white ${
            isPlanetHovered ? 'visible' : 'hidden'
          } `}
        >
          Planet {name}
        </h1>
      </foreignObject>

      <g
        onMouseOver={(e) => {
          e.currentTarget.setAttribute('cursor', 'pointer')
          setIsPlanetHovered(true)
        }}
        onMouseLeave={() => setIsPlanetHovered(false)}
        onClick={() => {
          console.log({ name, cx, cy })
          onClickHandler({ x: cx, y: cy, name })
        }}
        className="hover:drop-shadow-planet"
      >
        <circle
          cx={cx}
          cy={cy}
          stroke="none"
          strokeWidth={0}
          r="96"
          fill={`${baseColor}`}
          ref={planetRef}
        />
        <image x={cx - 95} y={cy - 95} href={imageHref} className="size-48 " />
      </g>

      <foreignObject x={cx - 60} y={cy + 100} width="200" height="160">
        <h1
          className={`font-mono text-base text-white ${
            isPlanetHovered && selectedPlanet !== name ? 'visible' : 'hidden'
          } `}
        >
          Click to visit
        </h1>
      </foreignObject>
    </g>
  )
}
