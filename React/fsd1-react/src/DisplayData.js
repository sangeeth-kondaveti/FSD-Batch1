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
  return (
    <div>
      <h1>Display Data</h1>
      <h2>{user.name}</h2>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{ width: user.imageSize, height: user.imageSize }} />

      <table
        style={{ border: " 1px solid black", width: "800px", height: "200px" }}
      >
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
        {products.map((product) => {
          return (
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
