import styled from "@emotion/styled";
import colors from "@/styles/colors.json";
import boxShadow from "@/styles/boxShadow.json";

const WrapperBox = styled.div({
  background: colors.primary,
  borderRadius: "0.5rem",
  boxShadow: boxShadow.MAIN,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "0.5rem 1rem",
  maxWidth: "380px",
  width: "100%",
});

export default WrapperBox;
