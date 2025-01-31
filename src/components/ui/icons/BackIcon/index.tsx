import { StyledBackIcon, StyledPolyline } from "./BackIcon.styled";

type BackIconProps = {
  size: string;
  onClick?: () => void;
  onTouchEnd?: () => void;
};

const BackIcon = ({ size, onClick, onTouchEnd }: BackIconProps) => {
  return (
    <StyledBackIcon
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      $size={size}
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='Back icon'
    >
      <g data-name='Layer 2' id='Layer_2'>
        <g
          data-name='E416, back, Media, media player, multimedia, player'
          id='E416_back_Media_media_player_multimedia_player'
        >
          <StyledPolyline points='333.82 100.37 178.18 256 333.82 411.63' />
        </g>
      </g>
    </StyledBackIcon>
  );
};

export default BackIcon;
