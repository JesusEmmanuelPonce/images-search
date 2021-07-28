import Banner from './components/Banner';
import Images from './components/Images';
import NoSearch from './components/NoSearch/NoSearch';
import './App.css';
import { connect } from 'react-redux';

const App = ({ isImages }) => {
  return (
    <div>
      <Banner />
      {
        isImages ? <Images /> : <NoSearch />
      }
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  isImages: search?.isImages ?? false,
});

export default connect(mapStateToProps)(App);
