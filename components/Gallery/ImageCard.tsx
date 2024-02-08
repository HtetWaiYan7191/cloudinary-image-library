'use client'
import React, { useState, useTransition } from 'react'
import { CldImage } from 'next-cloudinary'
import setFavoriteToImage from '../Utils/Actions'
import { SearchResult } from '@/app/gallery/page'
import SolidHeart from '@/app/icons/SolidHeart'
import { MenuBar } from '../Utils/MenuBar'

const ImageCard = (props : any & {imageData: SearchResult, onUnHeart?: ((unHeartedResource : SearchResult) => void)}) => {
    const [transition, startTransition] = useTransition();
    const [isFavorite, setIsFavorite] = useState(props.imageData.tags.includes('favorite'));

    const {onUnHeart, imageData} = props
  return (
    <div className='relative'>
        <CldImage {...props} src={imageData.public_id}/>
        { isFavorite ? (
          <SolidHeart className="absolute top-3 left-3 text-red-500 hover:text-white cursor-pointer" onClick={() => {
            setIsFavorite(false);
            onUnHeart?.(imageData)
            startTransition(() => {
                setFavoriteToImage(imageData.public_id, isFavorite)
            })
        }}/>
        ) : (
          <SolidHeart className="absolute top-3 left-3 hover:text-red-500 cursor-pointer" onClick={() => {
            setIsFavorite(true);
            onUnHeart?.(imageData)
            startTransition(() => {
                setFavoriteToImage(imageData.public_id, isFavorite)
            })
        }}/>
        )}
        <div className='menu-bar-container top-3 right-3 absolute'>
        <MenuBar image={imageData} />
        </div>
        
    </div>
  )
}

export default ImageCard