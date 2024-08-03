import { memo } from "react";
import ListBox from "@/components/elements/form/listbox/Listbox";
import Button from "@/components/elements/base/button/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTransferStore } from "@/stores/user/wallet/transfer";
import { useTranslation } from "next-i18next";

const SelectWalletTypeBase = ({}) => {
  const { t } = useTranslation();
  const {
    walletTypes,
    selectedWalletType,
    setSelectedWalletType,
    setStep,
    transferType,
    setSelectedTargetWalletType,
    fetchCurrencies,
  } = useTransferStore();

  const handleContinue = () => {
    if (transferType.value === "client") {
      setSelectedTargetWalletType(selectedWalletType); // Automatically set the target wallet type
      fetchCurrencies();
      setStep(4); // Skip selecting target wallet type and go to selecting currency
    } else {
      setStep(3); // Go to selecting target wallet type
    }
  };

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

        <div className="mx-auto !mt-8 max-w-sm">
          <div className="flex w-full gap-4 justify-center">
            <Button
              type="button"
              size="lg"
              onClick={() => {
                setStep(1);
              }}
            >
              <Icon icon="mdi:chevron-left" className="h-5 w-5" />
              {t("Go Back")}
            </Button>
            <Button
              type="button"
              color="primary"
              size="lg"
              className="w-full"
              onClick={handleContinue}
              disabled={selectedWalletType.value === ""}
            >
              {t("Continue")}
              <Icon icon="mdi:chevron-right" className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <hr className="my-6 border-t border-muted-200 dark:border-muted-800" />
        <div className="text-center">
          <p className="mt-8 space-x-2 font-sans text-sm leading-5 text-muted-600 dark:text-muted-400">
            <span>{t("Having any trouble")}</span>
            <Link
              href="#"
              className="font-medium text-primary-600 underline-offset-4 transition duration-150 ease-in-out hover:text-primary-500 hover:underline focus:underline focus:outline-none"
            >
              {t("Contact us")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const SelectWalletType = memo(SelectWalletTypeBase);
