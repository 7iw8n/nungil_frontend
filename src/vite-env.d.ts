/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_MAP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
