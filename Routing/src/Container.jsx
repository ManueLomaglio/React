function Container({ title, children }) {
  return (
    <div>
      <header>{title}</header>

      <main>{children}</main>
    </div>
  );
}
export default Container;
