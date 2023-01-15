import { PickerButton } from './PickerButton';
import Avatar from 'react-nice-avatar';
import {
  EarIcon,
  EyesIcon,
  FaceIcon,
  HairIcon,
  HatIcon,
} from '../icons';
import { useContext } from 'react';
import { AvatarPickerContext } from '../../context/AvatarPickerContext';

export function AvatarPicker() {
  const { config, changeSkin, changeHair, changeHat, changeEyes, changeEars } =
    useContext(AvatarPickerContext);

  return (
    <div className="flex flex-col gap-4 items-center">
      <Avatar className="w-64 h-64 rounded-full shadow-2xl" {...config} />
      <div className="w-56 rounded-full p-2 bg-white/20 ring-1 ring-white/40 flex items-center justify-around gap-2">
        <PickerButton title="Skin" icon={<FaceIcon />} onClick={changeSkin} />
        <PickerButton title="Hair" icon={<HairIcon />} onClick={changeHair} />
        <PickerButton title="Hat" icon={<HatIcon />} onClick={changeHat} />
        <PickerButton title="Eyes" icon={<EyesIcon />} onClick={changeEyes} />
        <PickerButton title="Ears" icon={<EarIcon />} onClick={changeEars} />
      </div>
    </div>
  );
}
