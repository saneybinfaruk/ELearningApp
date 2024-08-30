import {gql} from '@apollo/client';

// Define the GraphQL query
export const GET_COURSES = gql`
  query GetCourses {
    courses {
      courseName
      lessons {
        lessonName
      }
      reviews {
        reviewText
      }
    }
  }
`;

export const GET_COURSE_TYPES = gql`
  query GetCourseTypes {
    courseTypes
  }
`;

export const GET_COURSES_BY_TYPE = gql`
  query GetCoursesByType($courseType: String!) {
    coursesByType(courseType: $courseType) {
      courseName,
      id,
      instructorName,
      rating,
      imageUrl
    }
  }
`;

export const GET_COURSE = gql`
  query GetCourse($id: Int!) {
    course(id: $id) {
      id
      courseName
      courseType
      instructorName
      rating
      price
      description
      imageUrl
      courseDuration
      discountAmount
      skills
      lessons {
        question
        answer
      }
      reviews {
        userName
        userOccupation
        review
        rating
      }
    }
  }
`;
