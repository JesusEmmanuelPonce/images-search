import Banner from './components/Banner';
import Images from './components/Images';
import NoSearch from './components/NoSearch/NoSearch';
import './App.css';
import { connect } from 'react-redux';
import Paginate from './components/Paginate';
import Footer from './components/Footer/Footer';

const App = ({ isImages }) => {
  return (
    <div className="app-container">
      <Banner />
      {
        isImages ? <Images /> : <NoSearch />
      }
      <Paginate />
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  isImages: search?.isImages ?? false,
});

export default connect(mapStateToProps)(App);
