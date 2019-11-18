import React from 'react'
import NavBar from './navBar'

export default class ShoeProfile extends React.Component{
    render(){
        const shoedata=JSON.parse(localStorage.clickedShoe)
        const {name,price, image,brand,latest} = shoedata
        return(
            <React.Fragment>

                <h4>{name}</h4>
                <p>{price}{brand}</p>
                {latest? <p>latest shoe</p>
                :
                null}
                <img src={image} alt="image" />

            </React.Fragment>
        )
    }
}