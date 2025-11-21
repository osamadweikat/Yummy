import PartnerLogo1 from "../images/partner-logo1.svg";
import PartnerLogo2 from "../images/partner-logo2.svg";
import PartnerLogo3 from "../images/partner-logo3.svg";
import PartnerLogo4 from "../images/partner-logo4.svg";
import PartnerLogo5 from "../images/partner-logo5.svg";
import PartnerLogo6 from "../images/partner-logo6.svg";

export interface Partner {
  id: number;
  logo: string;
}

export const Partners: Partner[] = [
  {
    id: 1,
    logo: PartnerLogo1,
  },
  {
    id: 2,
    logo: PartnerLogo2,
  },
  {
    id: 3,
    logo: PartnerLogo3,
  },
  {
    id: 4,
    logo: PartnerLogo4,
  },
  {
    id: 5,
    logo: PartnerLogo5,
  },
  {
    id: 6,
    logo: PartnerLogo6,
  },
];
