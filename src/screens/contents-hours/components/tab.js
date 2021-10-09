import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();


const Tab = ({data, active, changeTabSelected}) => {

    return (
        <ScrollView style={{marginTop:20, marginBottom:20}}>
        <View style={{backgroundColor: '#F1F1F2'}}>
          <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
            
            <TouchableOpacity style={[
                styles.menu,
                {backgroundColor: active === 0 ? '#E2B94B' : '#fff'},
            ]} 
            onPress={() => changeTabSelected(0)}>
              <Text style={[
                styles.menuText,
                {color: active === 0 ? '#fff' : '#4674b7'},
            ]}>SEG</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={[
                styles.menu,
                {backgroundColor: active === 1 ? '#E2B94B' : '#fff'},
            ]}
            onPress={() => changeTabSelected(1)}>
              <Text style={[
                styles.menuText,
                {color: active === 1 ? '#fff' : '#4674b7'},
            ]}>TER</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[
                styles.menu,
                {backgroundColor: active === 2 ? '#E2B94B' : '#fff'},
            ]}
            onPress={() => changeTabSelected(2)}>
              <Text style={[
                styles.menuText,
                {color: active === 2 ? '#fff' : '#4674b7'},
            ]}>QUA</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[
                styles.menu,
                {backgroundColor: active === 3 ? '#E2B94B' : '#fff'},
            ]}
            onPress={() => changeTabSelected(3)}>
              <Text style={[
                styles.menuText,
                {color: active === 3 ? '#fff' : '#4674b7'},
            ]}>QUI</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[
                styles.menu,
                {backgroundColor: active === 4 ? '#E2B94B' : '#fff'},
            ]}
            onPress={() => changeTabSelected(4)}>
              <Text style={[
                styles.menuText,
                {color: active === 4 ? '#fff' : '#4674b7'},
            ]}>SEX</Text>
            </TouchableOpacity>
          </View>
          
           <View>
              <Text>{/*active*/}</Text>
              <Text style={styles.contentTitle}>
                 <Icon name="calendar" color="#FFF" size={20} />
                <Text style={{fontSize:14}}> {data.ds_dia}</Text>
              </Text>
              <FlatList 
                data={data.ds_content[0]}
                keyExtractor={(item) => item.ID}
                renderItem={(itemData) => 
                
                  
              <View style={styles.contentView}>
                {/*<Text style={{backgroundColor:'#cc0000', padding:10}}>{itemData.item.DS_DIASEMANA}</Text>*/}
                <Text style={styles.contentDisciplina}>
                  {/* <Icon name="book" size={20} color="#4674B7"/> */}

                  {itemData.item.NOME} - {itemData.item.HORAINICIAL} até as {itemData.item.HORAFINAL}
                  </Text>
                <Text style={styles.contentText}>{itemData.item.CONTEUDOEFETIVO == null ? '-' : itemData.item.CONTEUDOEFETIVO}</Text>
              </View>
            }
          />
           </View>
          

        </View>
      </ScrollView>
    );

};

/**
 *   <FlatList 
             data={[data]}
             keyExtractor={(item) => item.id}
             renderItem={(itemData) => 
              <View>
                <Text style={{backgroundColor:'#cc0000', padding:10}}>{itemData.item.ds_dia}</Text>
                <Text>{itemData.item.ds_disciplina}</Text>
              </View>
            }
            
            />
 */
const styles = StyleSheet.create({
    menu: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#c3c3c3',
    },
    menuText: {
      color: '#4674b7',
      fontWeight: 'bold',
    },
    contentTitle:{
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
      paddingHorizontal:15,
      paddingVertical:10,
      marginBottom: 20,
      borderRadius:25,
      borderWidth:1,
      backgroundColor: '#4674b7',
      borderColor: '#4674b7',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentView: {
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderWidth: 1,
      borderColor: '#BBBCBF',
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: '#FFFFFF'
    },
    contentDisciplina:{
      color: '#4674B7', 
      fontWeight: 'bold',
      fontSize:14,
      textTransform: 'uppercase'
    },
    contentText:{
      fontSize: 14,
      marginTop: 5
    }


  });
export default Tab;