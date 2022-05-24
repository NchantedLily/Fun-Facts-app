import React from 'react'
import Bleachfunfacts from '../images/bleachanimefunfactsimage.webp'





const bleach = (props) => {
  console.log(props);
  return (
    <div className="container">
        <h4>Bleach</h4>
        <p>Tite Kubo, the creator of Bleach, stated two reasons why he named this anime as Bleach. First, because we bleach our clothes to remove stains and to whiten them,similarly to how soul reapers cleanse or bleach souls. Second, it was a Nirvana album's name, which is one of Kubo's favorite.</p>
        <img src={Bleachfunfacts} alt="Bleach fun facts image" />
    </div>
  )
}





export default bleach