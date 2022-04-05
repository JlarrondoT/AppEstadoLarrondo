import React from 'react';

import {View, Text, Button} from 'react-native';
import {colors} from '../../constants/themes';
import {styles} from './styles';
import {addItem} from "../../store/actions/cart-action";
import { useSelector, connect, useDispatch } from 'react-redux';

const Products = ({navigation, route}) => {
  const product = useSelector(state => state.products.selectedProduct);
  const {name, description, price, weight} = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => dispatch(addItem(product));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>price: ${price}</Text>
      <Text style={styles.text}>weight: {weight}</Text>
      <Button
        title="Agregar al Carrito"
        onPress={() => handleAddToCart()}
        color={colors.primaryColor}
      />
      <View style={styles.cartButton}>
        <Button title="Ir al carrito" onPress={() => navigation.navigate('Cart')} color='#212121'/>
      </View>
    </View>
  );
};

export default connect()(Products)
