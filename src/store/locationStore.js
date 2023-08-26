import {create} from 'zustand';
import { fetchLocation } from '../api/locationApi';

const useLocationStore = create((set)=>({
    location: [],
    fetchLocation: async () => {
        try{
            const location = await fetchLocation();
            set({ location });
        } catch (error){
            console.error('Error fetching location: ', error);
        }
    }

}))

export default useLocationStore;
