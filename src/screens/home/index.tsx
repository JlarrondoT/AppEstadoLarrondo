import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {styles} from './styles';
import CategoryGrid from '../../components/molecules/category-grid/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useSelector, useDispatch, connect } from 'react-redux'
import {selectedCategory} from "../../store/actions/category-action";
import {IReducers} from "../../store";

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: IReducers) => state.categories.categories)
  const handleSelectCategory = (category) => {
    dispatch(selectedCategory(category.id))
    navigation.push('Category')
  }

  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );

  return (
    <View
      style={[
        styles.container,
      ]}>
      <Text style={styles.title}>Selecciona una categoria</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Home);
