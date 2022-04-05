import React from 'react';

import {View, FlatList, Text, Button} from 'react-native';
import {styles} from './styles';
import {connect, useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../store/actions/cart-action";

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const handleRemoveFromCart = (id) => dispatch(removeItem(id));

  const renderItem = ({item}) => (
    <View style={styles.itemWrapper}>
      <View style={styles.textWrapper}>
        <Text>{item.name}</Text>
        <Text>{`$${item.price}`}</Text>
      </View>
      <Button title={'Eliminar'} onPress={()=> handleRemoveFromCart(item.id)}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.text}>Total: </Text>
        <Text style={styles.text}>${total}</Text>
      </View>
    </View>
  );
};

export default connect()(Cart);
