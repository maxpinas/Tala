import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';

const EditToolbar = ({ word, onMoveLeft, onMoveRight, onDelete, onDeselect }) => (
  <View style={styles.editToolbar}>
    <View style={styles.editInfo}>
      <Text style={styles.editLabel}>Geselecteerd: </Text>
      <Text style={styles.editWord}>"{word}"</Text>
    </View>
    <View style={styles.editActions}>
       <TouchableOpacity style={styles.editBtn} onPress={onMoveLeft}>
         <Feather name="arrow-left" size={24} color="#FFF" />
       </TouchableOpacity>
       <TouchableOpacity style={styles.editBtn} onPress={onMoveRight}>
         <Feather name="arrow-right" size={24} color="#FFF" />
       </TouchableOpacity>
       <TouchableOpacity style={[styles.editBtn, {backgroundColor: theme.danger}]} onPress={onDelete}>
         <Feather name="trash-2" size={20} color="#FFF" />
       </TouchableOpacity>
       <TouchableOpacity style={[styles.editBtn, {backgroundColor: theme.surfaceHighlight}]} onPress={onDeselect}>
         <Feather name="check" size={20} color={theme.success} />
       </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  editToolbar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    backgroundColor: theme.surface, 
    padding: 12, 
    marginHorizontal: 24, 
    borderRadius: 16, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: theme.primary 
  },
  editInfo: { 
    flex: 1 
  },
  editLabel: { 
    color: theme.textDim, 
    fontSize: 10, 
    fontWeight: 'bold', 
    textTransform: 'uppercase' 
  },
  editWord: { 
    color: theme.primary, 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  editActions: { 
    flexDirection: 'row' 
  },
  editBtn: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: theme.surfaceHighlight, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 8 
  },
});

export default EditToolbar;
