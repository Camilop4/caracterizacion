import FormPerson from "./view/formPerson/FormPerson";
import FormHome from "./view/formHome/FormHome";
import Landing from "./view/landing/Landing";
import { usePage } from "./store/renderStore";
import "./App.css";
import Location from "./view/location/Location";
import CoreSelection from "./view/coreSelection/CoreSelection";
import InfoFinal from "./view/infoFinal/InfoFinal";

function App() {
  const [landing, formUser, formHome, formCore, selection, infoPerson] = usePage((state) => [
    state.page.landing,
    state.page.formUser,
    state.page.formHome,
    state.page.formCore,
    state.page.selection,
    state.page.infoPerson,
  ]);
  const [landingUse, formUserUse, formHomeUse, formCoreUse, selectionUse, infoPersonUse] = usePage((state) => [
    state.landingUse,
    state.formUserUse,
    state.formHomeUse,
    state.formCoreUse,
    state.selectionUse,
    state.infoPersonUse
  ]);
  return (
    <div className="App">
      {landing && <Landing page={selectionUse} />}
      {formCore && <Location pageNext={formHomeUse} pageBack={selectionUse} />}
      {formUser && <FormPerson pageNext={infoPersonUse} pageBack={formHomeUse} />}
      {formHome && <FormHome pageNext={formUserUse} pageBack={formCoreUse} />}
      {selection && <CoreSelection pageBack={landingUse} pageCore={formCoreUse} pageUser={formUserUse} />}
      {infoPerson && <InfoFinal pageNext={selectionUse} home={landingUse} />}
    </div>
  );
}

export default App;
