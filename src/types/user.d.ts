interface UserI {
    id: string;
    email: string;
    name: string;
    password: string;
    rememberToken: string;
    emailVerified: boolean;
}

export type {
    UserI
};