import { createSupabaseServerClient } from '@/utils/supabase-server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createSupabaseServerClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 })
    }

    return NextResponse.json({ 
      authenticated: !!user, 
      user: user ? { 
        id: user.id, 
        email: user.email,
        created_at: user.created_at 
      } : null 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 