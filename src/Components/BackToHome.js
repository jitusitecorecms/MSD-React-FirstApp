import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link to="/" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default BackToHome;
