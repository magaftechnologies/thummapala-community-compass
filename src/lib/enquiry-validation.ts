export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  audience: string;
  interest: string;
  message: string;
};

export type EnquiryField = keyof EnquiryValues;
export type EnquiryIssue = "required" | "phone" | "email";
export type EnquiryErrors = Partial<Record<EnquiryField, EnquiryIssue>>;

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const requiredFields: EnquiryField[] = ["name", "phone", "email", "audience", "interest", "message"];

  for (const field of requiredFields) {
    if (!values[field].trim()) errors[field] = "required";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (values.phone.trim() && (!/^\+?[\d\s().-]+$/.test(values.phone.trim()) || digits.length < 8 || digits.length > 15)) {
    errors.phone = "phone";
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "email";
  }

  return errors;
}