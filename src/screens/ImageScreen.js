import React from 'react';

import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ImageDetail from './../components/ImageDetail';

const ImageScreen = () => {
    return <View 
            style={{
                    flex: 1,
                    flexDirection: "column"
                }}
            >
                <ImageBackground 
                    source={{uri:'https://cdn.pixabay.com/photo/2020/12/02/08/49/blackhouse-5796711_960_720.jpg'}} 
                    style={{
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{color: '#ffffff', fontSize: 25 }}>Inside</Text>
                </ImageBackground>
                <ImageBackground 
                    source={{uri:'https://cdn.pixabay.com/photo/2020/12/02/08/49/blackhouse-5796711_960_720.jpg'}} 
                    style={{
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{color: '#ffffff', fontSize: 25 }}>Inside</Text>
                </ImageBackground>
                <ImageBackground 
                    source={{uri:'https://cdn.pixabay.com/photo/2020/12/02/08/49/blackhouse-5796711_960_720.jpg'}} 
                    style={{
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{color: '#ffffff', fontSize: 25 }}>Inside</Text>
                </ImageBackground>
                <ImageDetail 
                    title="Forest" 
                    imageSource={require('../../assets/forest.jpg')}  
                    imageScore={9}
                />
            </View>
    
}

const styles = StyleSheet.create({});

export default ImageScreen;