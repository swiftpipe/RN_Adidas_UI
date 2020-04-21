import React from 'react';

import {Block, Button, TextView} from './components';
import {Colors} from './Colors';
import {StyleSheet, Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
const W = Dimensions.get('window').width;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    padding: 15,
  },
  adidas: {
    // marginLeft: 40,
    padding: 60,
    shadowOpacity: 0.5,
    shadowRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {height: 2, width: 0},
  },
  img: {
    transform: [{rotate: '18deg'}],
    // flex: 1,
  },
  desc: {
    lineHeight: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  textMore: {
    color: 'red',
    textDecorationLine: 'underline',
    paddingHorizontal: 20,
  },
  sizeCon: {
    backgroundColor: Colors.dark_blue,
    padding: 10,
    width: 40,
    aspectRatio: 1,
    borderRadius: 8,
    marginEnd: 10,
  },
  sizeConSelected: {
    backgroundColor: Colors.carrot,
    padding: 10,
    width: 40,
    aspectRatio: 1,
    borderRadius: 8,
    marginEnd: 10,
  },
  quan: {
    backgroundColor: Colors.main,
    padding: 10,
    width: 40,
    aspectRatio: 1,
  },
  wrapbtn: {
    overflow: 'hidden',
  },
  btnSelectColor: {
    // padding: 10,
    width: 40,
    height: 40,
    // aspectRatio: 1,
    borderRadius: 8,
    marginEnd: 10,
    overflow: 'hidden',
  },
  bar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 0,
    height: 0,
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderRightColor: 'transparent',
    borderTopColor: Colors.dark_bar,
    transform: [{rotate: '180deg'}],
    bottom: 0,
    right: 0,
  },
  cart: {
    width: W / 2,
    position: 'absolute',
    bottom: -120,
    right: -60,
  },
});

const colors = [
  Colors.red,
  Colors.blue,
  Colors.dark_yellow,
  Colors.cyan,
  Colors.green,
  Colors.dark_carrot,
];

const ButtonSelectColor = ({color}) => {
  return (
    <Button style={[styles.btnSelectColor, {backgroundColor: color}]}>
      <Block style={styles.bar} />
    </Button>
  );
};

const Wrapper = ({title, children}) => {
  return (
    <Block>
      <TextView bold color="gray" size={18}>
        {title}
      </TextView>
      <Block middle direction="row" paddingHorizontal={20} paddingVertical={10}>
        {children}
      </Block>
    </Block>
  );
};

const MainScreen = () => {
  return (
    <Block block>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.main1, Colors.main]}
        style={styles.linearGradient}>
        <Block direction="row" justifyContent="space-between">
          <Button>
            <AntDesign size={30} name="arrowleft" color={'white'} />
          </Button>
          <TextView h5 color={'white'}>
            Energy Cloud
          </TextView>
          <Button>
            <AntDesign size={30} name="hearto" color={'white'} />
          </Button>
        </Block>
        <Block middle centered shadow style={styles.adidas}>
          <Image
            resizeMode="cover"
            style={styles.img}
            source={require('./assets/adidas.png')}
          />
        </Block>
        <Wrapper title="Rating">
          <AntDesign name="star" size={18} color={Colors.yellow} />
          <TextView bold color={Colors.yellow}>
            {' '}
            4.5{' '}
            <TextView color="gray" size={12}>
              (578 people)
            </TextView>
          </TextView>
        </Wrapper>

        <Block>
          <TextView bold color="gray" size={18}>
            Product Description
          </TextView>
          <TextView color="white" style={styles.desc}>
            Get maximum support, comfort and a refreshed look with these adidas
            Energy Cloud <TextView style={styles.textMore}>more</TextView>
          </TextView>
        </Block>
        <Block direction="row">
          <Block>
            <TextView bold color="gray" size={18}>
              Size
            </TextView>
            <Block
              direction="row"
              borderRadius={8}
              paddingHorizontal={20}
              paddingVertical={10}>
              <Button shadow style={styles.sizeCon}>
                <TextView center color="#fff" bold h6>
                  7
                </TextView>
              </Button>
              <Button shadow style={styles.sizeCon}>
                <TextView center color="#fff" bold h6>
                  8
                </TextView>
              </Button>
              <Button shadow style={styles.sizeConSelected}>
                <TextView center color="#fff" bold h6>
                  9
                </TextView>
              </Button>
              <Button shadow style={styles.sizeCon}>
                <TextView center color="#fff" bold h6>
                  10
                </TextView>
              </Button>
            </Block>
          </Block>
          <Block>
            <TextView bold color="gray" size={18}>
              Quantity
            </TextView>
            <Block direction="row" paddingHorizontal={20} paddingVertical={10}>
              <Block
                borderRadius={8}
                shadow
                style={styles.wrapbtn}
                color={Colors.dark_blue}
                direction="row">
                <Button style={styles.quan}>
                  <TextView center color="#fff" bold h6>
                    -
                  </TextView>
                </Button>
                <Button
                  style={[
                    styles.quan,
                    {
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderColor: Colors.dark_blue,
                    },
                  ]}>
                  <TextView center color="#fff" bold h6>
                    1
                  </TextView>
                </Button>
                <Button style={styles.quan}>
                  <TextView center color="#fff" bold h6>
                    +
                  </TextView>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
        <Wrapper title="Select Color">
          <Block direction="row">
            {colors.map(e => {
              return <ButtonSelectColor color={e} />;
            })}
          </Block>
        </Wrapper>
        <Wrapper title="Price">
          <TextView h3 color="#fff">
            $ 80
          </TextView>
        </Wrapper>
        <Block paddingVertical={12}>
          <Button color={Colors.carrot} padding={12} borderRadius={10} shadow>
            <TextView h5 color="#fff">
              Add To Card
            </TextView>
          </Button>
          <Image style={styles.cart} source={require('./assets/cart.png')} />
        </Block>
      </LinearGradient>
    </Block>
  );
};

export default MainScreen;
