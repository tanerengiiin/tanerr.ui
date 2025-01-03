import { Button } from '@/components/ui/button'

export default function GhostButtonDemo() {
  return (
    <div className='flex items-center gap-2'>
        <Button variant="ghost" tone="primary">Primary</Button>
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" tone="info">Info</Button>
        <Button variant="ghost" tone="success">Success</Button>
        <Button variant="ghost" tone="warning">Warning</Button>
        <Button variant="ghost" tone="error">Error</Button>
    </div>
  )
}
