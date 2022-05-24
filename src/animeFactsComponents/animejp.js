import React from 'react'
import AnimeJapan from '../images/animejapanfunfactsimage.webp'

const anime = (props) => {
  console.log(props);
  return (
    <div className="container">
    <h4>Anime</h4>
    <p>According to a 2004 document from the External Trade Organization, anime films and television account for 60 percent of the world's animation-based entertainment. Japan has around 130 voice-acting schools. Infact, in Japan more paper is used to print manga than even toilet paper!</p>
    <img src={AnimeJapan} alt="Anime Japan" />
</div>
  )
}

export default anime