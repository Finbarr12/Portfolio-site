import { styled } from "styled-components";
import pix from "../assets/Finbarr.jpg";

const About = () => {
  return (
    <Container>
      <Left>
        <ImgHold>
          <img src={pix} alt="" />
        </ImgHold>
      </Left>
      <Right>
        <Title>
          {" "}
          <h2>About</h2>
          <h4>
            I'm{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #827ae0",
                fontFamily: "sans-serif",
              }}
            >
              Finbarr
            </span>
          </h4>
          <h6>I'm a Creative Designer and Full stack Developer.</h6>
        </Title>
        <p>
          A qualified FullStack Developer with holistic knowledge of software
          design and development with over 2 years of experience. I have strong
          skills and ability to understand any applications life-cycle in depth
          and writing clean and efficient code. Collaborative team player with
          excellent technical abilities. Proficient in Javascript and Typescript
        </p>
        <Holder>
          <Holding>
            <h5>Full Name:</h5>
            <span>Ogbonna Finbarr Ihechukwu</span>
          </Holding>
          <Holding>
            <h5>Email:</h5>
            <span>ogbonnafinbarr@gmail.com</span>
          </Holding>
          <Holding>
            <h5>Phone no:</h5>
            <span>08087514113</span>
          </Holding>
        </Holder>
      </Right>
    </Container>
  );
};

export default About;

const Holding = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Holder = styled.div`
  margin-left: 60px;

  h5 {
    margin: 0;
    font-size: 19px;
  }
  span {
    font-size: 18px;
    margin-left: 10px;
  }
`;

const Title = styled.div`
  margin-left: 60px;
`;

const Right = styled.div`
  /* margin-right: 60px; */

  p {
    width: 600px;
    font-size: 18px;
    margin-left: 60px;
  }

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px #f5f5f5;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }

  h4 {
    position: absolute;
    top: 15%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;
  }
  h6 {
    margin: 0;
    font-size: 17px;
  }
`;

const Left = styled.div`
  width: 470px;
  height: 470px;
  border: 1px solid #827ae0;
  margin-left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgHold = styled.div`
  width: 90%;
  height: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 40px;
  display: flex;
  position: relative;
  /* justify-content: space-between; */
  /* height: 00px; */
  /* background-color: red; */
`;