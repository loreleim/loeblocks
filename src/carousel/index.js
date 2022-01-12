import './style.scss';
import metadata from "./block.json";
import edit from './edit';
import save from './save';

const {name, category, attributes, title, description, icon} = metadata;

const settings = {
  title: title,
  description: description,
  icon: icon,
  attributes,
  edit,
  save,
}

export {name, category, metadata, settings};