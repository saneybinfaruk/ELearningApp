import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ExtraBoldText from '../components/ExtraBoldText';
import SemiBoldText from '../components/SemiBoldText';
import {Colors} from '../theme/MyColors';
import RegularText from '../components/RegularText';
import CButton from '../components/CButton';
import CourseInfo from '../components/CourseInfo';
import StarRating from '../components/StarRating';
import plusIcon from '../../assets/photos/plus_icon.png';
import CheckMark from '../../assets/photos/check_mark.png';
import TransitionCompletedImage from '../../assets/photos/complete.png';
import PurchaseDetails from '../components/Details/PurchaseDetails';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Course, GetCourse, RootStackParamList} from '../types/interfaces';
import {useQuery} from '@apollo/client';
import {GET_COURSE} from '../types/graphqlQueries';
import Loader from '../components/Loader';
import {useDispatch} from 'react-redux';
import {addToEnrolledList} from '../redux/CourseEnrollSlice';
type Props = NativeStackScreenProps<RootStackParamList, 'Enroll'>;

const Enroll = ({navigation, route}: Props) => {
  const id = route.params.id;
  const [selected, setSelected] = useState(1);
  const dispatch = useDispatch();

  const {data, loading} = useQuery<GetCourse>(GET_COURSE, {
    variables: {id: id},
  });

  if (loading) return <Loader />;
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Stepper selected={selected} />

        {selected === 1 && <StepOne course={data?.course!} />}
        {selected === 2 && <StepTwo course={data?.course!} />}
        {selected === 3 && <StepThree />}

        <View style={{height: 60}} />
      </ScrollView>

      <View style={styles.enrollBtnContainer}>
        <CButton
          label={selected === 3 ? 'continue to lesson' : 'continue'}
          onPress={() => {
            if (selected < 3) {
              setSelected(prev => (prev += 1));
            } else {
              dispatch(
                addToEnrolledList({course: data?.course!, enrolled: true}),
              );
              navigation.navigate('HomeScreen');
            }
          }}
          bgColor={Colors.primaryColor}
        />
      </View>
    </>
  );
};

export default Enroll;

const Stepper = ({selected}: {selected: number}) => {
  return (
    <View style={styles.stepperContainer}>
      <View style={styles.stepCountContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.stepCountTextContainer,
              {
                backgroundColor:
                  selected >= 1 ? Colors.primaryDarkColor : Colors.borderColor,
              },
            ]}>
            <ExtraBoldText style={styles.stepCountText}>1</ExtraBoldText>
          </View>
          <View
            style={[
              styles.line,
              {
                backgroundColor:
                  selected >= 1 ? Colors.primaryDarkColor : Colors.borderColor,
              },
            ]}
          />
        </View>
        <SemiBoldText style={styles.stepTitle}>Overview</SemiBoldText>
      </View>

      <View style={styles.stepCountContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.stepCountTextContainer,
              {
                backgroundColor:
                  selected >= 2
                    ? Colors.primaryDarkColor
                    : Colors.inActiveColor,
                borderColor:
                  selected >= 2 ? Colors.primaryColor : Colors.borderColor,
              },
            ]}>
            <ExtraBoldText style={styles.stepCountText}>2</ExtraBoldText>
          </View>
          <View
            style={[
              styles.line,
              {
                backgroundColor:
                  selected >= 2 ? Colors.primaryDarkColor : Colors.borderColor,
              },
            ]}
          />
        </View>

        <SemiBoldText style={styles.stepTitle}>Payment Method</SemiBoldText>
      </View>

      <View style={styles.stepCountContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.stepCountTextContainer,
              {
                backgroundColor:
                  selected >= 3
                    ? Colors.primaryDarkColor
                    : Colors.inActiveColor,
                borderColor:
                  selected >= 3 ? Colors.primaryColor : Colors.borderColor,
              },
              ,
            ]}>
            <ExtraBoldText style={styles.stepCountText}>3</ExtraBoldText>
          </View>
        </View>
        <SemiBoldText style={styles.stepTitle}>Confirmation</SemiBoldText>
      </View>
    </View>
  );
};

const StepOne = ({course}: {course: Course}) => {
  return (
    <View>
      <RegularText style={styles.stepOneOverviewText}>Overview</RegularText>
      <View style={styles.stepOneHeadingContainer}>
        <RegularText style={styles.stepOneHeadlineText}>
          Name Of Lesson:
        </RegularText>
        <RegularText style={styles.stepOneHeadlineValueText}>
          {course.courseName}
        </RegularText>
      </View>

      <CourseInfo
        courseDuration={course.courseDuration}
        discount={course.discountAmount}
        lessons=""
      />

      <View style={styles.courseInfoContainer}>
        <View style={styles.stepOneHeadingContainer}>
          <RegularText style={styles.stepOneHeadlineText}>
            Course Rating:
          </RegularText>
          <View style={styles.ratingsContainer}>
            <StarRating rating={course.rating} />
          </View>
        </View>

        <View style={styles.stepOneHeadingContainer}>
          <RegularText style={styles.stepOneHeadlineText}>
            Course Time:
          </RegularText>
          <RegularText style={styles.stepOneHeadlineValueText}>
            {course.courseDuration}
          </RegularText>
        </View>

        <View style={styles.stepOneHeadingContainer}>
          <RegularText style={styles.stepOneHeadlineText}>
            Name Of Trainer:
          </RegularText>
          <RegularText style={styles.stepOneHeadlineValueText}>
            {course.instructorName}
          </RegularText>
        </View>
      </View>

      <PurchaseDetails discount={course.discountAmount} price={course.price} />
    </View>
  );
};

const StepTwo = ({course}: {course: Course}) => {
  const [showForm, setShowForm] = useState(false);
  return showForm ? (
    <View>
      <RegularText
        style={{fontWeight: 'bold', fontSize: 20, marginVertical: 30}}>
        Add Details
      </RegularText>

      <View style={{gap: 32}}>
        <TextInput
          style={styles.paymentInput}
          placeholder="Card Number"
          placeholderTextColor={Colors.lightText}
        />

        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={{flex: 0.45}}>
            <TextInput
              style={[styles.paymentInput, {textAlign: 'center'}]}
              placeholder="CVV Number"
              placeholderTextColor={Colors.lightText}
            />
          </View>

          <View style={{flex: 0.55}}>
            <TextInput
              style={[styles.paymentInput, {textAlign: 'center'}]}
              placeholder="Expire Date"
              placeholderTextColor={Colors.lightText}
            />
          </View>
        </View>

        <TextInput
          style={styles.paymentInput}
          placeholder="Password"
          placeholderTextColor={Colors.lightText}
        />
      </View>

      <PurchaseDetails discount={course.discountAmount} price={course.price} />
    </View>
  ) : (
    <View>
      <RegularText
        style={{fontWeight: 'bold', fontSize: 20, paddingVertical: 25}}>
        Select Payment Method
      </RegularText>

      <View>
        <PaymentOption paymentName="Payment" onPress={() => {}} />
        <PaymentOption
          paymentName="Add Credit Card"
          onPress={() => setShowForm(true)}
          backgroundColor={Colors.LightAccentColor}
        />
        <PaymentOption paymentName="Google Play" onPress={() => {}} />
      </View>
    </View>
  );
};

const StepThree = () => {
  return (
    <View style={styles.stepThreeContainer}>
      <Image source={CheckMark} />
      <RegularText style={{fontWeight: 'bold', fontSize: 24}}>
        Transaction Completed
      </RegularText>
      <Image source={TransitionCompletedImage} style={{marginTop: 40}} />
    </View>
  );
};

interface PaymentOptionProps {
  paymentName: string;
  onPress: () => void;
  backgroundColor?: string;
}
const PaymentOption = ({
  paymentName,
  onPress,
  backgroundColor,
}: PaymentOptionProps) => {
  return (
    <TouchableOpacity
      style={[styles.paymentOptionContainer, {backgroundColor}]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Image source={plusIcon} style={styles.paymentIcon} />
      <RegularText>{paymentName}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 45,
    backgroundColor: Colors.LightAccentColor,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  stepCountContainer: {
    alignItems: 'center',
    gap: 5,
  },
  stepCountTextContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primaryDarkColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
    position: 'relative',
  },
  stepCountText: {
    fontSize: 10,
    color: 'white',
  },
  stepTitle: {
    fontSize: 10,
  },
  line: {
    height: 1.1,
    backgroundColor: Colors.borderColor,
    width: 120,
    position: 'absolute',
    left: 40,
    right: 0,
    zIndex: -1,
  },

  stepOneContainer: {},
  stepOneOverviewText: {fontWeight: 'bold', marginTop: 30},
  stepOneHeadingContainer: {
    flexDirection: 'row',
    gap: 0,
    paddingVertical: 5,
  },

  stepThreeContainer: {
    alignItems: 'center',
    height: '100%',
    gap: 30,
    marginTop: 80,
  },

  courseInfoContainer: {paddingVertical: 15, marginBottom: 5},
  ratingsContainer: {flex: 1, marginTop: 2},
  stepOneHeadlineText: {
    fontSize: 12,
    color: 'black',
    flex: 0.37,
  },
  stepOneHeadlineValueText: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },

  paymentOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    marginVertical: 10,
    gap: 25,
  },
  paymentIcon: {
    marginLeft: 20,
  },

  paymentInput: {
    backgroundColor: Colors.LightAccentColor,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 13,
  },
  enrollBtnContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
  },
});
