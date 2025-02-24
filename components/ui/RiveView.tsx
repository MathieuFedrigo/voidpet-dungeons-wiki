/* eslint-disable react-native/no-inline-styles */
import Rive from "rive-react-native";

import { RiveId } from "../boss/boss.type";

type Props = { resourceName: RiveId };
export const RiveView = ({ resourceName }: Props) => {
  return (
    <Rive resourceName={resourceName} style={{ width: 300, height: 300 }} />
  );
};
