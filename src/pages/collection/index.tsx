import { Wrapper } from "@src/styled";
import { useNavigate } from "react-router";

const Collection = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>수집</div>

      <div onClick={() => navigate("artwork")}>미술품</div>
    </Wrapper>
  );
};

export default Collection;
