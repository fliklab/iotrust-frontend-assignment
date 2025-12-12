// 공통 상수
export const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
export const OPTIMIZED_IMAGE_BASE_URL = import.meta.env.VITE_OPTIMIZED_IMAGE_BASE_URL;

// 이미지 에셋 헬퍼
export function createImageAsset(filename: string) {
  return {
    original: `${IMAGE_BASE_URL}/${filename}`,
    webp: OPTIMIZED_IMAGE_BASE_URL ? `${OPTIMIZED_IMAGE_BASE_URL}${filename.replace(/\.(png|jpg|jpeg)$/i, '.webp')}` : undefined,
  };
}
