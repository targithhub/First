// import logo from './logo.svg';
import "./App.css";
import ProductInfo from "./ProductInfo";
import WeatherMsg from "./WeatherMsg";
import ProductList from "./ProductList";
import Employee from "./Employee";
import AffordableProducts from "./AffordableProducts";
import Counter from "./Counter";

function App() {
  const productList = [
    {
      id: 1011,
      name: "Smartphone",
      price: "$500",
      description: "Android,8GB RAM",
    },
    {
      id: 1022,
      name: "Laptop",
      price: "$900",
      description: "DELL/i9",
    },
    {
      id: 1033,
      name: "Headphones",
      price: "$200",
      description: "Boat/Noise Cancellation",
    },
    {
      id: 1044,
      name: "Smarttwatch",
      price: "$300",
      description: "Galaxy/Round Dial",
    },
  ];

  let empData = [
    {
      name: "Rohan",
      position: "Frontend Developer",
      salary: "Rs 35000",
    },
    {
      name: "Shubham",
      position: "Backend Developer",
      salary: "Rs 45000",
    },
    {
      name: "Seema",
      position: "Project Manager",
      salary: "Rs 65000",
    },
  ];

  const productsArray = [
    {
      id: 101,
      name: "Pen",
      price: 25,
    },

    {
      id: 102,
      name: "Notebook",
      price: 45,
    },

    {
      id: 103,
      name: "Book",
      price: 250,
    },

    {
      id: 104,
      name: "Reference Book",
      price: 450,
    },

    {
      id: 105,
      name: "Marker",
      price: 40,
    },
  ];
  return (
    <div className="App">
      <ProductInfo productName="Laptop" price="$900"></ProductInfo>
      <WeatherMsg isSunny="false"></WeatherMsg>
      <Employee employeeData={empData}></Employee>
      <ProductList products={productList}></ProductList>  
      <AffordableProducts products={productsArray}></AffordableProducts>
      <Counter></Counter>
    </div>
  );
}

export default App;
