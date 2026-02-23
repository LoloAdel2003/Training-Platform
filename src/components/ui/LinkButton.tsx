import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface LinkButtonProps {
  href: string
  label: string
}

export default function LinkButton({ href, label }: LinkButtonProps) {
  return (
   <Button
  asChild
  variant="default"   // أو أي variant تحب
  size="lg"
  shadow="md"
  className="flex items-center justify-center gap-3 m-auto px-6 sm:px-10 h-11 sm:h-12 w-[150px] sm:w-[200px] transition-all"
>
  <Link href={href} className="flex items-center gap-3">
    {label}
    <ArrowRight size={20} />
  </Link>
</Button>

  )
}
