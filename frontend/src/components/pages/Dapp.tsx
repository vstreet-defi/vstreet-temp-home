import DappTemplate from "components/templates/Dapp";
import ApiLoader from "components/atoms/ApiLoader";
import { useApi, useAccount } from "@gear-js/react-hooks";
import Header, { DappTab } from "components/templates/Header/Header";
import { isMobileDevice } from "utils/isMobile";
import { AlertModal } from "components/molecules/alert-modal/AlertModal";
import { FundsManager } from "components/organisms/FundsManager/FundsManager";
import TotalLiquidityPool from "components/atoms/TotalLiquidityPool/TotalLiquidityPool";
import { AlertModalProvider } from "contexts/alertContext";
import StakingInfo from "components/organisms/StakingInfo/StakingInfo";
import { LiquidityProvider } from "contexts/stateContext";

function DappPage() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();
  const isAppReady = isApiReady && isAccountReady;
  const navBarItems = [
    DappTab.Home,
    DappTab.Supply,
    DappTab.Borrow,
    DappTab.Markets,
  ];

  return (
    <>
      <LiquidityProvider>
        <AlertModalProvider>
          {isAppReady ? (
            <>
              <Header
                isAccountVisible={isAccountReady}
                items={navBarItems}
                isMobile={isMobileDevice()}
              />
              <DappTemplate
                bannerComponent={
                  <>
                    <AlertModal />
                    <TotalLiquidityPool />
                  </>
                }
                leftSectionComponent={
                  <>
                    <FundsManager />
                  </>
                }
                rightSectionComponent={
                  <>
                    <StakingInfo />
                  </>
                }
              />
            </>
          ) : (
            <ApiLoader />
          )}
        </AlertModalProvider>
      </LiquidityProvider>
    </>
  );
}

export default DappPage;
