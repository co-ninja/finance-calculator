import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "@/src/lib/auth"

const DRIVE_UPLOAD = "https://www.googleapis.com/upload/drive/v3/files"
const DRIVE_FILES = "https://www.googleapis.com/drive/v3/files"
const FILENAME = "finance_budget.json"

async function findFileId(accessToken: string): Promise<string | null> {
  const params = new URLSearchParams({
    spaces: "appDataFolder",
    q: `name='${FILENAME}'`,
    fields: "files(id)",
  })
  const res = await fetch(`${DRIVE_FILES}?${params}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json()
  return data.files?.[0]?.id ?? null
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const fileId = await findFileId(session.accessToken)
  if (!fileId) return NextResponse.json({})

  const res = await fetch(`${DRIVE_FILES}/${fileId}?alt=media`, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  })
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const content = JSON.stringify(body)
  const fileId = await findFileId(session.accessToken)

  if (fileId) {
    await fetch(`${DRIVE_UPLOAD}/${fileId}?uploadType=media`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      },
      body: content,
    })
  } else {
    const metadata = JSON.stringify({ name: FILENAME, parents: ["appDataFolder"] })
    const boundary = "budget_boundary"
    const body =
      `--${boundary}\r\nContent-Type: application/json\r\n\r\n${metadata}\r\n` +
      `--${boundary}\r\nContent-Type: application/json\r\n\r\n${content}\r\n` +
      `--${boundary}--`

    await fetch(`${DRIVE_UPLOAD}?uploadType=multipart`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": `multipart/related; boundary=${boundary}`,
      },
      body,
    })
  }

  return NextResponse.json({ ok: true })
}
