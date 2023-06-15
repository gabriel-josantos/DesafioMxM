import { maskJs } from "mask-js";
import validator from "validator";
import { cpf, cnpj } from "cpf-cnpj-validator";

export function cleanMask(value: string): string {
  value = value.replace(/\D/g, "");
  return value;
}

export function applyCnpjMask(event: any) {
  const { value } = event.target;
  const cnpjWithMask = maskJs("99.999.999/9999-99", value);
  event.target.value = cnpjWithMask;
}

export function applyCpfMask(event: any) {
  const { value } = event.target;
  const cpfWithMask = maskJs("999.999.999-99", value);
  event.target.value = cpfWithMask;
}

export function applyPhoneNumberMask(event: any) {
  const { value } = event.target;
  const phoneNumberWithMask = maskJs("(99) 9 9999-9999", value);
  event.target.value = phoneNumberWithMask;
}

export function validateEmail(value: any) {
  if (!validator.isEmail(value)) return "Email invalido";
  return true;
}

export function validatePhoneNumber(value: any) {
  value = cleanMask(value);
  if (value.length < 11) return "Telefone invalido";
  return true;
}

export function validateCpfOrCnpj(value: string) {
  value = cleanMask(value);
  if (value.length === 11 && !cpf.isValid(value)) return "Cpf invalido";
  if (value.length === 14 && !cnpj.isValid(value)) return "Cnpj invalido";

  return true;
}
