import type { NextApiRequest, NextApiResponse } from "next";

export interface PartnerType {
  logoUrl: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PartnerType[]>
) {
  res.status(200).json(dummyData);
}
new Date().getTime();
const dummyData = [
  {
    logoUrl: "/partners/Amazon.png",
  },
  {
    logoUrl: "/partners/Cisco.png",
  },
  {
    logoUrl: "/partners/Comptia.png",
  },
  {
    logoUrl: "/partners/Fortinet.png",
  },
  {
    logoUrl: "/partners/Huawei.png",
  },
  {
    logoUrl: "/partners/juniper_networks.png",
  },
  {
    logoUrl: "/partners/Oracle.png",
  },
  {
    logoUrl: "/partners/PaloAltoNetworks.png",
  },
];
