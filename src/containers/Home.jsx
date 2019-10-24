/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
/*import Header from '../components/Header';*/
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
/*import Footer from '../components/Footer';*/
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) =>
              <Carouselitem
                key={item.id}
                {...item}
                isList
              />)}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de Pltzi Video'>
        <Carousel>
          {originals.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
