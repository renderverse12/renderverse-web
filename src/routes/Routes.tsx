import AzureCaseStudy from "@/components/modules/CaseStudies/AzureCaseStudy/AzureCaseStudy";
import CaseStudies from "@/components/modules/CaseStudies/CaseStudies";
import MinervaCaseStudy from "@/components/modules/CaseStudies/MinervaCaseStudy/MinervaCaseStudy";
import PierceCaseStudy from "@/components/modules/CaseStudies/PierceCaseStudy/PierceCaseStudy";
import Company from "@/components/modules/Company/Company";
import ContactUs from "@/components/modules/ContactUs/ContactUs";
import Home from "@/components/modules/Home/Home";
import LandingPage from "@/components/modules/LandingPage/LandingPage";
import Portfolio from "@/components/modules/Portfolio/Portfolio";
import Services from "@/components/modules/Services/Services";
import Layout from "@/layout/Layout";
import { routes } from "@/utils/constants";
import { Route, Routes as BrowserRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRoutes>
      {/* <Route path={routes.login} element={<LogInLayout />}>
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.newPassword} element={<NewPassword />} />
        <Route path={routes.login} element={<LogIn />} />
        </Route> */}
      <Route element={<Layout />}>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.caseStudy} element={<CaseStudies />} />
        <Route path={routes.azure} element={<AzureCaseStudy />} />
        <Route path={routes.minerva} element={<MinervaCaseStudy />} />
        <Route path={routes.pierce} element={<PierceCaseStudy />} />
        <Route path={routes.company} element={<Company />} />
        <Route path={routes.landingPage} element={<LandingPage />} />
        <Route path={routes.contactUs} element={<ContactUs />} />
        <Route path={routes.services} element={<Services />} />
      </Route>
    </BrowserRoutes>
  );
};

export default Routes;
