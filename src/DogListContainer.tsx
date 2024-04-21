import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState<string[]>([])
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [dogUrls, setDogUrls] = useState<string[]>([])
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
        setSelectedBreed(Object.keys(data.message)[0])
      })
  }, [])
  return (
    <>
      <BreedsSelect
        breeds={breeds}
        setSelectedBreed={setSelectedBreed}
        selectedBreed={selectedBreed}
      />
      <button
        onClick={async () => {
          const response = await fetch(
            `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
          )
          const data = await response.json()
          setDogUrls(data.message)
        }}
      >
        表示
      </button>
      {dogUrls.map(url => (
        <img src={url} key={url}></img>
      ))}
    </>
  )
}
