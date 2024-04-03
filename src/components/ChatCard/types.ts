export interface ChatCardProps {
  user: User;
  message: {
    text: string;
    time: string;
    isAlreadyRead: boolean;
  };
}
