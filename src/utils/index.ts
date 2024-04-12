import { TPlanet } from 'components/types'
import {
  PLANET_BASE_COLORS,
  PLANET_IMAGES,
  PLANET_NAMES
} from 'constants/index'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function planetGenerator(height: number, width: number) {
  const planets: Array<TPlanet> = []
  const center = [height / 2, width / 2]
  // 1. Lower right - 2. Top right - 3. Lower left - 4. Top left
  const availableCoords = [
    [center[1] + width / 4, height - (height / 4 - 20)],
    [center[1] + width / 4 - 80, 0 + height / 4 + 36],
    [center[1] - width / 4, height - height / 4 - 65],
    [center[1] - width / 4, 0 + height / 4 - 35]
  ]
  for (let index = 0; index < 4; index++) {
    const newPlanet = generatePlanet(index)
    planets.push(newPlanet)
  }

  function generatePlanet(index: number) {
    const newPlanet = {
      key: `planet-${index}`,
      baseColor:
        PLANET_BASE_COLORS[
          Math.floor(Math.random() * Math.floor(PLANET_BASE_COLORS.length))
        ],
      cx: availableCoords[index][0],
      cy: availableCoords[index][1],
      r: 120,
      imageHref: PLANET_IMAGES[index],
      name: PLANET_NAMES[index]
    }
    if (planets.find((planet) => planet.baseColor === newPlanet.baseColor)) {
      return generatePlanet(index)
    } else {
      return newPlanet
    }
  }

  return planets
}
