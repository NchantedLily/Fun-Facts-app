import React from 'react'
import CodeGeasspizza from '../images/codeGeasspizzafunfactsimage.jpg'

const codeGeass = (props) => {
  console.log(props);
  return (
    <div className="container">
        <h4>Code Geass</h4>
        <p>The reason why everyone in Code Geass loves pizza is because Code Geass was sponsored by Pizza Hut. They also ran a massive campaign for them, using anime in advertising as much as possible. </p>
        <img src={CodeGeasspizza} alt="Code Geass pizza" />
    </div>
  )
}

export default codeGeass