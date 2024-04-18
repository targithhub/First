const ProductList = (props) => {

  return (
    <div>
      <h2>Q4 ProductList</h2>
      {props.products.map((item) => {
        return (
          <p>
            {item.id}
            <br></br>
            {item.name}
            <br></br>
            {item.price}
            <br></br>
            {item.description}
          </p>
        );
      })}
    </div>
  );
};


export default ProductList;
