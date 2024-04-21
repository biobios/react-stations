import React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description: React.FC = () => {
  const [dogUrl, setDogUrl] = useState<string>(
    'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1664.jpg',
  )

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button
        onClick={() =>
          fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(date => {
              setDogUrl(date.message)
            })
        }
      >
        更新
      </button>
    </div>
  )
}
