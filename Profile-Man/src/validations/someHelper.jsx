export const validateRegistrationForm = (formData, profiles) => {
    const { name, phone, pincode, username } = formData;

    const isEmpty = (field) => !field.trim();
    const hasSpecialChars = (str) => /[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/.test(str);
    const isInvalidPhone = (phone) => !/^\d{10}$/.test(phone.trim());
    const isInvalidPincode = (pincode) => !/^\d{6}$/.test(pincode.trim());
    const isInvalidUsername = (username) => /[^a-zA-Z0-9]/.test(username.trim());
    const isDuplicateUsername = (username) => profiles.some(profile => profile.username === username.trim());

    const errors = {
        name: isEmpty(name) ? "Name is required." : hasSpecialChars(name) ? "Name cannot contain special characters." : "",
        phone: isEmpty(phone) ? "Phone number is required." : isInvalidPhone(phone) ? "Phone number must be exactly 10 digits." : "",
        pincode: isEmpty(pincode) ? "Pincode is required." : isInvalidPincode(pincode) ? "Pincode must be exactly 6 digits." : "",
        username: isEmpty(username) ? "Username is required." : isInvalidUsername(username) ? "Username can only contain letters and numbers." : isDuplicateUsername(username) ? "Username already exists." : ""
    };
    return Object.values(errors).find(error => error) || "";
};
