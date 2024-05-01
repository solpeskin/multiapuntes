import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({ info }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image resizeMode='cover' source={{ uri: info.imgUsuario }} style={styles.imagenPerfil} />
        <Text style={styles.nombreUsuario}>{info.nombreUsuario}</Text>
      </View>
      <View style={styles.etiquetas}>
        <Text style={[styles.etiqueta, { backgroundColor: '#9A3B3B' }]}>{info.tema}</Text>
        <Text style={[styles.etiqueta, { backgroundColor: '#C08261' }]}>{info.materia}</Text>
        <Text style={[styles.etiqueta, { backgroundColor: '#c7aa79' }]}>{info.año}</Text>
      </View>
      <View style={styles.docContainer}>
        <Image resizeMode='cover' style={styles.doc} source={{ uri: info.doc }} />  
      </View>
      <View style={styles.descripcion}>
        <Text style={[styles.text, {color: '#9A3B3B'}]}>{info.descripcion}</Text>
        <Text style={[styles.text, {color: '#d69776'}]}>{info.fecha}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#F2ECBE', 
    //borderRadius: 10,
    //borderWidth: 1,
    //borderColor: '#ccc',
    //padding: 10,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagenPerfil: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  nombreUsuario: {
    fontFamily: "Roboto",
    color: '#9A3B3B', 
  },
  etiquetas: {
    flexDirection: 'row',
  },
  etiqueta: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    fontFamily: "Roboto",
    color: '#F2ECBE', 
  },
  docContainer:{
    flex: 1, 
    justifyContent: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#C08261', 
    //borderRadius: 10,
  },
  doc: {
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
  },
  descripcion: {
    padding: 10,
    marginBottom: 10, 
  },
  text: {
    fontFamily: "Roboto",
  },
});

export default Post;
