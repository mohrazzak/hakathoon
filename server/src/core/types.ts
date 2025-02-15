import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { PRIORITY, STATUS } from "./enums";

export type category = {
    id: string;
    name: string;
    description: string;
    created_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
    updated_at: Timestamp;
};
export type step = {
    id: string;
    order: number;
    title: string;
    description: string;
    todo_id: string;
    created_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
    updated_at: Timestamp;
};
export type todo = {
    id: string;
    title: string;
    description: string;
    status: STATUS;
    priority: PRIORITY;
    deadline: Timestamp;
    start_date: Timestamp;
    user_id: string;
    category_id: string | null;
    created_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
    updated_at: Timestamp;
};
export type user = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    reset_pass_token: string;
    created_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
    updated_at: Timestamp;
};
export type DB = {
    category: category;
    step: step;
    todo: todo;
    user: user;
};
