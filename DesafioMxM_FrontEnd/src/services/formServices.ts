import { maskJs } from "mask-js";

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
