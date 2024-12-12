import "./Product.css"
function Product({title,Price}) {
    return (
        <div className="Product"> 
            <h1>{title}</h1>
            <h2>Price: {Price}</h2>
        </div>
    );
}

export default Product;