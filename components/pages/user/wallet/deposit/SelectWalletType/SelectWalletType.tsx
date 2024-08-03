import { memo } from "react";
import ListBox from "@/components/elements/form/listbox/Listbox";
import Button from "@/components/elements/base/button/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useDepositStore } from "@/stores/user/wallet/deposit";
import { useTranslation } from "next-i18next";
const SelectWalletTypeBase = ({}) => {
  const { t } = useTranslation();
  const {
    walletTypes,
    selectedWalletType,
    setSelectedWalletType,
    setStep,
    fetchCurrencies,
  } = useDepositStore();
  return (
    <div>
      <div className="mb-12 space-y-1 text-center font-sans">
        <h2 className="text-2xl font-light text-muted-800 dark:text-muted-100">
          {t("Select a Wallet Type")}
        </h2>
        <p className="text-sm text-muted-400">
          {t("Pick one of the following wallet types to continue")}
        </p>
      </div>

      <div className="mx-auto mb-4 w-full max-w-lg rounded px-8 pb-8">
        <ListBox
          selected={selectedWalletType}
          options={walletTypes}
          setSelected={setSelectedWalletType}
        />

        <div className="mt-6">
          <Button
            type="button"
            color="primary"
            size="lg"
            className="w-full"
            onClick={() => {
              fetchCurrencies();
              setStep(2);
            }}
            disabled={selectedWalletType.value === ""}
          >
            {t("Continue")}
            <Icon icon="mdi:chevron-right" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export const SelectWalletType = memo(SelectWalletTypeBase);
