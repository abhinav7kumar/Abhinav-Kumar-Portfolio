export interface Role {
  id: 'developer' | 'designer' | 'creator';
  title: string;
  description: string;
  skills: string[];
  gradient: string;
}

export interface RoleIconProps {
  isActive: boolean;
  onClick: () => void;
  Icon: React.ElementType;
  text: string;
}