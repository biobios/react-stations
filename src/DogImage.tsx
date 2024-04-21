import React from 'react'

export const DogImage: React.FC<{ imageUrl: string }> = (props: {
  imageUrl: string
}) => {
  return <img src={props.imageUrl}></img>
}
