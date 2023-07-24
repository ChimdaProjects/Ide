import ButtonTabs from "../ButtonTabs/ButtonTabs";
import CodeTab from "../CodeTab/CodeTab";
import { useSelector } from "react-redux";
import { useState } from "react";
import Preview from "../Preview/Preview";
function Tabs() {
    const tabState = useSelector(state => state.tabs);
    const previewData = useSelector(state => state.preview);
    const [tabIndex, setTabIndex]=useState(tabState[0].id)
    console.log("tabstate", tabState)
    console.log(tabState[0].id);
    return (
        <div className="flex grow">
            <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
              { tabState.map(tab => (
                    <ButtonTabs 
                        key={tab.id}
                        id={tab.id} 
                        buttonContent= {tab.buttonContent} 
                        imgUrl={tab.imgUrl}
                        toggleTab= {id => setTabIndex(id)}
                        />
               ))}
            </div>
            <div className="w-full grow relative">
                <CodeTab 
                    id={tabIndex}
                    code={tabState.find(obj => obj.id === tabIndex).code}
                />
                {previewData.preview && <Preview /> }
                
            </div>

        </div>
      );
}

export default Tabs;