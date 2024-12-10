import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";

const AddProduct = ({ route, navigation }) => {
  const { productData } = route.params; // Receive product details from ScreenElectronics

  const [newProduct, setNewProduct] = useState(productData); // Initialize state from productData

  // Update state when the productData changes
  useEffect(() => {
    if (productData) {
      setNewProduct(productData);
    }
  }, [productData]);

  // Save the updated product
  const handleSaveProduct = async () => {
    try {
      const response = await fetch(`https://671ce99809103098807b9b28.mockapi.io/api/Login/Product/${newProduct.id}`, {
        method: 'PUT', // Use PUT to update the product
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        Alert.alert("Success", "Product details have been saved!");
        navigation.goBack(); // Go back to the previous screen
      } else {
        Alert.alert("Error", "Failed to save product!");
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      {/* Display Product Image */}
      <Image source={{ uri: newProduct.imgProduct }} style={styles.productImage} />
      <Text style={styles.productName}>{newProduct.name}</Text>

      {/* Editable Product Name */}
      <TextInput
        style={styles.input}
        value={newProduct.name}
        onChangeText={(text) => setNewProduct({ ...newProduct, name: text })}
      />

      {/* Save Button */}
      <TouchableOpacity onPress={handleSaveProduct} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#26c7dc",
    borderRadius: 5,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddProduct;
