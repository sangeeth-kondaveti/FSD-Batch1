//props - object
//{} - template syntax
export function DisplayData() {
  //let name = "Jack";
  const user = {
    name: "Peter",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    imageSize: 200,
  };

  const products = [
    {
      id: 1,
      title: "Onion",
      category: "veg",
    },
    {
      id: 2,
      title: "Tomato",
      category: "veg",
    },
    {
      id: 3,
      title: "Apple",
      category: "Fruit",
    },
    {
      id: 4,
      title: "Orange",
      category: "Fruit",
    },
  ];

  const ResturantData = [
    {
      restaurant_id: 1,
      restaurant_name: "Domino's Pizza",
      location_id: 1,
      state_id: 1,
      address: "Ashok Vihar Phase 3, New Delhi",
      restaurant_thumb:
        "https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg",
      average_rating: 4.2,
      rating_text: "Very Good",
      cost: 666,
      contact_number: 9453524651,
      mealTypes: [
        {
          mealtype_id: 1,
          mealtype_name: "Breakfast",
        },
        {
          mealtype_id: 2,
          mealtype_name: "Lunch",
        },
      ],
      cuisines: [
        {
          cuisine_id: 1,
          cuisine_name: "North Indian",
        },
        {
          cuisine_id: 4,
          cuisine_name: "Fast Food",
        },
      ],
      image_gallery: [
        "https://b.zmtcdn.com/data/pictures/chains/3/143/fbc2c4c9e55a3f011c493dda79c399f5.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/143/1adb116d088669540c89150836d668f9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/143/2781ab2c532b711ecd401571cdd87eb9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/143/c751805b5927046d340926f870a95f5e.jpg",
      ],
    },
    {
      restaurant_id: 2,
      restaurant_name: "Pandit Ji Paratha Hut",
      location_id: 2,
      state_id: 1,
      address:
        "Shop 44, Plot C,  Ashok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
      restaurant_thumb:
        "https://b.zmtcdn.com/data/pictures/6/307406/bc1a8c29f7ac21c07077a301ca4b4c00.jpg",
      average_rating: 3.5,
      rating_text: "Good",
      cost: 450,
      contact_number: "122345352465",
      mealTypes: [
        {
          mealtype_id: 1,
          mealtype_name: "Breakfast",
        },
        {
          mealtype_id: 3,
          mealtype_name: "Dinner",
        },
      ],
      cuisines: [
        {
          cuisine_id: 1,
          cuisine_name: "North Indian",
        },
        {
          cuisine_id: 5,
          cuisine_name: "Street Food",
        },
      ],
      image_gallery: [
        "https://b.zmtcdn.com/data/reviews_photos/ec1/33873687c26d9719713d71f0712faec1_1532256472.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/bb2/460e82b7be8f808ef09655f5b7edbbb2_1516122671.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/ff4/8ea6f51aebe1cad803c293574f0afff4_1453703271.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/baa/30e9afd319d48c1122e7c19228287baa_1517462886.jpg",
      ],
    },
    {
      restaurant_id: 3,
      restaurant_name: "Food Adda",
      location_id: 12,
      state_id: 2,
      address: "Borivali West, Mumbai",
      restaurant_thumb:
        "https://b.zmtcdn.com/data/pictures/chains/1/18453961/af81c42413a2fbbacd66eaf72175eb01.jpg",
      average_rating: 5,
      rating_text: "Excellent",
      cost: 1020,
      contact_number: "467564",
      mealTypes: [
        {
          mealtype_id: 2,
          mealtype_name: "Lunch",
        },
        {
          mealtype_id: 3,
          mealtype_name: "Dinner",
        },
      ],
      cuisines: [
        {
          cuisine_id: 3,
          cuisine_name: "Chinese",
        },
        {
          cuisine_id: 4,
          cuisine_name: "FastFood",
        },
      ],
      image_gallery: [
        "https://b.zmtcdn.com/data/reviews_photos/583/b9e413027d9bd6957e4d55362ef64583_1519082913.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/0a7/dd15e424e1cb78233c142193140e50a7_1519082904.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/9c2/95611b1fcc87c70eb5e4cf76bc38d9c2_1519082898.jpg",
      ],
    },
    {
      restaurant_id: 4,
      restaurant_name: "The Appetite Momos",
      location_id: 11,
      state_id: 2,
      address: "Kasarvadavli, Thane West, Thane, Mumbai",
      restaurnat_thumb:
        "https://b.zmtcdn.com/data/pictures/chains/7/48607/d37a3f6dcaa58dcd563400d084607875.jpg",
      average_rating: 4.5,
      rating_text: "Very Good",
      cost: 2100,
      contact_number: "3496508401",
      mealTypes: [
        {
          mealtype_id: 4,
          mealtype_name: "Snacks",
        },
        {
          mealtype_id: 5,
          mealtype_name: "Drinks",
        },
      ],
      cuisines: [
        {
          cuisine_id: 1,
          cuisine_name: "North Indain",
        },
        {
          cuisine_id: 3,
          cuisine_name: "Chinese",
        },
      ],
      image_gallery: [
        "https://b.zmtcdn.com/data/pictures/9/18812749/6d8902db42fcf423f86d353efcfca597.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/2cb/64ffe4cd75031be1aa1cf792337d02cb_1589042698.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/aa0/68eaaf502c40123e316ab06881e9faa0_1550157457.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/f43/86a268598427ffe4f454644d75f58f43_1576856039.jpg",
      ],
    },
  ];
  return (
    <div>
      <h1>Display Data</h1>
      <h2>{user.name}</h2>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />

      <table
        style={{ border: " 1px solid black", width: "800px", height: "200px" }}
      >
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
        {products.map((product, index) => {
          return (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
            </tr>
          );
        })}
      </table>
      {ResturantData.map((item) => {
        return (
          <>
            <h1>{item.restaurant_name}</h1>
            <h5>
              Meal type provided - {item.mealTypes[0].mealtype_name},
              {item.mealTypes[1].mealtype_name}
            </h5>
            <p>RS. {item.cost}</p>
            <p>
              Cuisine Type provided - {item.cuisines[0].cuisine_name},{" "}
              {item.cuisines[1].cuisine_name}
            </p>
          </>
        );
      })}
    </div>
  );
}
