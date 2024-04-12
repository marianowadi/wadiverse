import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { PlanetComponent as PlanetComponent } from './Planet'
import Ship from 'assets/trace.svg'
import { planetGenerator } from 'utils'
import { TPlanet, ViewPortSize } from './types'
import { COLORS } from 'constants/index'
import { PlanetContent } from './Content'
import CloseIcon from 'assets/close.svg'

function App() {
  const [scope, animate] = useAnimate()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [planets, setPlanets] = useState<Array<TPlanet>>([])
  const [stars, setStars] = useState<Array<JSX.Element>>([])
  const [selectedPlanet, setSelectedPlanet] = useState<null | string>(null)
  const [shipCoordinates, setShipCoordinates] = useState([0, 0])
  const [destinationCoordinates, setDestinationCoordinates] = useState([0, 0])
  const [viewportSize, setViewportSize] = useState<ViewPortSize>({
    height: 0,
    width: 0
  })
  const getRandomX = useCallback(() => {
    return Math.floor(Math.random() * Math.floor(viewportSize.width)).toString()
  }, [viewportSize.width])
  const getRandomY = useCallback(() => {
    return Math.floor(
      Math.random() * Math.floor(viewportSize.height)
    ).toString()
  }, [viewportSize.height])
  const randomRadius = useCallback(() => {
    return Math.random() * 0.7 + 0.6
  }, [])

  useLayoutEffect(() => {
    const coordinates = document.querySelector('body')?.getBoundingClientRect()
    if (coordinates) {
      setShipCoordinates([coordinates.right / 2, coordinates.bottom - 100])
      setViewportSize({
        width: coordinates.width,
        height: coordinates.height
      })
      const newPlanets = planetGenerator(coordinates.height, coordinates.width)
      setPlanets(newPlanets)
    }
  }, [])

  useEffect(() => {
    setStars(
      [...Array(250)].map((x, y) => (
        <circle
          cx={getRandomX()}
          cy={getRandomY()}
          r={randomRadius()}
          stroke="none"
          strokeWidth="0"
          fill={COLORS[Math.floor(Math.random() * COLORS.length)]}
          key={y}
        />
      ))
    )
  }, [viewportSize, getRandomX, getRandomY, randomRadius])

  useEffect(() => {
    if (destinationCoordinates[0] && destinationCoordinates[1]) {
      const offsetY = destinationCoordinates[1] + 100 - shipCoordinates[1]
      const offsetX = destinationCoordinates[0] - 30 - shipCoordinates[0]

      animate(
        scope.current,
        { translateX: offsetX, translateY: offsetY },
        { type: 'keyframes' }
      )
    }
  }, [destinationCoordinates])

  const handlePlanetClick = ({
    x,
    y,
    name
  }: {
    x: number
    y: number
    name: string
  }) => {
    setDestinationCoordinates([x, y])
    setSelectedPlanet(name)
    setIsModalVisible(true)
  }

  return (
    <div className=" m-0 h-dvh w-dvw  bg-gradient-to-tr from-[#3e4a61] to-[#282f3e] p-0 ">
      <div className="absolute right-12 top-12 flex flex-row text-xl text-white">
        <button
          className="mx-2 rounded-lg border border-white/25 p-2 hover:bg-white hover:text-[#282f3e]"
          onClick={() => setIsModalVisible(true)}
        >
          About
        </button>
      </div>

      {isModalVisible && (
        <div className="absolute left-1/4 top-1/3 flex h-2/6 w-3/6 flex-col  items-center  rounded-lg bg-black/45 p-4 text-xl  text-white backdrop-blur-sm">
          {selectedPlanet ? (
            PlanetContent({ name: selectedPlanet })
          ) : (
            <>
              <p className="my-auto text-center text-2xl">
                Hey, there, traveler! <br />
                Welcome to the Wadiverse. <br />
                Exploring every planet is strongly recommended :)
              </p>
            </>
          )}
          <button
            className="absolute bottom-4 flex w-1/6 flex-row items-center justify-around self-end rounded-lg border border-white/25 bg-white p-2 text-black"
            onClick={() => {
              setIsModalVisible(false)
              setSelectedPlanet(null)
            }}
          >
            <img className="h-4" src={CloseIcon} alt="Close" />
            Close
          </button>
        </div>
      )}

      <svg className="h-dvh w-dvw">
        {stars}
        {planets.map((planet) => (
          <PlanetComponent
            viewportSize={viewportSize}
            onClickHandler={handlePlanetClick}
            onCloseHandler={() => setSelectedPlanet(null)}
            key={planet.key}
            selectedPlanet={selectedPlanet}
            planet={planet}
          />
        ))}
        <motion.image
          onMouseOver={(e) => e.currentTarget.setAttribute('cursor', 'pointer')}
          className={`hover:drop-shadow-ship`}
          x={shipCoordinates[0]}
          y={shipCoordinates[1]}
          href={Ship}
          ref={scope}
        />
        */
      </svg>
    </div>
  )
}

export default App
