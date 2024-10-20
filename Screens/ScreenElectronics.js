import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const product = [
    {name: "SmartPHone1", imageProduct: require('../assets/Data/1.png')},
    {name: "SmartPHone2", imageProduct: require('../assets/Data/2.png')},
    {name: "SmartPHone3", imageProduct: require('../assets/Data/3.png')},
    {name: "SmartPHone4", imageProduct: require('../assets/Data/4.png')},
];

const ScreenElectronics = () => {

  
        const renderItem = ({ item }) => (

            <View style={styles.product}>
                <Image source={item.imageProduct} style={styles.productImage} />
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Image source={require('../assets/Data/Rating.png')} style={styles.ratingStyle}/>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Electronics</Text>
                <TouchableOpacity>
                    <Icon name='user' size={40} color="black"/>
                </TouchableOpacity>
            </View>
            
            {/* Search Bar */}
            <View style={styles.searchContainer}>
           
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Search" 
                />
                <TouchableOpacity style={styles.filterButton}>
                    {/* <Image
                        source={require('../assets/Data/clarity_home-solid.png')} 
                        style={styles.filterIcon}
                    /> */}

                    <Icon name='navicon' size={20} color="black"/>
                </TouchableOpacity>
            </View>

            {/* Categories */}
            <ScrollView horizontal={true} style={styles.categories}>
                <View style={styles.category}>
                    <Image source={require('../assets/Data/smart.png')} style={styles.categoryImage} />
                 
                </View>
                <View style={styles.category2}>
                    <Image source={require('../assets/Data/ipad.png')} style={styles.categoryImage} />
                   
                </View>
                <View style={styles.category3}>
                    <Image source={require('../assets/Data/macbook.png')} style={styles.categoryImage} />
                    
                </View>
            </ScrollView>

            {/* Tabs */}
            <View style={styles.tabs}>
                <TouchableOpacity style={styles.tabActive}>
                    <Text style={styles.tabTextActive}>Best Sales</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Popular</Text>
                </TouchableOpacity>
            </View>

            {/* Products */}
            {/* <ScrollView>
                <View style={styles.product}>
                    <Image source={require('../assets/Data/1.png')} style={styles.productImage} />
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>Smartphone</Text>
                        <Image source={require('../assets/Data/Rating.png')} style={styles.ratingStyle}/>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.product}>
                    <Image source={require('../assets/Data/2.png')} style={styles.productImage} />
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>Smartphone</Text>
                        <Image source={require('../assets/Data/Rating.png')} style={styles.ratingStyle}/>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.product}>
                    <Image source={require('../assets/Data/3.png')} style={styles.productImage} />
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>Smartphone</Text>
                        <Image source={require('../assets/Data/Rating.png')} style={styles.ratingStyle}/>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.product}>
                    <Image source={require('../assets/Data/3.png')} style={styles.productImage} />
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>Smartphone</Text>
                        <Image source={require('../assets/Data/Rating.png')} style={styles.ratingStyle}/>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>*/}

            <FlatList
                data={product}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    ratingStyle:{
        marginTop:15
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    filterButton: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
    },
    filterIcon: {
        width: 20,
        height: 20,
    },
    categories: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d9cbf6', 
        width: 100,  
        height: 100, 
        borderRadius: 10, 
        margin: 10,
        borderWidth: 2, 
        borderColor:'#8454e2'
      },
      category2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c5d1f7', 
        width: 100,  
        height: 100, 
        borderRadius: 10, 
        margin: 10,
      },
      category3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9d8c0', 
        width: 100,  
        height: 100, 
        borderRadius: 10, 
        margin: 10,
      },

      categoryImage: {
        width: 80, 
        height: 80, 
        resizeMode: 'contain', 
      },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
       
    },
    tabActive: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#ebfdff',
    },
    tabText: {
        fontSize: 14,
        color: 'gray',
        fontWeight:'bold'
    },
    tabTextActive: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#26c7dc',
    },
    product: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    productDetails: {
        marginLeft: 20,
        justifyContent: 'center',
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        marginTop: 5,
        fontSize: 16,
        color: '#333',
    },
    addButton: {
        width: 30,
        height: 30,
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default ScreenElectronics;