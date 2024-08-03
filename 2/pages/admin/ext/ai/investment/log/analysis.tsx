// pages/chart.tsx
import React from "react";
import Layout from "@/layouts/Default";
import { AnalyticsChart } from "@/components/charts/AnalyticsChart";
import { useTranslation } from "next-i18next";
const path = "/admin/ext/ai/investment/log";
const AiInvestmentsAnalytics = () => {
  const { t } = useTranslation();
  const availableFilters: AvailableFilters = {
    status: [
      {
        value: "ACTIVE",
        label: "active",
        color: "primary",
        icon: "ph:circle",
        path: `${path}?status=ACTIVE`,
      },
      {
        value: "COMPLETED",
        label: "completed",
        color: "success",
        icon: "ph:check-circle",
        path: `${path}?status=COMPLETED`,
      },
      {
        value: "CANCELLED",
        label: "cancelled",
        color: "muted",
        icon: "ph:stop-circle",
        path: `${path}?status=CANCELLED`,
      },
      {
        value: "REJECTED",
        label: "rejected",
        color: "danger",
        icon: "ph:x-circle",
        path: `${path}?status=REJECTED`,
      },
    ],
    result: [
      {
        value: "WIN",
        label: "win",
        color: "success",
        icon: "ph:check-circle",
        path: `${path}?result=WIN`,
      },
      {
        value: "LOSS",
        label: "loss",
        color: "danger",
        icon: "ph:x-circle",
        path: `${path}?result=LOSS`,
      },
      {
        value: "DRAW",
        label: "draw",
        color: "warning",
        icon: "ph:circle",
        path: `${path}?result=DRAW`,
      },
    ],
  };
  return (
    <Layout color="muted" title={t("AI Investments Analytics")}>
      <AnalyticsChart
        model="aiInvestment"
        modelName={t("AI Investments")}
        cardName={t("Investments")}
        availableFilters={availableFilters}
        color="primary"
      />
    </Layout>
  );
};
export default AiInvestmentsAnalytics;
export const permission = "Access AI Investment Management";