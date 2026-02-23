import "./globals.css"

export const metadata = {
  title: "Office Interior Prompt Generator",
  description: "FLUX.1 Pro 모델용 오피스 인테리어 이미지 생성 프롬프트 생성기",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
