import { IconType } from '@react-icons/all-files';
import { IconKind } from '@type/icon';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const ICON: { [key in IconKind]: IconType } = {
  arrowDown: MdKeyboardArrowDown,
  arrowUp: MdKeyboardArrowUp,
};

interface IconProps {
  iconKind: IconKind;
  color?: string;
  onClick?: () => void;
  size?: number;
}

const Icon = ({ iconKind, ...props }: IconProps) => {
  const TargetIcon = ICON[iconKind];
  return <TargetIcon size={24} {...props} />;
};

export default Icon;
