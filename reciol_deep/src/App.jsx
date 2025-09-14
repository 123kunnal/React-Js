import { useState } from "react";
import "./App.css";
import { Networkatom,Notificationatom,Jobatom, Messainatom } from "./atoms";
import { useRecoilValue, RecoilRoot,useRecoilState } from "recoil"; // ✅ Import RecoilRoot

function App() {
  return (
    <RecoilRoot>
      <Pick />
    </RecoilRoot>
  );
}

function Pick() {
  const networknotificationCount = useRecoilValue(Networkatom);
  const NotificationCount = useRecoilValue(Notificationatom);
  const JobsnotificationCount = useRecoilValue(Jobatom);
  const [mesatomCount,setMe]=useRecoilState(Messainatom);
  return (
    <>
      <button>Home</button>
      <button>
        My Network ({networknotificationCount >= 100 ? "99+" : networknotificationCount})
      </button>
      <button>Jobs ({JobsnotificationCount>=100?"99+":JobsnotificationCount})</button>
      <button>Notifications ({NotificationCount>=100?"99+":NotificationCount})</button>
      <button>Messaging ({mesatomCount >= 100 ? "99+" : mesatomCount})</button>

      <button onClick={()=>{
        setMe(mesatomCount+1)
      }}>ME</button>
    </>
  );
}

export default App;
