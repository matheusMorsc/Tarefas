import React, { Component } from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';

export class Tarefas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      items: []
    };

    this.changeText = this.changeText.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  changeText(valor) {
    this.setState({
      inputValue: valor
    });
  }

  addItem() {
    if (this.state.inputValue !== '') {
      var items = this.state.items.concat(this.state.inputValue);
      this.setState({
        inputValue: '',
        items: items
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Clique aqui para inserir um item na lista"
        style={styles.input}
        multiline={true}
        returnKeyType="done"
        blurOnSubmit={true}
        value={this.state.inputValue}
        onChangeText={this.changeText}
        onSubmitEditing={this.addItem}/>
        <FlatList style={styles.list}
        data={this.state.items}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 15
  },
  input: {
    fontSize: 28,
    color: 'black',
    minHeight: 110,
    fontWeight: '500',
  },
  list: {
    paddingTop: 10,
    paddingBotton: 10
  },
  item: {
    fontSize: 28,
    color: 'black'
  }
}
