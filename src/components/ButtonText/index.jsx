import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }){
  return (
    <Container 
      type="Button"
      $isactive={isActive.toString()}
      {...rest}
      >
      {title}
    </Container>
  );
}