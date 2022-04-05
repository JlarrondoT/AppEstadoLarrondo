import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from './styles';

const CategoryGrid = ({item, onSelected}) => {
  let uri;
  switch (item.id) {
    case 1:
      uri = require('../../../../assets/imgs/harina.png');
      break;
    case 2:
      uri = require('../../../../assets/imgs/levadura.png');
      break;
    case 3:
      uri = require('../../../../assets/imgs/aceite.png');
      break;
    case 4:
      uri = require('../../../../assets/imgs/baguette.png');
      break;
    case 5:
      uri = require('../../../../assets/imgs/panaceituna.png');
      break;
    case 6:
      uri = require('../../../../assets/imgs/panmasamadre.png');
      break;
    case 7:
      uri = require('../../../../assets/imgs/panmolde.png');
      break;
  }
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <ImageBackground
        source={uri}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{borderRadius: 20}}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => onSelected(item)}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default CategoryGrid;
