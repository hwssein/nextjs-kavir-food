function Layout({ children }) {
  return (
    <>
      <header>
        <p>Header</p>
      </header>

      <main>{children}</main>

      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default Layout;
