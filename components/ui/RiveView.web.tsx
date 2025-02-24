/* eslint-disable react-native/no-inline-styles */
import Rive from "@rive-app/react-canvas";

import { getRiveResource } from "../boss/boss.rive";
import { RiveId } from "../boss/boss.type";

type Props = { resourceName: RiveId };
export const RiveView = ({ resourceName }: Props) => (
  <Rive
    src={getRiveResource(resourceName)}
    stateMachines="idle"
    style={{ width: 300, height: 300 }}
  />
);
