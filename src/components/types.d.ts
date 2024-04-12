export type ViewPortSize = { height: number; width: number }

export type TPlanet = {
  key: string
  baseColor: string
  cx: number
  cy: number
  imageHref: string
  name: string
}

export type PlanetComponentProps = {
  planet: TPlanet
  selectedPlanet: string | null
  viewportSize: ViewPortSize
  onClickHandler: (values: { x: number; y: number; name: string }) => void
  onCloseHandler: () => void
}
