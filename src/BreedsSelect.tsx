// @ts-check

export const BreedsSelect = (props: {
  breeds: string[]
  selectedBreed: string
  setSelectedBreed: (breed: string) => void
}) => {
  return (
    <>
      <select
        onChange={e => {
          console.log(e.target.value)
          props.setSelectedBreed(e.target.value)
        }}
        value={props.selectedBreed}
      >
        {props.breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}
