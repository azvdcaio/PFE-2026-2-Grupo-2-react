import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ theme = "hub", children }) {
  return (
    <div data-theme={theme}>
      <Header theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
