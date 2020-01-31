export interface Message {
  senderId: number | string;
  recipientId: number | string;
  content: string;
}

export interface ThreadMessage extends Message {
  dateOfSent: string;
}

export interface ContactedUser {
  userId: number | string;
  username: string;
}
