const Blog = ({ needFullHeight }) => {
  return (
    <section className={`${needFullHeight && "min-h-100vh"} blog wrapper`}>
      <h2 className="section-title">Comming soon......</h2>
    </section>
  );
};

export default Blog;
