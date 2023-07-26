import styled from "styled-components";
import { Card } from "../common";

const Services = () => {
  return (
    <Container>
      <h2>Services</h2>
      <h4>What I Do?</h4>
      <Hold>
        <Card
          title="UI/UX"
          desc=" I use tools like Figma to create wireframes and interactive prototypes, allowing me to visualize and iterate on the design before starting the development phase. I have an eye to create appealing user interface."
        />
        <Card
          title="Full Stack Development"
          desc=" Harness the power of (MongoDB, Express.js, React.js, and Node.js) to build scalable and efficient web applications. From concept to execution, I cover every stage of development with utmost  creativity."
        />
        <Card
          title="Frontend Development"
          desc="Leverage the potential of React.js to develop interactive and visually stunning user interfaces. I implement the best practices in frontend development to create responsive, mobile-friendly, and user-centric designs."
        />
        <Card
          title="Backend Development"
          desc=" I excel in building scalable and secure backend systems using Node.js and Express.js. With a strong focus on performance and data integrity, I ensure your application runs smoothly even under heavy traffic.

"
        />
        <Card
          title="Database  Management"
          desc=" Harness the power of MongoDB's NoSQL database to handle large volumes of data efficiently. From database design to migration and maintenance, I guarantee optimal data organization and retrieval."
        />
        <Card
          title="API Development"
          desc=" Enable seamless communication between your frontend and backend with robust RESTful APIs. I design and implement APIs that facilitate smooth data flow and integration with other services."
        />
      </Hold>
    </Container>
  );
};

export default Services;

const Hold = styled.div`
  width: 90%;
  min-height: 200px;
  /* background-color: red; */
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
  background-color: #f5f5f5;

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }

  h4 {
    position: absolute;
    top: 7%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;
  }
`;