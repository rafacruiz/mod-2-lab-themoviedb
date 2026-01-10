import { Jumbotron } from "../../ui";

function LayoutPage({ children, title }) {

  return (
    <>
        <Jumbotron title={ title } />
        <div className="container py-2">
          { children }
        </div>
    </>
  );
}

export default LayoutPage;