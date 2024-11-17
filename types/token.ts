export type Token = {
  id: string;
  name: string;
};

export type TabType = 'overview' | 'chart' | 'news';

export interface TokenTabProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}