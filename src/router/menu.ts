import {
  InformationCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  PhotoIcon,
  HomeIcon
} from '@heroicons/vue/24/outline'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [
      { route: 'home', label: 'Home', icon: HomeIcon },
      { route: 'event', label: 'Event', icon: CalendarDaysIcon },
      { route: 'lokasi', label: 'Lokasi', icon: MapPinIcon },
      { route: 'gallery', label: 'Gallery', icon: PhotoIcon },
      { route: 'thanks', label: 'Thanks', icon: InformationCircleIcon }
    ]
  })
})
