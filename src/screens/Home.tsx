import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../theme/MyColors';
import RegularText from '../components/RegularText';
import SkillTag from '../components/SkillTag';
import SearcInput from '../components/SearcInput';
import HorizontalListWithBtn from '../components/HorizontalListWithBtn';
import HeaderMenus from '../components/HeaderMenus';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {GetCoursesTypes, RootStackParamList} from '../types/interfaces';
import {useQuery} from '@apollo/client';
import {GET_COURSE_TYPES} from '../types/graphqlQueries';
import Loader from '../components/Loader';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import useRefresh from '../hook/useRefresh';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const Home = ({navigation}: Props) => {
  const {loading, data, refetch} = useQuery<GetCoursesTypes>(GET_COURSE_TYPES);

  const handleCardPress = (id: number) => {
    navigation.navigate('Details', {id: id});
  };
  const {refreshing, onRefresh} = useRefresh(refetch);

  if (loading) return <Loader />;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Heading navigation={navigation} datas={data?.courseTypes || []} />

      {data?.courseTypes?.map(courseType => (
        <HorizontalListWithBtn
          key={courseType}
          label={courseType}
          onPress={() => navigation.navigate('Courses', {courseType})}
          datas={[]}
          itemPress={handleCardPress}
        />
      ))}

      <View style={{height: 100}} />
    </ScrollView>
  );
};

interface HeadingProps {
  datas: string[];
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}
const Heading = ({datas, navigation}: HeadingProps) => {
  return (
    <View>
      <View style={styles.welcomeContainer}>
        <RegularText style={styles.welcomeText}>
          Welcome{' '}
          <RegularText
            style={[styles.welcomeText, {color: Colors.primaryDarkColor}]}>
            sf29
          </RegularText>
        </RegularText>

        <HeaderMenus navigation={navigation} />
      </View>

      <SearcInput />

      <FlatList
        contentContainerStyle={{marginVertical: 12}}
        data={datas}
        renderItem={({item}) => (
          <SkillTag
            label={item}
            onPress={() => navigation.navigate('Courses', {courseType: item})}
          />
        )}
        keyExtractor={item => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderColor: '#C6D0D7',
    borderWidth: 1,
    borderRadius: 13,
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 8,
  },
  searchIcon: {
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
  },
});
