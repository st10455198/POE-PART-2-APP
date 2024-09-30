import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Modal, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [isStartersModalVisible, setStartersModalVisible] = useState(false);
  const [isMainDishModalVisible, setMainDishModalVisible] = useState(false);
  const [isDessertModalVisible, setDessertModalVisible] = useState(false);
  const [isAddItemModalVisible, setAddItemModalVisible] = useState(false);

  const [menuItems, setMenuItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const logoImg = require("./assets/Buffalo-wings.png");
  const maindish = require('./assets/Chicken-tikka-masala.png');
  const Dessert = require('./assets/Red-velvet-cake.png');

  const handleAddItem = () => {
    if (!itemName || !itemDescription || !itemPrice) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newItem = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
    };

    setMenuItems([...menuItems, newItem]);
    Alert.alert("Item Added", `${itemName} has been added to the menu!`);

    // Clear input fields
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setAddItemModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Menutitle}>Menu List</Text>
      <Text style={styles.countText}>Total Menu Items: {menuItems.length}</Text>

      {/* Add Item Button */}
      <TouchableOpacity style={styles.button} onPress={() => setAddItemModalVisible(true)}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      {/* Starters Button */}
      <View style={styles.buttonContainer}>
        <Image source={logoImg} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => setStartersModalVisible(true)}>
          <Text style={styles.buttonText}>Starters Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Main Dish Button */}
      <View style={styles.buttonContainer}>
        <Image source={maindish} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => setMainDishModalVisible(true)}>
          <Text style={styles.buttonText}>Main Dish</Text>
        </TouchableOpacity>
      </View>

      {/* Dessert Button */}
      <View style={styles.buttonContainer}>
        <Image source={Dessert} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => setDessertModalVisible(true)}>
          <Text style={styles.buttonText}>Dessert Dish</Text>
        </TouchableOpacity>
      </View>

      {/* Add Item Modal */}
      <Modal 
        visible={isAddItemModalVisible} 
        onRequestClose={() => setAddItemModalVisible(false)}
        animationType='slide'
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Menu Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={itemName}
            onChangeText={setItemName}
          />
          <TextInput
            style={styles.input}
            placeholder="Dish Name"
            value={itemDescription}
            onChangeText={setItemDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Price (e.g., R150)"
            value={itemPrice}
            onChangeText={setItemPrice}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setAddItemModalVisible(false)}>
            <Text style={styles.buttonText}>Back to Menu </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Starters Modal */}
      <Modal 
        visible={isStartersModalVisible} 
        onRequestClose={() => setStartersModalVisible(false)}
        animationType='slide'
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Starters Menu</Text>
          <Image source={logoImg} style={styles.modalImage} />
          <Text>Buffalo Wings [R150]</Text>
          <Text>Buffalo wings, deep-fried unbreaded Buffalo wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter.</Text>
          <TouchableOpacity style={styles.button} onPress={() => setStartersModalVisible(false)}>
            <Text style={styles.buttonText}>Back to Menu List</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Main Dish Modal */}
      <Modal 
        visible={isMainDishModalVisible} 
        onRequestClose={() => setMainDishModalVisible(false)}
        animationType='slide'
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Main Dish Menu</Text>
          <Image source={maindish} style={styles.modalImage} />
          <Text>Chicken Tikka Masala [R320]</Text>
          <Text>Chicken tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in a spiced sauce. The sauce is usually creamy and orange-coloured.</Text>
          <TouchableOpacity style={styles.button} onPress={() => setMainDishModalVisible(false)}>
            <Text style={styles.buttonText}>Back to Menu List</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Dessert Modal */}
      <Modal 
        visible={isDessertModalVisible} 
        onRequestClose={() => setDessertModalVisible(false)}
        animationType='slide'
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Dessert Menu</Text>
          <Image source={Dessert} style={styles.modalImage} />
          <Text>Red velvet cake [R110]</Text>
          <Text>Red velvet cake is traditionally a red, crimson, or scarlet-colored layer cake, layered with ermine icing.</Text>
          <TouchableOpacity style={styles.button} onPress={() => setDessertModalVisible(false)}>
            <Text style={styles.buttonText}>Back to Menu List</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  Menutitle: {
    paddingTop: 40,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 30,
    textAlign: 'left',
  },
  countText: {
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#deb887',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    color: 'Black',
    marginBottom: 20,
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '80%',
    borderRadius: 5,
  },
});
