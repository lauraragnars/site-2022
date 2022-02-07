import Footer from '../footer/Footer';
import Header from '../header/Header';
import Grid from '../grid/Grid'

function AppLayout() {
    return (
      <div id="app-wrapper">
        <Grid />
        <Header />

        <Footer />
      </div>
    );
  }
  
  export default AppLayout;
  