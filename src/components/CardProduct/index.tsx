import { Container } from "./styles";

import { Product } from "../../Providers/Cart";
import { useCart } from "../../Providers/Cart";

interface CardProductProps {
  product: Product;
  type: string;
}

const CardProduct = ({ product, type }: CardProductProps) => {
  const { addProduct, deleteProduct } = useCart();

  return (
    <Container>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <span>R$ {product.price}</span>
      {type === "list" ? (
        <button onClick={() => addProduct(product)}>
          Adicionar ao carrinho
        </button>
      ) : (
        <button onClick={() => deleteProduct(product)}>
          Remover do carrinho
        </button>
      )}
    </Container>
  );
};

export default CardProduct;
