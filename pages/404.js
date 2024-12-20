import PageHead from "./Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import NotFound from "@/components/NotFound/NotFound";
import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import FooterThree from "@/components/Footer/Footer-Three";

const ErrorPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <PageHead title="Page not found" />
        <HeaderStyleThree
          headerType="rbt-transparent-header"
          headerSticky="rbt-sticky"
        />
        <NotFound />

        <Separator />
        <FooterThree />
      </Context>
    </Provider>
  );
};

export default ErrorPage;
