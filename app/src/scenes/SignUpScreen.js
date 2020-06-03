/*Screen to register the user*/
import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});
export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      email: '',
      password: '',
    };
  }
  register_user = () => {
    var that = this;
    const {user_name} = this.state;
    const {email} = this.state;
    const {password} = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if (email) {
        if (password) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_name, email, password) VALUES (?,?,?)',
              [user_name, email, password],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => that.props.navigation.navigate('Home'),
                      },
                    ],
                    {cancelable: false},
                  );
                } else {
                  alert('Registration Failed');
                }
              },
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  };
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{flex: 1, justifyContent: 'space-between'}}>
            <MyTextInput
              placeholder="Enter Name"
              onChangeText={user_name => this.setState({user_name})}
              style={{padding: 10}}
            />
            <MyTextInput
              placeholder="Enter Email"
              onChangeText={email => this.setState({email})}
              style={{padding: 10}}
            />
            <MyTextInput
              placeholder="Enter password"
              onChangeText={password => this.setState({password})}
              style={{textAlignVertical: 'top', padding: 10}}
            />

            <MyButton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
