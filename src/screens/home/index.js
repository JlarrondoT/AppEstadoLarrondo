import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {styles} from './styles';
import CategoryGrid from '../../components/molecules/category-grid/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useSelector, useDispatch, connect } from 'react-redux'
import {selectedCategory} from "../../store/actions/category-action";

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories)
  const handleSelectCategory = (category) => {
    dispatch(selectedCategory(category.id))
    navigation.navigate('Category', { name: category.name })
  }

  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
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
