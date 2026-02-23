export async function POST(request) {
  try {
    const { promptData } = await request.json()

    const systemPrompt = `You are an expert at writing image generation prompts for architectural visualization.
Convert the given structured data into a single, detailed, natural English prompt for FLUX.1 Pro.
The prompt should be vivid, specific, and optimized for photorealistic interior rendering.
Return ONLY the prompt text, no explanations or extra text.`

    const userMessage = `Create an image generation prompt from this data:
${JSON.stringify(promptData, null, 2)}`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ parts: [{ text: userMessage }] }],
        }),
      }
    )

    const text = await response.text()
    console.log("Gemini raw response:", text)

    if (!text) {
      return Response.json({ error: "Gemini API에서 빈 응답이 왔어요" }, { status: 500 })
    }

    const data = JSON.parse(text)

    if (!response.ok) {
      return Response.json({ error: data.error?.message || "Gemini API error" }, { status: 500 })
    }

    const generated = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

    if (!generated) {
      return Response.json({ error: "프롬프트 생성에 실패했어요. 다시 시도해주세요." }, { status: 500 })
    }

    return Response.json({ prompt: generated })

  } catch (err) {
    console.error("Route error:", err)
    return Response.json({ error: err.message || "서버 오류가 발생했어요" }, { status: 500 })
  }
}
