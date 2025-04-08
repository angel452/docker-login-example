export interface SignUpResponse {
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    id:        number;
    name:      string;
    email:     string;
    createdAt: Date;
}