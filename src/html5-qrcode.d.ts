declare module 'html5-qrcode' {
    export class Html5QrcodeScanner {
      constructor(elementId: string, config: any, verbose: boolean);
      render(onSuccess: (decodedText: string, result: any) => void, onError?: (errorMessage: string) => void): void;
      clear(): Promise<void>;
    }
  }
  