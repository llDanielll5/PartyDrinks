import { translate } from "@vitalets/google-translate-api";
// import createHttpProxyAgent from "http-proxy-agent";

export const translateText = async (textToTranslate: string) => {
  //   const agent = createHttpProxyAgent("http://103.152.112.162:80");
  try {
    const { text } = await translate(textToTranslate, {
      to: "pt",
      //   fetchOptions: { agent },
    });
    return text;
  } catch (error: any) {
    throw new Error("Erro para traduzir", error);
  }
};
