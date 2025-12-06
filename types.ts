export interface PositionProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

export interface OrnamentProps extends PositionProps {
  color?: string;
  type?: 'sphere' | 'diamond' | 'tear';
}

export enum AnimationState {
  IDLE,
  ROTATING,
  ZOOM
}