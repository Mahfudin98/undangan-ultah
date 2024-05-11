import {
  ListBulletIcon,
  InformationCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  PhotoIcon
} from '@heroicons/vue/24/outline'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [
      { route: 'home', label: 'Home', icon: ListBulletIcon },
      { route: 'event', label: 'Event', icon: CalendarDaysIcon },
      { route: 'lokasi', label: 'Lokasi', icon: MapPinIcon },
      { route: 'gallery', label: 'Gallery', icon: PhotoIcon },
      { route: 'thanks', label: 'Thanks', icon: InformationCircleIcon }
    ]
  })
})
