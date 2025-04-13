import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

// child component with multiple props
function Student (props) {
  return (
    <div>
      <h1>Student Name: {props.name}</h1>
      <h2>Student Age: {props.age}</h2>
      <h3>Student Class: {props.className}</h3>
    </div>
  );
}
//child component with default props
function Teacher(props) {
  return <h3> Teacher Name: {props.name}</h3>
}
Teacher.defaultProps= {
  name: "Default Teacher"
};
// 🔶 Component with prop-types validation
function Product(props) {
  return (
    <p>
      Product: {props.name}, Price: Rs.{props.price}
    </p>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
};

// 🔷 Component using children props
function Wrapper(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {props.children}
    </div>
  );
}

// ✅ Final App
export default function App() {
  return (
    <div>
      <Student name="राम" age={15} className="10" />

      <Teacher /> {/* Uses default props */}
      <Teacher name="शिव" />

      <Product name="Laptop" price={75000} />

      <Wrapper>
        <h3>यो Heading Wrapper भित्र छ</h3>
        <p>यो पनि Wrapper भित्र छ</p>
      </Wrapper>
    </div>
  );
}


