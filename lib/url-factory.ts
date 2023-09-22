export const urlFactory = {
  reportsPage() {
    return '/reports' as const;
  },
  financeRealizationReportPage() {
    return '/reports/finance/realization' as const;
  },
  financeTransactionListReportPage() {
    return '/reports/finance/transaction/list' as const;
  },
  financeTransactionTotalsReportPage() {
    return '/reports/finance/transaction/totals' as const;
  },
  financeOverviewReportPage() {
    return '/reports/finance/overview' as const;
  },
  settingsPage() {
    return '/settings' as const;
  },
};
