import React from 'react'

export default class ShoeProfile extends React.Component{
    render(){
        const shoedata=JSON.parse(localStorage.clickedShoe)
        const {name,price, image,brand,latest} = shoedata
        return(
            <React.Fragment>
                <h4>{name}</h4>
                <p>{price}{brand}{latest}</p>
                <img src={image} alt="image" />

            </React.Fragment>
        )
    }
}