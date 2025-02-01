type IUsageStat = {
  statName: string;
  abbreviatedName: string;
  limit: number;
  used: number;
  displayLimit: string;
  displayUsed: string;
  usedPercentage: number;
} | null;
