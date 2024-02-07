'use client'
import React, { useTransition } from 'react'
import { CldImage } from 'next-cloudinary'
import setFavoriteToImage from '../Utils/Actions'
import { SearchResult } from '@/app/gallery/page'
import SolidHeart from '@/app/icons/SolidHeart'

const ImageCard = (props : any & {imageData: SearchResult}) => {
    const [transition, startTransition] = useTransition();
    const isFavorite = props.imageData.tags.includes('favorite');
  return (
    <div className='relative'>
        <CldImage {...props} src={props.imageData.public_id}/>
        { isFavorite ? (
          <SolidHeart className="absolute top-3 right-3 text-red-500 hover:text-white cursor-pointer" onClick={() => {
            startTransition(() => {
                setFavoriteToImage(props.imageData.public_id, isFavorite, props.path)
            })
        }}/>
        ) : (
          <SolidHeart className="absolute top-3 right-3 hover:text-red-500 cursor-pointer" onClick={() => {
            startTransition(() => {
                setFavoriteToImage(props.imageData.public_id, isFavorite, props.path)
            })
        }}/>
        )}
        
    </div>
  )
}

export default ImageCard