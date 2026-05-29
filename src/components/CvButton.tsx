import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CvButton() {
  return (
    <Button asChild variant="outline" size="sm">
      <a href="/vishnu-mohanan-cv.pdf" download>
        <Download className="w-3.5 h-3.5 mr-1.5" />
        Download CV
      </a>
    </Button>
  );
}
