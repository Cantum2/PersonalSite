import styled from "styled-components";

const LoadingIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border: 12px solid whitesmoke;
  border-radius: 50%;
  border-top: 12px solid hsl(0, 61%, 50%);
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default LoadingIcon;