type CxValue = string | number | boolean | null | undefined;

export function cx(...args: CxValue[]): string {
  return args.filter(Boolean).join(' ');
}
