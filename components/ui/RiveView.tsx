/* eslint-disable react-native/no-inline-styles */
import Rive from "rive-react-native";

import { RiveId } from "../boss/boss.type";

type Props = { resourceName: RiveId; size: number };
export const RiveView = ({ resourceName, size }: Props) => {
  return (
    <Rive resourceName={resourceName} style={{ width: size, height: size }} />
  );
};
