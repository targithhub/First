const ProductInfo = (props) => {
  return (
    <div>
      <h2>Q1 ProductInfo</h2>
      <p>{props.productName}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default ProductInfo;
