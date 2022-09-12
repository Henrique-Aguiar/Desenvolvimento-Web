function Couter() {
    let quantity = 10

    function upQuantity() {

    }
    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    )
}

export default Couter