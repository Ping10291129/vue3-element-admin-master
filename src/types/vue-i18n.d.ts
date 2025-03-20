import "vue-i18n";

declare module "vue-i18n" {
  export interface DefineLocaleMessage {
    settings: {
      project: string;
      theme: string;
      interface: string;
      themeColor: string;
      tagsView: string;
      sidebarLogo: string;
      watermark: string;
      sidebarColorScheme: string;
      classicBlue: string;
      minimalWhite: string;
      navigation: string;
    };
  }
}
