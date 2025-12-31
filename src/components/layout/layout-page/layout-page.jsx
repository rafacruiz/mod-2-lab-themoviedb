
function LayoutPage({ children }) {

  return (
    <>
        <div className="container py-2">
          { children }
        </div>
    </>
  );
}

export default LayoutPage;