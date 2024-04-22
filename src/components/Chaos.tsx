import { ChaosValues } from './types'

type ChaosProps = {
  chaosValues: ChaosValues
  onClickHandler: React.Dispatch<React.SetStateAction<ChaosValues>>
}

const StarButton = ({
  index,
  value,
  chaosValues,
  onClickHandler
}: ChaosProps & { index: number; value: ChaosValues }) => {
  return (
    <button
      className={`rounded-sm border border-white/25 p-1 ${
        chaosValues === value ? 'bg-white text-[#282f3e]' : ''
      }`}
      onClick={() => onClickHandler(value)}
    >
      {index}
    </button>
  )
}

export const Chaos = ({ onClickHandler, chaosValues }: ChaosProps) => {
  return (
    <div className="absolute right-1/2 top-0 flex flex-col rounded-b-lg border-x-2 border-b-2 border-t-0 border-white/25 px-4 py-2  text-sm text-white">
      Chaos panel
      <div className="mt-2 flex flex-row justify-around">
        {[250, 1000, 1750].map((value, index) => (
          <StarButton
            key={value}
            index={index}
            chaosValues={chaosValues}
            value={value as ChaosValues}
            onClickHandler={onClickHandler}
          />
        ))}
        {/*         <button
          className="rounded-sm border border-white/25 p-1"
          onClick={() => onClickHandler(250)}
        >
          1
        </button>
        <button
          className="rounded-sm border border-white/25 p-1"
          onClick={() => onClickHandler(1000)}
        >
          2
        </button>
        <button
          className="rounded-sm border border-white/25 p-1"
          onClick={() => onClickHandler(1750)}
        >
          3
        </button> */}
      </div>
    </div>
  )
}
