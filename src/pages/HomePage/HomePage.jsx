import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Hero />
  </>
);

export default HomePage;
