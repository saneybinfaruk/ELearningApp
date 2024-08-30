import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MediumText from './MediumText';
import SemiBoldText from './SemiBoldText';
import {webDesignSkills} from '../constants/datas';
import SkillTag from './SkillTag';

const Skills = ({skills}: {skills: string[]}) => {
  return (
    <View>
      <SemiBoldText style={styles.heading}>Skills</SemiBoldText>
      <View style={styles.skillContainer}>
        {skills.map((skill, index) => (
          <SkillTag
            key={skill + index}
            label={skill}
            onPress={() => {}}
            borderRadius={50}
          />
        ))}
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  heading: {
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 12,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 3,
    rowGap: 15,
  },
});
