import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { GAP, styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Images } from '../../assets'
import { Colors } from '../../utils/colors'
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions'
import { ACTIVE_OPACITY } from '../../utils/constants'
import { HeaderCategory } from './widget/Header'

export const CategoriesScreen = () => {
  const categories = useSelector((state: any) => state?.categoryReducer?.categories);
  const dispatch = useDispatch() as any;
  const [select, setSelect] = useState([]);

  const _handleSelect = (index: number) => {
    const newSelect = [...select];
    newSelect[index] = !newSelect[index];
    setSelect(newSelect);
  }

  useEffect(() => _getData(), []);

  const _getData = () => {
    dispatch(getCategories());
  }

  const _renderItem = ({ item, index }) => {
    const isActive = select[index];
    return (
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={() => _handleSelect(index)}>
        <LinearGradient key={`CategoriesScreen${index}`} colors={isActive ? Colors.linearGradient_3 : Colors.linearGradient_2} style={styles.itemContainer}>
          <Text style={styles.txtItem}>{item?.name ?? ''}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'stretch'}
        source={Images.background_1} style={styles.imageBackground} />
      <LinearGradient
        colors={Colors.linearGradient_1} style={styles.linearGradient}>
        <HeaderCategory />
        <Text style={styles.txtWelcome}>{'Wellcome to Nexle Entrance Test'}</Text>
        <Text style={styles.subWelcome}>{'Please select categories what you would like to see on your feed. You can set this later on Filter.'}</Text>
        <FlatList
          data={categories ?? []}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          columnWrapperStyle={{ gap: GAP }}
          renderItem={_renderItem}
        />
      </LinearGradient>
    </View>
  )
}
