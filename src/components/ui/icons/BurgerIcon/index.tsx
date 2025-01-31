import { BurgerSVGContainer } from "./BurgerIcon.styled";

type BurgerIconProps = {
  size: string;
  active: boolean;
};

const BurgerIcon = ({ size, active }: BurgerIconProps) => {
  return (
    <BurgerSVGContainer
      $active={active}
      x='0px'
      y='0px'
      width={size}
      height={size}
      viewBox='0 0 128 128'
      aria-label='Burger icon'
    >
      <path d='M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z'></path>
      <path
        fill='#333333'
        d='M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z'
      ></path>
      <path
        fill='#333333'
        d='M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z'
      ></path>
      <g>
        <path fill='#333333' d='M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z'></path>
      </g>
    </BurgerSVGContainer>
  );
};

export default BurgerIcon;
