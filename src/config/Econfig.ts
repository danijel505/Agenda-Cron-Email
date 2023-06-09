import "dotenv/config";

const {
    MONGO_URL,
    PORT,
    MAIL_PORT,
    MAIL_HOST,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    FROM_EMAIL_ADDRESS_SUVAE,
    FROM_EMAIL_ADDRESS_EASY_REBATE,
    API_URL
} = process.env;

export const config = {
    MONGO_URL,
    PORT,
    MAIL_PORT,
    MAIL_HOST,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    FROM_EMAIL_ADDRESS_SUVAE,
    FROM_EMAIL_ADDRESS_EASY_REBATE,
    API_URL
};
