export async function POST(request) {
  const { promptData } = await request.json()

  const systemPrompt = `You are an expert at writing image generation prompts for architectural visualization.
Convert the given structured data into a single, detailed, natural English prompt for FLUX.1 Pro.
The prompt should be vivid, specific, and optimized for photorealistic interior rendering.
Return ONLY the prompt text, no explanations or extra text.`

  const userMessage = `Create an image generation prompt from this data:
${JSON.stringify(promptData, null, 2)}`

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: userMessage }] }],
      }),
    }
  )

  const data = await response.json()

  if (!response.ok) {
    return Response.json({ error: data.error?.message || "Gemini API error" }, { status: 500 })
  }

  const generated = data.candidates?.[0]?.content?.parts?.[0]?.text || ""
  return Response.json({ prompt: generated })
}
