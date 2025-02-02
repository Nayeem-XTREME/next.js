import type { NextRequest } from 'next/server'

import { headers } from 'next/headers'

import { getSentinelValue } from '../../getSentinelValue'

export async function GET(request: NextRequest, { params }: { params: {} }) {
  const sentinel = headers().get('x-sentinel')
  return new Response(
    JSON.stringify({
      value: getSentinelValue(),
      type: 'headers',
      'x-sentinel': sentinel,
    })
  )
}
