import DappTemplate from "components/templates/Dapp";
import ApiLoader from "components/atoms/ApiLoader";
import { useApi, useAccount } from "@gear-js/react-hooks";
import Header from "components/templates/Header/Header";
import { isMobileDevice } from "utils/isMobile";

function DappPage() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();
  const isAppReady = isApiReady && isAccountReady;
  const navBarItems = ["Home", "Supply", "Borrow", "Markets"];
  return (
    <>
      {false ? (
        <>
          <Header
            isAccountVisible={isAccountReady}
            items={navBarItems}
            isMobile={isMobileDevice()}
          />
          <DappTemplate
            bannerComponent={<></>}
            leftSectionComponent={<></>}
            rightSectionComponent={<></>}
          />
        </>
      ) : (
        <ApiLoader />
      )}
    </>
  );
}

export default DappPage;
