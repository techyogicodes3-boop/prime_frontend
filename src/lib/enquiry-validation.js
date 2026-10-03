export const digitsOnly = value => String(value ?? '').replace(/\D/g, '').slice(0, 10);

export const isTenDigitPhone = value => /^\d{10}$/.test(String(value ?? ''));

export const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? '').trim());
