// src/store/index.js
import useUserStore from './userStore'; // Import additional stores as needed
import useCourseStore from './courseStore';
import useCategoryStore from './categoryStore';
import useLocationStore from './locationStore';
import useCourseByLocationStore from './courseByLocationStore';
export { useUserStore, useCourseStore,useCategoryStore, useLocationStore, useCourseByLocationStore }; // Export all the stores
