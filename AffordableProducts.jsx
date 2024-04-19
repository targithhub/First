const AffordableProducts = (props) => {
  return (
    <div>
      <h2>Q5 Affordable Products </h2>
      {props.products.map((item) => {
        return (
          <p>
            {item.price < 50
              ? item.name && item.price
              : "This product price is not more than 50"}
          </p>
        );
      })}
    </div>
  );
};

export default AffordableProducts;
