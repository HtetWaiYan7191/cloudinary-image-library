'use client'
import React, { useState, useTransition } from 'react'
import { CldImage } from 'next-cloudinary'
import setFavoriteToImage from '../Utils/Actions'
import { SearchResult } from '@/app/gallery/page'
import SolidHeart from '@/app/icons/SolidHeart'

const ImageCard = (props : any & {imageData: SearchResult, onUnHeart?: ((unHeartedResource : SearchResult) => void)}) => {
    const [transition, startTransition] = useTransition();
    const [isFavorite, setIsFavorite] = useState(props.imageData.tags.includes('favorite'));
    const {onUnHeart} = props
  return (
    <div className='relative'>
        <CldImage {...props} src={props.imageData.public_id}/>
        { isFavorite ? (
          <SolidHeart className="absolute top-3 right-3 text-red-500 hover:text-white cursor-pointer" onClick={() => {
            setIsFavorite(false);
            onUnHeart?.(props.imageData)
            startTransition(() => {
                setFavoriteToImage(props.imageData.public_id, isFavorite)
            })
        }}/>
        ) : (
          <SolidHeart className="absolute top-3 right-3 hover:text-red-500 cursor-pointer" onClick={() => {
            setIsFavorite(true);
            onUnHeart?.(props.imageData)
            startTransition(() => {
                setFavoriteToImage(props.imageData.public_id, isFavorite)
            })
        }}/>
        )}
        
    </div>
  )
}

export default ImageCard