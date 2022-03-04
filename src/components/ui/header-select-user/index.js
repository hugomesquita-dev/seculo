import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

Icon.loadFont();

import {
  getSelectedStudent,
  getStudents,
  selectStudent,
} from '../../../redux/students/actions';

const leiaMais = (string, limite) => {
  if(string.length > limite){
    return string.substring(0, limite).concat("...");
  }else{
    return string;
  }
}


class HeaderSelectUser extends React.Component {
  state = {
    modal: false,
    student: ""
  };

  componentDidMount = () => {
    this.props.dispatch(getSelectedStudent());

    this.setState({
      student: this.props.auth.student.NM_ALUNO
    })

    console.log("\n\n **NOME ALUNO** "+this.props.auth.student.NM_ALUNO+" \n\n")

  };

  // componentDidUpdate = () => {
   
  // }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleSelctStudent = (student) => {
    this.props.dispatch(selectStudent(student));

    this.setState({
      modal: !this.state.modal,
      student: student.NM_ALUNO
    });
  };

  render() {
    if (this.props.auth.user.USU_TIPO === 'aluno') {
      return null;
    }

    return (
      <View>
        <Modal
          isVisible={this.state.modal}
          hasBackdrop={true}
          onBackdropPress={this.toggleModal}>
          <View
            style={{backgroundColor: '#FFFFFF', padding: 20, borderRadius: 10}}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: 10,
                  fontSize: 16,
                }}>
                Selecione o aluno
              </Text>
              {this.props.auth.students.map((student, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.handleSelctStudent(student)}
                  style={{
                    backgroundColor: '#4674b7',
                    padding: 10,
                    marginBottom: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                    }}>
                    {student.NM_ALUNO}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              onPress={this.toggleModal}
              style={{marginVertical: 10}}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={this.toggleModal}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingRight:20,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: '#E8E8E8',
            backgroundColor: '#FFFFFF',
            paddingVertical: 10,
          }}>
          <Image
            resizeMode="stretch"
            style={{width: 30, height: 30}}
            source={require('../../../assets/images/user-select.png')}
          />
          <Text style={{fontSize: 12, fontWeight:'bold'}}>
              {leiaMais(this.state.student,25)}
          </Text>
          
          <Icon name="angle-down" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}
//<Icon name="arrow-down" />
const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(HeaderSelectUser);
