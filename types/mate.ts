export interface MateType {
  id: number;
  mateId: number;
  actionType: "APPLY" | "ACCEPT" | "UNMATE";
  isRead: boolean;
  actorId: number;
  actorNickname: string;
  targetId: number;
  targetNickname: string;
  createdAt: string;
  profileUrl: string;
}
