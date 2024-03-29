import {Item, ControlItem, Icon} from '../../models/frontend';
export { Item, ControlItem } from '../../models/frontend';


export interface Dictionaries {
  roles: Dictionary;
  specializations:Dictionary;
  qualifications:Dictionary;
  skills:Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
