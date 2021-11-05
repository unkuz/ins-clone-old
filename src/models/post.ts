export interface UserPost {
  caption: string;
  selectedFile: string;
  userUid: string;
}

export interface CommentReply {
  user: string;
  content: string;
  date: any;
  likes: string[];
  dislikes: string[];
}
export interface Commentz {
  user: string;
  content: string;
  date: any;
  likes: string[];
  dislikes: string[];
  reply: CommentReply[];
}
export interface Comment {
  comment: Commentz[];
  id: string;
}
export interface IndividualPost {
  id: string;
  userPost: string;
  imageURL: string;
  caption: string;
  likes: string[];
  dislikes: string[];
  comment: Comment[];
  date: any;
}
