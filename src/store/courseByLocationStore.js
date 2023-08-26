import {create} from 'zustand';
import { fetchCourseByLocation } from '../api/courseByLocationApi';
import { fetchLocation } from '../api/locationApi';

const useCourseByLocationStore = create ((set) => ({
    courseByLocation: [],
    fetchCourseByLocation: async () => {
        try{
            const courseByLocation = await fetchCourseByLocation();
            set({ courseByLocation });
        } catch (error){
            console.error('Error fetching courseByLocaiton: ' ,error);
        }
    }
}))

export default useCourseByLocationStore;