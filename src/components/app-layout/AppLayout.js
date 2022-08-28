import Footer from "../footer/Footer";
import Grid from "../grid/Grid";
import Header from "../header/Header";

function AppLayout() {
  return (
    <div id="app-wrapper">
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default AppLayout;
