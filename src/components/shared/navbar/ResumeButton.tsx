import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumeButton() {
  return (
    <a href="/cv/Sushanto_Kumar_CV.pdf" download>
      <Button 
      size="lg"
      className='rounded-full w-full '
      >
        <Download className="h-5 w-5" />
        Resume
      </Button>
    </a>
  );
}