import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Product() {
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("https://644fd7f3b61a9f0c4d2ce592.mockapi.io/api/v1/shop")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  let imagesArray = [];
  for (let i = 0; i < product.length; i++) {
    const obj = product[i]; //objects
    imagesArray = obj.images; //storing images array

    console.table(imagesArray);
    console.log(imagesArray);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      console.log(setIndex);
    };
    return (
      <div>
        <h1>Product</h1>
        {product.map((item, index) => (
          <div key={item.id}>
            <p>{item.title}</p>

            <Carousel
              width="300px"
              height="300px"
              float="center"
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              onSelect={handleSelect}
            >
              {item.images.map((pic) => (
                <img src={pic} alt={pic} />
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    );
  }
}
export default Product;
