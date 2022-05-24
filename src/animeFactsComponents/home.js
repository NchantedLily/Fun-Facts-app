import React from 'react'
import AnimeCollage from '../images/animecollageimage.png'

const home = () => {
  return (
    <div className="container">
    <h4>Fun and interesting facts about Anime</h4>
    <p>Click on any of the topics above to learn interesting facts about Anime.</p>
    <img src={AnimeCollage} alt="Anime Collage" />
    </div>
  )
}




export default home