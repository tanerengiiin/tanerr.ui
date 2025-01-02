import { Button } from '@/components/ui/button'
import React from 'react'

export default function OutlineButtonDemo() {
  return (
    <div className='flex items-center gap-2'>
        <Button variant="outline" tone="primary">Primary</Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline" tone="info">Info</Button>
        <Button variant="outline" tone="success">Success</Button>
        <Button variant="outline" tone="warning">Warning</Button>
        <Button variant="outline" tone="error">Error</Button>
    </div>
  )
}

