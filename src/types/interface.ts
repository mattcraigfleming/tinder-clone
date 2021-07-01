export interface IProfile {
  id: string;
  name: string;
  dob: Date;
  bio: string;
}

export interface ISwipeCardProps {
  profile: IProfile;
  key: string;
  onSwipeOff: () => void;
}
