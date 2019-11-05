var crypto = require("crypto");

export const hashPassword = (password) => {
    let secret = `WEBNC${password}`
        .toUpperCase()
        .split("")
        .reverse()
        .join();
    return crypto
        .createHmac("SHA256", secret)
        .update(password)
        .digest("hex");
}