import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiNumberCircleFiveBold,
} from 'react-icons/pi';

export default function NumberIcon({ number }) {
  switch (number) {
    case 1:
      return <PiNumberCircleOneBold />;
    case 2:
      return <PiNumberCircleTwoBold />;
    case 3:
      return <PiNumberCircleThreeBold />;
    case 4:
      return <PiNumberCircleFourBold />;
    case 5:
      return <PiNumberCircleFiveBold />;
    default:
      return <>no</>;
  }
}
