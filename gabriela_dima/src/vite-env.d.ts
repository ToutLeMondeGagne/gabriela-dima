/// <reference types="vite/client" />

declare module "lucide-react" {
  import type { FC, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }

  export type LucideIcon = FC<LucideProps>;

  export const ArrowRight:   LucideIcon;
  export const ArrowLeft:    LucideIcon;
  export const Sparkles:     LucideIcon;
  export const Calendar:     LucideIcon;
  export const Mail:         LucideIcon;
  export const Phone:        LucideIcon;
  export const Send:         LucideIcon;
  export const CheckCircle:  LucideIcon;
  export const AlertCircle:  LucideIcon;
  export const Loader2:      LucideIcon;
  export const Linkedin:     LucideIcon;
  export const TrendingUp:   LucideIcon;
  export const Handshake:    LucideIcon;
  export const LifeBuoy:     LucideIcon;
  export const LineChart:    LucideIcon;
  export const Check:        LucideIcon;
  export const Users:        LucideIcon;
  export const Shield:       LucideIcon;
  export const Database:     LucideIcon;
  export const BarChart3:    LucideIcon;
}
