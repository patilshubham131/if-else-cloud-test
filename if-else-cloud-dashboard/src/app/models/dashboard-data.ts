import { UserModel } from './userModel';
import { Order } from './order';
import { Card } from './card';

export interface DashboardDataResponse{
    new_users: UserModel[],
    recent_orders: Order[],
    top_cards: Card[]
}