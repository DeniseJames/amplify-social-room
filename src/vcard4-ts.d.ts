declare module 'vcard4-ts' {
    export class VCard {
      constructor();
      add(property: string, value: string, parameters?: { [key: string]: string }): void;
      toString(): string;
    }
  }
  