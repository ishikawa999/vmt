export {
  login,
  signup,
  getUser,
  gotUser,
  updateUser,
  googleLogin,
  updateUserRooms,
  updateUserCourses,
  clearNotification,
  updateUserAccessNtfs,
  updateUserActivities,
  updateUserCourseTemplates,
  removeUserCourse,
  removeUserRooms,
  removeUserActivities, // ARE WE STORING ACTIVITIES ON THE USER OBJECT?
  removeNotification,
  addUserRooms,
  updateNotifications,
  addUserCourses,
  updateUserResource,
  logout,
  toggleJustLoggedIn,
} from './user';
export {
  fail,
  start,
  clear,
  success,
  clearError,
  accessSuccess,
} from './loading';
export {
  getRooms,
  gotRooms,
  getRoomsIds,
  createRoom,
  gotCurrentRoom,
  getCurrentRoom,
  clearCurrentRoom,
  createdRoomConfirmed,
  populateRoom,
  updateRoom,
  updatedRoom,
  joinRoom,
  leaveRoom,
  removeRoom,
  updateRoomMembers,
  enterRoomWithCode,
  addRoomMember,
  removeRoomMember,
  destroyRoom,
  createRoomFromActivity,
  updateRoomTab,
} from './rooms';
export {
  addCourse,
  getCourses,
  getCoursesIds,
  getCourse,
  gotCourses,
  removeCourse,
  removeCourseRoom,
  updateCourse,
  updatedCourse,
  createCourse,
  createdCourses,
  updateCourseRooms,
  updateCourseActivities,
  clearCurrentCourse,
  updateCourseMembers,
  addCourseMember,
  removeCourseMember,
} from './courses';
export {
  getCourseTemplates,
  gotCourseTemplates,
  createCourseTemplate,
  createdCourseTemplate,
} from './courseTemplates';
export {
  getActivities,
  gotActivities,
  getActivitiesIds,
  getCurrentActivity,
  clearCurrentActivity,
  gotCurrentActivity,
  createActivity,
  createdActivityConfirmed,
  removeActivity,
  updateActivity,
  updatedActivity,
  copyActivity,
} from './activities';
export {
  joinWithCode,
  requestAccess,
  grantAccess,
} from './access'
