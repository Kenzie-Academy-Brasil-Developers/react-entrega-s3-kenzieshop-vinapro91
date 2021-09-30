import { useDispatch, useSelector } from "react-redux";
import { deletCartThunk } from "../../store/modules/cart/thunks";
import { Card, Container, Content } from "./styles";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Card key={index} className="Container-Card">
              <h1>{item.name}</h1>
              <figure>
                <img alt={item.name} src={item.image} />
              </figure>
              <p>{item.description}</p>
              <span>R$: {item.price}, 00</span>
              <button onClick={() => dispatch(deletCartThunk(index))}>
                apagar item
              </button>
            </Card>
          ))
        ) : (
          <h3>Você não colocou nenhum personagem no seu carrinho</h3>
        )}
      </Content>
    </Container>
  );
};

export default Cart;
