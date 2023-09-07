import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (<>
        <div classname="greeting-div">
            <h1>{greeting}</h1> 
        </div>
    </>);
}

export default ItemListContainer; 