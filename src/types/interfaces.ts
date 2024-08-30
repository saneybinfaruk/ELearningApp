export type RootStackParamList = {
  NewHome: undefined;
  MainTabs: undefined;
  HomeScreen: undefined;
  Courses: {courseType: string};
  StartUp: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Login: undefined;
  Settings: undefined;
  Notifications: undefined;
  Details: {id: number};
  Profile: undefined;
  ProfileStack: undefined;
  MyCourses: undefined;
  Enroll: {id: number};
  MyCoursesStack: undefined;
  EnrolledCourses: undefined;

};

export type BottomTabParamList = {
  Home: undefined;
  Inbox: undefined;
  MyCoursesStack: undefined;
  ProfileStack: undefined;
};

export type TopTabbarParamList = {
  Overview: undefined;
  Lessions: undefined;
  Reviews: undefined;
};

// Course Type
export type Course = {
  id: number;
  courseType: string;
  courseName: string;
  instructorName: string;
  rating: number;
  price: number;
  description: string;
  imageUrl: string;
  courseDuration: string;
  discountAmount: string;
  skills: string[];
  lessons: Lesson[];
  reviews: Review[];
};

// Lesson Type
export type Lesson = {
  question: string;
  answer: string;
};

// Review Type
export type Review = {
  userName: string;
  userOccupation: string;
  review: string;
  rating: number;
};

export interface GetCoursesData {
  courses: Course[];
}

export interface GetCoursesTypes {
  courseTypes: string[];
}

export interface GetCourse {
  course: Course;
}
