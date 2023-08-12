import { toast } from "react-toastify";

type FormValues = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export const isValid = (values: FormValues): boolean => {
  // Validate First Name & Last Name
  if (values.fname.length < 2 || values.lname.length < 2) {
    toast.error("Name and Last Name must have more than 1 character");
    return false;
  }

  // Validate Email
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(values.email)) {
    toast.error("Please enter a valid e-mail address");
    return false;
  }

  // Validate message
  if (values.message.length < 10) {
    toast.error("Message must contain more than 10 characters");
    return false;
  }

  // Add more validations as needed...

  return true;
};
