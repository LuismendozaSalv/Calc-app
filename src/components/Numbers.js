import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const numbers = [7, 8, 9, 4, 5, 6,1, 2, 3, 0];

const renderButtons = onClickNumber => {
    return numbers.map(number => 
        <Button 
            key={"NumberButton " + number.toString()} 
            text= {number.toString()} 
            clickHandler={onClickNumber}/>
    )
} 

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }     
    </section>
)
Number.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}
export default Numbers;