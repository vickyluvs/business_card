import About from "./About";
import Info from "./Info";
import Interests from "./Interests";
import Socials from "./Socials";

export default function Main() {
  return (
    <div className="main--container">
      <Info />
      <About />
      <Interests />
      <Socials />
    </div>
  );
}
