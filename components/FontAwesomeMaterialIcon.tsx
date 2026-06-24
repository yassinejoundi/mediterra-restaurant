import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightLong,
  faBowlFood,
  faCalendarDays,
  faCamera,
  faCar,
  faChampagneGlasses,
  faChevronDown,
  faCircleQuestion,
  faComment,
  faComments,
  faEnvelope,
  faFireFlameCurved,
  faIceCream,
  faLeaf,
  faLocationArrow,
  faLocationDot,
  faLock,
  faMap,
  faMartiniGlassCitrus,
  faMinus,
  faMugSaucer,
  faPaperPlane,
  faPersonWalking,
  faPhone,
  faPizzaSlice,
  faPlus,
  faSeedling,
  faStar,
  faSun,
  faTableCells,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ComponentProps } from "react";

const icons: Record<string, IconDefinition> = {
  add: faPlus,
  arrow_forward: faArrowRight,
  arrow_right_alt: faArrowRightLong,
  calendar_today: faCalendarDays,
  call: faPhone,
  chat: faComment,
  chat_bubble: faComment,
  dinner_dining: faUtensils,
  directions: faLocationArrow,
  directions_walk: faPersonWalking,
  event_available: faCalendarDays,
  event_seat: faChampagneGlasses,
  expand_more: faChevronDown,
  forum: faComments,
  gallery_thumbnail: faTableCells,
  help_outline: faCircleQuestion,
  icecream: faIceCream,
  inventory_2: faBowlFood,
  local_bar: faMartiniGlassCitrus,
  local_dining: faUtensils,
  local_fire_department: faFireFlameCurved,
  local_florist: faSeedling,
  local_pizza: faPizzaSlice,
  local_taxi: faCar,
  location_on: faLocationDot,
  lock: faLock,
  mail: faEnvelope,
  map: faMap,
  menu: faUtensils,
  near_me: faLocationArrow,
  notifications_active: faMugSaucer,
  open_in_new: faArrowRight,
  photo_camera: faCamera,
  photo_library: faCamera,
  remove: faMinus,
  restaurant: faUtensils,
  restaurant_menu: faUtensils,
  schedule: faCalendarDays,
  send: faPaperPlane,
  set_meal: faBowlFood,
  spa: faLeaf,
  spoke: faSeedling,
  star: faStar,
  stars: faStar,
  wb_sunny: faSun,
};

type FontAwesomeMaterialIconProps = {
  name: keyof typeof icons | string;
  className?: string;
  style?: ComponentProps<typeof FontAwesomeIcon>["style"];
};

export function FontAwesomeMaterialIcon({ name, className, style }: FontAwesomeMaterialIconProps) {
  return (
    <FontAwesomeIcon
      icon={icons[name] ?? faCircleQuestion}
      className={className}
      style={{ width: "0.8em", height: "0.8em", verticalAlign: "middle", ...style }}
      aria-hidden="true"
    />
  );
}
