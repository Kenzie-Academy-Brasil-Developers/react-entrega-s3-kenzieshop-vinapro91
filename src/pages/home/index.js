import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";
import { Card, Container, Content } from "./styles";

const Products = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        {products.map((item, index) => (
          <Card key={index} className="Container-Card">
            <h1>{item.name}</h1>
            <figure>
              <img alt={item.name} src={item.image} />
            </figure>
            <p>{item.description}</p>
            <span>R$: {item.price}, 00</span>
            <button onClick={() => dispatch(addCartThunk(item))}>Compre</button>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Products;
