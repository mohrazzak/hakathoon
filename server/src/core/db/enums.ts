export const PRIORITY = {
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    HEIGH: "HEIGH"
} as const;
export type PRIORITY = (typeof PRIORITY)[keyof typeof PRIORITY];
export const STATUS = {
    PENDING: "PENDING",
    ACTIVE: "ACTIVE",
    DONE: "DONE"
} as const;
export type STATUS = (typeof STATUS)[keyof typeof STATUS];
