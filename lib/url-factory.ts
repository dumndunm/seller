export const urlFactory = {
  overviewPage() {
    return '/overview' as const;
  },
  reportsPage() {
    return '/reports' as const;
  },
  settingsPage() {
    return '/settings' as const;
  },
  transactionTotalsReportPage() {
    return '/reports/totals' as const;
  },
};
